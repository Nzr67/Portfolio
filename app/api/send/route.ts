import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { EmailTemplate } from '@/components/ui/email-template';


export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY is missing' }, { status: 500 });
    }
    const fromEmail = process.env.FROM_EMAIL;
    if (!fromEmail) {
      return NextResponse.json({ error: 'FROM_EMAIL is missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    console.log('Request Body:', body);

    const { name, email } = body;
    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // from: "Acme <onboarding@resend.dev>", // Ensure this email is verified in Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Contact Form Submission',
      react: await EmailTemplate({ firstName: name }),
    });
    return NextResponse.json({ data, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.log('Error', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
