import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    const data = await resend.emails.send({
      from: 'Your Professionals <no-reply@yourprofessionals.in>',
      to: 'enquiryyourprofessionals.in@gmail.com',
      subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Inquiry Details</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
