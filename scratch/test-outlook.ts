import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { sendOutlookEmail } from "../src/lib/outlook";

async function test() {
  console.log("Testing Outlook Graph API with credentials from .env.local...");
  console.log("Tenant ID:", process.env.AZURE_TENANT_ID);
  console.log("Client ID:", process.env.AZURE_CLIENT_ID);
  console.log("Sender:", process.env.OUTLOOK_SENDER_EMAIL);

  try {
    await sendOutlookEmail({
      to: process.env.OUTLOOK_RECIPIENT_EMAIL || "hello@tapito.ai",
      subject: "Test Contact Form Email",
      html: "<p>This is a test email from Tapito Contact Form via Microsoft Graph API.</p>",
      text: "This is a test email from Tapito Contact Form via Microsoft Graph API.",
      replyTo: "test@example.com",
    });
    console.log("SUCCESS! Email sent cleanly via Microsoft Graph API!");
  } catch (err) {
    console.error("ERROR SENDING EMAIL:", err);
  }
}

test();
