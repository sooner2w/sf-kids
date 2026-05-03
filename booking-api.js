/*
 * SF-Kids Booking API
 *
 * Calls the Cloudflare Worker proxy — Airtable token stays server-side,
 * never in this file or in your GitHub repo.
 *
 * After deploying worker.js to Cloudflare, paste your Worker URL below.
 * It will look like: https://sf-kids-booking.YOUR-NAME.workers.dev
 */

const WORKER_URL = 'https://sf-kids-booking.brandonbreon.workers.dev';

function _isConfigured() {
  return !WORKER_URL.includes('YOUR-SUBDOMAIN');
}

/*
 * checkAvailability(activityId, timeSlot, date)
 * Returns: { booked, capacity, available, isFull }
 */
async function checkAvailability(activityId, timeSlot, date) {
  const a        = ACTIVITIES_DATA[activityId];
  const capacity = a ? (a.capacity || 12) : 12;

  if (!_isConfigured()) {
    return { booked: 0, capacity, available: capacity, isFull: false, unconfigured: true };
  }

  try {
    const url = `${WORKER_URL}/availability?` + new URLSearchParams({ activityId, timeSlot, date });
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Worker ${res.status}`);
    const { booked } = await res.json();
    const available  = Math.max(0, capacity - booked);
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
  const ref      = 'SFK-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  const a        = ACTIVITIES_DATA[bookingData.activityId] || {};
  const priceNum = parseFloat((a.price || '0').replace('$', '')) || 0;
  const subtotal = priceNum * bookingData.spots;
  const fee      = subtotal * 0.03;
  const total    = subtotal + fee;

  if (!_isConfigured()) {
    console.warn('[SF-Kids] Worker not configured — booking simulated. See booking-api.js.');
    return { success: true, bookingRef: ref, simulated: true };
  }

  // Final capacity check before writing
  const avail = await checkAvailability(bookingData.activityId, bookingData.timeSlot, bookingData.date);
  if (avail.isFull) {
    return { success: false, error: 'This slot just filled up. Please choose a different time.' };
  }
  if (avail.available < bookingData.spots) {
    return {
      success: false,
      error: `Only ${avail.available} spot${avail.available === 1 ? '' : 's'} left. Please reduce the number of children or pick a different time.`
    };
  }

  const fields = {
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
  };

  try {
    const res = await fetch(`${WORKER_URL}/booking`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(fields)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    return { success: true, bookingRef: ref };
  } catch (e) {
    return { success: false, error: e.message || 'Booking failed. Please try again.' };
  }
}
