import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { email, subject, message } = body as Record<string, unknown>;
  if (
    typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== 'string' || !subject.trim() || subject.length > 200 ||
    typeof message !== 'string' || !message.trim() || message.length > 5000
  ) {
    return NextResponse.json({ error: 'Please provide a valid email, subject, and message.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const toEmail = process.env.TO_EMAIL;
  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json({ error: 'Messaging is temporarily unavailable. Please use LinkedIn.' }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'Contact Form Submission',
      reply_to: email,
      react: EmailTemplate({ email, subject, body: message }),
    });
    if (error || !data) {
      return NextResponse.json({ error: 'Message could not be sent.' }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Message could not be sent.' }, { status: 502 });
  }
}
