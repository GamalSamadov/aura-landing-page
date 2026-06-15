import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: unknown };

    if (typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    // TODO: connect a real destination here — a database, an email provider
    // (Resend, Mailchimp), a Google Sheet, etc. For now we acknowledge the
    // signup and log it server-side so the form is fully functional end-to-end.
    console.log(`[waitlist] new signup: ${email}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
