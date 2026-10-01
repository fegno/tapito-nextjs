import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { render } from "react-email";
import ContactEmail from "@/emails/ContactEmail";
import { sendOutlookEmail } from "@/lib/outlook";

const schema = z.object({
  firstName: z.string().min(1).max(100).trim(),
  lastName:  z.string().min(1).max(100).trim(),
  email:     z.string().email().max(254).trim(),
  company:   z.string().max(200).trim(),
  country:   z.string().min(1).max(100),
  reason:    z.enum(["demo", "partner", "support", "press", "careers"]),
  message:        z.string().min(10).max(5000).trim(),
  recaptchaToken: z.string().optional().default(""),
});

const REASON_LABELS: Record<string, string> = {
  demo:    "Book Demo",
  partner: "Partnership Inquiry",
  support: "Technical Support",
  press:   "Press & Media",
  careers: "Careers",
};

// In-memory rate limiter: 5 submissions per IP per hour
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // 10 KB guard against oversized payloads
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 10_240) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  // Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse & validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { firstName, lastName, email, company, country, reason, message, recaptchaToken } = result.data;
  const reasonLabel = REASON_LABELS[reason];

  // Verify reCAPTCHA token if key is configured
  if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
    try {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });
      const verifyData = (await verifyRes.json()) as { success: boolean; score: number };
      if (!verifyData.success || verifyData.score < 0.5) {
        return NextResponse.json({ error: "Bot check failed. Please try again." }, { status: 400 });
      }
    } catch (err) {
      console.warn("[contact API] reCAPTCHA verification error:", err);
    }
  }

  // Render email template
  const props = { firstName, lastName, email, company, country, reasonLabel, message };
  const html = await render(<ContactEmail {...props} />);
  const text = await render(<ContactEmail {...props} />, { plainText: true });

  const recipient = process.env.OUTLOOK_RECIPIENT_EMAIL || "hello@tapito.ai,anoop.g@fegno.com,loyaltymgr@fegno.com";

  // Send via Outlook Microsoft Graph API (or Resend fallback)
  try {
    if (process.env.AZURE_CLIENT_ID && process.env.AZURE_CLIENT_SECRET && process.env.AZURE_TENANT_ID) {
      await sendOutlookEmail({
        to: recipient,
        subject: `[Contact Inquiry] ${reasonLabel} — ${firstName} ${lastName}`,
        html,
        text,
        replyTo: email,
      });
    } else if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "hello@tapito.ai",
        to: recipient,
        replyTo: email,
        subject: `[Contact Inquiry] ${reasonLabel} — ${firstName} ${lastName}`,
        html,
        text,
      });
    } else {
      console.warn("[contact API] No email credentials configured in environment.");
      return NextResponse.json(
        { error: "Email service not configured. Please restart the dev server to reload .env.local" },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    const errorDetails = err instanceof Error ? err.message : String(err);
    console.error("[contact API] Email send error:", errorDetails);
    return NextResponse.json(
      { error: `Email Delivery Error: ${errorDetails}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}


