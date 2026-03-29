import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildContactEmail } from "@/lib/contact-email";

const MAX_MESSAGE_LENGTH = 3000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validatePayload = ({ name, email, subject, message }) => {
  if (!name || !email || !subject || !message) {
    return "Please complete all required fields.";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address.";
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return "Your message is too long. Please keep it under 3000 characters.";
  }

  return null;
};

const sendWithNodemailer = async ({ recipient, emailContent, senderEmail }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: recipient,
    replyTo: senderEmail,
    subject: emailContent.subjectLine,
    text: emailContent.text,
    html: emailContent.html,
  });
};

const sendWithResend = async ({ recipient, emailContent, senderEmail }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      reply_to: senderEmail,
      subject: emailContent.subjectLine,
      text: emailContent.text,
      html: emailContent.html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error: ${errorBody}`);
  }

  return response.json();
};

export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const payload = {
    name: body?.name?.trim() || "",
    email: body?.email?.trim() || "",
    company: body?.company?.trim() || "",
    subject: body?.subject?.trim() || "",
    message: body?.message?.trim() || "",
    companyWebsite: body?.companyWebsite?.trim() || "",
  };

  if (payload.companyWebsite) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 400 }
    );
  }

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

  if (!recipient) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Contact email is not configured yet. Set CONTACT_TO_EMAIL or EMAIL_USER on the server.",
      },
      { status: 503 }
    );
  }

  const emailContent = buildContactEmail(payload);

  try {
    if (process.env.RESEND_API_KEY) {
      await sendWithResend({
        recipient,
        emailContent,
        senderEmail: payload.email,
      });
    } else if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await sendWithNodemailer({
        recipient,
        emailContent,
        senderEmail: payload.email,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured. Add RESEND_API_KEY for Vercel or EMAIL_USER and EMAIL_PASS for Gmail.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "I could not send the message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
