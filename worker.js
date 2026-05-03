/*
 * SF-Kids Booking Proxy — Cloudflare Worker
 *
 * This Worker keeps your Airtable token server-side.
 * The browser never sees it — only this Worker does.
 *
 * DEPLOY STEPS (one-time, ~5 minutes):
 * 1. Go to cloudflare.com → sign up free (no credit card needed)
 * 2. Dashboard → Workers & Pages → Create → Create Worker
 * 3. Name it: sf-kids-booking → Deploy (ignore the default code)
 * 4. Click "Edit code" → paste this entire file → Deploy
 * 5. Go to Settings → Variables and Secrets → Add the following:
 *      Type: Secret   Name: AIRTABLE_TOKEN    Value: patA0HL7pnjcDh9Kw.381cd0...
 *      Type: Secret   Name: AIRTABLE_BASE_ID  Value: app6MQzrvn1JrzKsx
 * 6. Your Worker URL will be: https://sf-kids-booking.YOUR-NAME.workers.dev
 * 7. Copy that URL and paste it into booking-api.js as WORKER_URL, then push to GitHub.
 */

const ALLOWED_ORIGINS = [
  'https://sooner2w.github.io',
  'http://localhost',
  'http://127.0.0.1',
  'null'
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || 'null';
    const url    = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const airtableBase = `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/Bookings`;
    const authHeader   = { 'Authorization': `Bearer ${env.AIRTABLE_TOKEN}` };

    // ── GET /availability ─────────────────────────────────────────
    // Query: ?activityId=soccer&timeSlot=9:00 AM&date=2026-05-03
    // Returns: { booked: N }
    if (url.pathname === '/availability' && request.method === 'GET') {
      const activityId = url.searchParams.get('activityId');
      const timeSlot   = url.searchParams.get('timeSlot');
      const date       = url.searchParams.get('date');

      if (!activityId || !timeSlot || !date) {
        return json({ error: 'Missing parameters: activityId, timeSlot, date' }, 400, origin);
      }

      const formula = encodeURIComponent(
        `AND({ActivityID}="${activityId}",{TimeSlot}="${timeSlot}",{Date}="${date}",{Status}!="Cancelled")`
      );

      try {
        const res = await fetch(`${airtableBase}?filterByFormula=${formula}&fields[]=Spots`, {
          headers: authHeader
        });
        if (!res.ok) throw new Error(`Airtable ${res.status}`);
        const data   = await res.json();
        const booked = data.records.reduce((sum, r) => sum + (r.fields.Spots || 1), 0);
        return json({ booked }, 200, origin);
      } catch (e) {
        return json({ error: e.message }, 502, origin);
      }
    }

    // ── POST /booking ─────────────────────────────────────────────
    // Body: the Airtable fields object (built by booking-api.js)
    // Returns: { success: true, recordId }
    if (url.pathname === '/booking' && request.method === 'POST') {
      let fields;
      try {
        fields = await request.json();
      } catch {
        return json({ error: 'Invalid JSON body' }, 400, origin);
      }

      // Basic server-side validation
      if (!fields.ActivityID || !fields.ParentEmail || !fields.Date) {
        return json({ error: 'Missing required fields' }, 400, origin);
      }

      try {
        const res = await fetch(airtableBase, {
          method:  'POST',
          headers: { ...authHeader, 'Content-Type': 'application/json' },
          body:    JSON.stringify({ records: [{ fields }] })
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error?.message || `Airtable ${res.status}`);
        }
        const data = await res.json();
        return json({ success: true, recordId: data.records[0]?.id }, 200, origin);
      } catch (e) {
        return json({ error: e.message }, 502, origin);
      }
    }

    return json({ error: 'Not found' }, 404, origin);
  }
};
