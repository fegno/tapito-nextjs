export interface SendOutlookMailParams {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Sends an email using Microsoft Graph API with Azure AD OAuth2 Client Credentials Flow.
 * Requires Azure App Registration with Mail.Send application permissions.
 */
export async function sendOutlookEmail({
  to,
  subject,
  html,
  replyTo,
}: SendOutlookMailParams): Promise<void> {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;
  const senderEmail = process.env.OUTLOOK_SENDER_EMAIL || "hello@tapito.ai";

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      "Missing Azure AD credentials. Please check AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET in .env.local"
    );
  }

  // Parse recipient list
  const recipientList = Array.isArray(to)
    ? to
    : to.split(",").map((e) => e.trim()).filter(Boolean);

  const toRecipients = recipientList.map((address) => ({
    emailAddress: { address },
  }));

  // Step 1: Request OAuth2 Access Token from Microsoft Entra ID (Azure AD)
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const tokenParams = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const tokenRes = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenParams.toString(),
  });

  if (!tokenRes.ok) {
    const errorText = await tokenRes.text();
    console.error("[Outlook Graph API] Token error:", errorText);
    throw new Error(`Azure AD Auth Failed (${tokenRes.status}): ${errorText}`);
  }

  const tokenData = (await tokenRes.json()) as { access_token: string };
  const accessToken = tokenData.access_token;

  // Step 2: Send email via Microsoft Graph API endpoint
  const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`;

  const messagePayload = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: html,
      },
      toRecipients,
      ...(replyTo
        ? {
            replyTo: [
              {
                emailAddress: {
                  address: replyTo,
                },
              },
            ],
          }
        : {}),
    },
    saveToSentItems: "true",
  };

  const graphRes = await fetch(graphUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messagePayload),
  });

  if (!graphRes.ok) {
    const errorText = await graphRes.text();
    console.error("[Outlook Graph API] SendMail error:", errorText);
    throw new Error(`Microsoft Graph API sendMail failed (${graphRes.status}): ${errorText}`);
  }
}
