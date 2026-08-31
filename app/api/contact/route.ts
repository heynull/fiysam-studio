import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTextValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getConfiguration() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const secure = process.env.SMTP_SECURE;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_TO;

  if (!host || !Number.isInteger(port) || port <= 0 || (secure !== 'true' && secure !== 'false') || !user || !pass || !from || !to || !emailRegex.test(to)) {
    return null;
  }

  return {
    host,
    port,
    secure: secure === 'true',
    auth: { user, pass },
    from,
    to,
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit the form again.' }, { status: 400 });
  }

  const name = getTextValue(payload.name);
  const email = getTextValue(payload.email);
  const company = getTextValue(payload.company);
  const service = getTextValue(payload.service);
  const message = getTextValue(payload.message);

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const configuration = getConfiguration();
  if (!configuration) {
    return NextResponse.json(
      { error: 'Contact form delivery is not configured yet. Please check back later.' },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: configuration.host,
      port: configuration.port,
      secure: configuration.secure,
      auth: configuration.auth,
    });

    await transporter.sendMail({
      from: configuration.from,
      to: configuration.to,
      replyTo: email,
      subject: `[Fiysam Studio] New enquiry: ${service.replace(/[\r\n]+/g, ' ')}`,
      text: [
        'New Fiysam Studio enquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Service: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });
  } catch {
    return NextResponse.json(
      { error: 'We could not send your message. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: 'Thank you for getting in touch.' }, { status: 200 });
}
