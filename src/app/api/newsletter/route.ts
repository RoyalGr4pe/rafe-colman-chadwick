import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, tag = "supporter" } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEWSLETTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 503 }
      );
    }

    // ConvertKit example — swap for Mailchimp if preferred
    const formId = process.env.CONVERTKIT_FORM_ID;
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          tags: [tag],
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json(
        { error: "Subscription failed", detail: body },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
