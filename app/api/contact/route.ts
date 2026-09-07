import { NextResponse } from "next/server";

const NOTIFY_EMAIL = "jay.yoon@indomaru.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, area, message } = body ?? {};

    if (!name || !email || !area || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "INDOMARU Website <onboarding@resend.dev>",
          to: [NOTIFY_EMAIL],
          reply_to: email,
          subject: `New enquiry: ${area}`,
          text: `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nArea: ${area}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return NextResponse.json(
          { error: "Failed to send email." },
          { status: 502 }
        );
      }
    } else {
      console.log("New INDOMARU enquiry (RESEND_API_KEY not set):", body);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
