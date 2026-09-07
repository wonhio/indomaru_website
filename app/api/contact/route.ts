import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, area, message } = body ?? {};

    if (!name || !email || !area || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: Wire this up to an email/notification service, e.g. Resend,
    // Postmark, or a CRM webhook. Example with Resend:
    //
    // await resend.emails.send({
    //   from: "INDOMARU <enquiries@indomaru.com>",
    //   to: "info@indomaru.com",
    //   subject: `New enquiry: ${area}`,
    //   text: `${name} (${email})\n\n${message}`,
    // });
    console.log("New INDOMARU enquiry:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
