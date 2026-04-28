/*
 * SF-Kids Booking API — Airtable Integration
 *
 * SETUP (one-time, ~10 minutes):
 * 1. Go to airtable.com → sign up free
 * 2. Create a new Base named "SF-Kids Bookings"
 * 3. Rename the default table to "Bookings"
 * 4. Add these fields (Field name → Field type):
 *      BookingRef      → Single line text
 *      ActivityID      → Single line text
 *      ActivityTitle   → Single line text
 *      Date            → Date
 *      TimeSlot        → Single line text
 *      ChildName       → Single line text
 *      ChildAge        → Single line text
 *      Experience      → Single line text
 *      MedicalNotes    → Long text
 *      ParentName      → Single line text
 *      ParentEmail     → Email
 *      ParentPhone     → Phone
 *      Spots           → Number (integer)
 *      Subtotal        → Currency
 *      ServiceFee      → Currency
 *      Total           → Currency
 *      Status          → Single select  (options: Confirmed, Cancelled)
 *      OrganizerEmail  → Email
 *
 * 5. Get your Base ID: open the base → copy the URL → it looks like
 *    airtable.com/appXXXXXXXXXXXXXX/...  — the "appXXX..." is your baseId
 *
 * 6. Get your Personal Access Token:
 *    airtable.com/create/tokens → "Create new token"
 *    Name: sf-kids  |  Scopes: data.records:read + data.records:write
 *    Access: your SF-Kids Bookings base only → Save
 *    Copy the token (starts with "pat...")
 *
 * 7. Paste both values below and push to GitHub.
 *
 * 8. OPTIONAL — Set up Airtable Automations so organizers get email alerts:
 *    Automate tab → + New automation → "When record is created"
 *    Action: "Send email"  →  To: {OrganizerEmail}  →  Subject: "New booking: {ActivityTitle}"
 *    Body: include BookingRef, Date, TimeSlot, ChildName, Spots, ParentName, ParentEmail, ParentPhone
 *    Add a second automation: "When record is created" → Send email to {ParentEmail} (confirmation to parent)
 */

const AIRTABLE_CONFIG = {
  baseId: 'YOUR_AIRTABLE_BASE_ID',      // e.g. appABC123XYZ
  token:  'YOUR_PERSONAL_ACCESS_TOKEN', // e.g. patABC123.xxxx
  table:  'Bookings'
};

// Returns true once the user has filled in real credentials
function _isConfigured() {
  return AIRTABLE_CONFIG.baseId.startsWith('app') &&
         AIRTABLE_CONFIG.token.startsWith('pat');
}

function _url() {
  return `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${encodeURIComponent(AIRTABLE_CONFIG.table)}`;
}

function _headers() {
  return {
    'Authorization': `Bearer ${AIRTABLE_CONFIG.token}`,
    'Content-Type': 'application/json'
  };
}

/*
 * checkAvailability(activityId, timeSlot, date)
 * Returns: { booked, capacity, available, isFull }
 * Falls back to "fully available" if Airtable not yet configured.
 */
async function checkAvailability(activityId, timeSlot, date) {
  const a = ACTIVITIES_DATA[activityId];
  const capacity = a ? (a.capacity || 12) : 12;

  if (!_isConfigured()) {
    return { booked: 0, capacity, available: capacity, isFull: false, unconfigured: true };
  }

  const formula = encodeURIComponent(
    `AND({ActivityID}="${activityId}",{TimeSlot}="${timeSlot}",{Date}="${date}",{Status}!="Cancelled")`
  );

  try {
    const res = await fetch(`${_url()}?filterByFormula=${formula}&fields[]=Spots`, {
      headers: _headers()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const booked = data.records.reduce((sum, r) => sum + (r.fields.Spots || 1), 0);
    const available = Math.max(0, capacity - booked);
    return { booked, capacity, available, isFull: available === 0 };
  } catch (e) {
    console.warn('[SF-Kids] Availability check failed — showing available by default:', e.message);
    return { booked: 0, capacity, available: capacity, isFull: false };
  }
}

/*
 * createBooking(bookingData)
 * bookingData: { activityId, date, timeSlot, spots, childName, childAge,
 *                experience, medicalNotes, parentName, parentEmail, parentPhone }
 * Returns: { success: true, bookingRef } | { success: false, error }
 */
async function createBooking(bookingData) {
  const ref = 'SFK-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  const a = ACTIVITIES_DATA[bookingData.activityId] || {};
  const priceNum = parseFloat((a.price || '0').replace('$', '')) || 0;
  const subtotal = priceNum * bookingData.spots;
  const fee = subtotal * 0.03;
  const total = subtotal + fee;

  // Not yet configured — simulate success so the UX still works during setup
  if (!_isConfigured()) {
    console.warn('[SF-Kids] Airtable not configured — booking simulated locally. See booking-api.js setup instructions.');
    return { success: true, bookingRef: ref, simulated: true };
  }

  // Double-check capacity one more time before writing the record
  const avail = await checkAvailability(bookingData.activityId, bookingData.timeSlot, bookingData.date);
  if (avail.isFull) {
    return { success: false, error: 'Sorry — this slot just filled up. Please choose a different time.' };
  }
  if (avail.available < bookingData.spots) {
    return {
      success: false,
      error: `Only ${avail.available} spot${avail.available === 1 ? '' : 's'} left in this slot. Please reduce the number of children or pick a different time.`
    };
  }

  try {
    const res = await fetch(_url(), {
      method: 'POST',
      headers: _headers(),
      body: JSON.stringify({
        records: [{
          fields: {
            BookingRef:     ref,
            ActivityID:     bookingData.activityId,
            ActivityTitle:  a.title || '',
            Date:           bookingData.date,
            TimeSlot:       bookingData.timeSlot,
            ChildName:      bookingData.childName,
            ChildAge:       bookingData.childAge,
            Experience:     bookingData.experience || '',
            MedicalNotes:   bookingData.medicalNotes || '',
            ParentName:     bookingData.parentName,
            ParentEmail:    bookingData.parentEmail,
            ParentPhone:    bookingData.parentPhone || '',
            Spots:          bookingData.spots,
            Subtotal:       +subtotal.toFixed(2),
            ServiceFee:     +fee.toFixed(2),
            Total:          +total.toFixed(2),
            Status:         'Confirmed',
            OrganizerEmail: a.organizerEmail || ''
          }
        }]
      })
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.error?.message || `HTTP ${res.status}`);
    }
    return { success: true, bookingRef: ref };
  } catch (e) {
    return { success: false, error: e.message || 'Booking failed. Please try again.' };
  }
}
