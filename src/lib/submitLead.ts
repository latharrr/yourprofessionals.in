// One place that delivers a lead to both channels: the Google Sheet (Apps Script)
// and the enquiry inbox (/api/send-email). Every form on the site uses this.

export interface LeadPayload {
    name: string;
    phone: string;
    email?: string;
    service: string;
    message?: string;
}

/**
 * Resolves when the lead reached at least one channel, rejects otherwise.
 * The Sheet call is fire-and-forget (no-cors responses are opaque), so a
 * thrown fetch is the only failure we can detect there.
 */
export async function submitLead(lead: LeadPayload): Promise<void> {
    const sheetUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

    const sheet = sheetUrl
        ? (() => {
              const params = new URLSearchParams({
                  Name: lead.name,
                  Phone: lead.phone,
                  Email: lead.email ?? '',
                  Service: lead.service,
              });
              if (lead.message) params.append('Message', lead.message);
              return fetch(`${sheetUrl}?${params.toString()}`, { method: 'POST', mode: 'no-cors' }).then(() => true);
          })()
        : Promise.resolve(false);

    const email = fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
    }).then((res) => res.ok);

    const [sheetOk, emailOk] = await Promise.all([sheet.catch(() => false), email.catch(() => false)]);
    if (!sheetOk && !emailOk) throw new Error('Lead could not be delivered');
}
