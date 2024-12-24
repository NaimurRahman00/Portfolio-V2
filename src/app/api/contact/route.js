'use server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_SENDER_USER,
        pass: process.env.NEXT_PUBLIC_SENDER_PASS,
    },
});

export async function POST(request) {
    try {
        const {name, email, message} = await request.json();

        // validation
        if (!name || !email || !message) {
            return NextResponse.json(
                {error: 'Name, Email and Message are required!'},
                {status: 400}
            )
        }

        const mailOption = {
            form: process.env.NEXT_PUBLIC_SENDER_USER,
            to: process.env.NEXT_PUBLIC_RECEIVER_USER,
            subject: "I have a short message for you.",
            text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `,
        };

        await transporter.sendMail(mailOption);

        return NextResponse.json(
            {message: 'Contact Form Submitted Successfully!'},
            {status: 200}
        )

    } catch (error) {
        console.error("Error processing contact form", error);

        return NextResponse.json(
            {error: 'Failed processing contact form!'},
            {status: 500}
        )
    }
}