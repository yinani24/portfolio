"use server";

import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/emailtemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';
const toEmail = process.env.TO_EMAIL || '';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.json())
    const { email, subject, message } = req.body.json();
    
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: "Contact Form Submission",
            reply_to: email,
            react: EmailTemplate({ email: email, subject: subject, body: message }),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error});
    }
}
