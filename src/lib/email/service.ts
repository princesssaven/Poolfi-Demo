interface SendEmailInput {
  html: string;
  subject: string;
  text: string;
  to: string;
}

function getResendConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.EMAIL_FROM,
    replyTo: process.env.EMAIL_REPLY_TO,
  };
}

export function isEmailConfigured() {
  const { apiKey, from } = getResendConfig();
  return Boolean(apiKey && from);
}

export async function sendEmail(input: SendEmailInput) {
  const { apiKey, from, replyTo } = getResendConfig();

  // Local delivery is logged until a verified sender domain is configured.
  if (process.env.NODE_ENV !== "production" || from?.includes("resend.dev")) {
    console.log("\n=======================================================");
    console.log("📧 EMAIL LOGGED (Development Mode)");
    console.log(`To:      ${input.to}`);
    console.log(`Subject: ${input.subject}`);
    console.log(`Message: ${input.text}`);
    console.log("=======================================================\n");
    return { success: true, development: true };
  }

  if (!apiKey || !from) {
    throw new Error("Email delivery is not configured. Set RESEND_API_KEY and EMAIL_FROM.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      html: input.html,
      reply_to: replyTo ? [replyTo] : undefined,
      subject: input.subject,
      text: input.text,
      to: [input.to],
    }),
  });

  if (!response.ok) {
    const payload = await response.text();
    throw new Error(`Resend error: ${response.status} ${payload}`);
  }

  return response.json().catch(() => null);
}

function wrapEmailTemplate(title: string, intro: string, content: string) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; background: #f4f7fc; padding: 32px 16px;">
      <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 20px; padding: 32px; border: 1px solid #e5e8ef;">
        <div style="margin-bottom: 20px;">
          <div style="display: inline-block; background: #eef4ff; color: #005ae2; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 8px 12px; border-radius: 999px;">
            PoolFi
          </div>
        </div>
        <h1 style="margin: 0 0 12px; color: #111827; font-size: 28px; line-height: 1.2;">${title}</h1>
        <p style="margin: 0 0 24px; color: #6b7280; font-size: 15px; line-height: 1.7;">${intro}</p>
        ${content}
        <p style="margin: 24px 0 0; color: #9ca3af; font-size: 12px; line-height: 1.6;">
          If you didn&apos;t request this, you can safely ignore this email.
        </p>
      </div>
    </div>
  `;
}

export async function sendVerificationCodeEmail(to: string, code: string) {
  const subject = "Verify your PoolFi account";
  const html = wrapEmailTemplate(
    "Verify your account",
    "Use this 6-digit code to finish creating your PoolFi account.",
    `
      <div style="margin: 0 0 24px; padding: 18px 20px; background: #eef4ff; border: 1px solid rgba(0, 90, 226, 0.12); border-radius: 16px; text-align: center;">
        <div style="font-size: 12px; color: #005ae2; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; margin-bottom: 8px;">Verification Code</div>
        <div style="font-size: 32px; letter-spacing: 0.32em; color: #005ae2; font-weight: 800;">${code}</div>
      </div>
      <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">
        This code expires in 15 minutes.
      </p>
    `
  );

  const text = `Your PoolFi verification code is ${code}. This code expires in 15 minutes.`;

  return sendEmail({
    html,
    subject,
    text,
    to,
  });
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const subject = "Reset your PoolFi password";
  const html = wrapEmailTemplate(
    "Reset your password",
    "Use the button below to choose a new password for your PoolFi account.",
    `
      <div style="margin-bottom: 24px;">
        <a href="${resetUrl}" style="display: inline-block; background: #005ae2; color: #ffffff; text-decoration: none; font-weight: 700; padding: 14px 20px; border-radius: 999px;">
          Reset Password
        </a>
      </div>
      <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7;">
        If the button doesn&apos;t work, copy and paste this link into your browser:
      </p>
      <p style="margin: 8px 0 0; color: #005ae2; font-size: 13px; line-height: 1.7; word-break: break-all;">
        ${resetUrl}
      </p>
      <p style="margin: 16px 0 0; color: #374151; font-size: 14px; line-height: 1.6;">
        This link expires in 1 hour.
      </p>
    `
  );

  const text = `Reset your PoolFi password using this link: ${resetUrl}. This link expires in 1 hour.`;

  return sendEmail({
    html,
    subject,
    text,
    to,
  });
}
