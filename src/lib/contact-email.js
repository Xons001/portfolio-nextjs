const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export function buildContactEmail({ name, email, company, subject, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "Not provided";
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return {
    subjectLine: `[Portfolio] ${subject}`,
    text: [
      "New contact form submission",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 32px;">
        <div style="max-width: 640px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 20px; overflow: hidden;">
          <div style="padding: 28px 32px; border-bottom: 1px solid rgba(148, 163, 184, 0.18);">
            <p style="margin: 0; color: #67e8f9; letter-spacing: 0.18em; font-size: 12px; text-transform: uppercase;">Portfolio contact</p>
            <h1 style="margin: 12px 0 0; font-size: 26px;">New message from ${safeName}</h1>
          </div>
          <div style="padding: 28px 32px;">
            <p style="margin: 0 0 12px;"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin: 0 0 12px;"><strong>Company:</strong> ${safeCompany}</p>
            <p style="margin: 0 0 24px;"><strong>Subject:</strong> ${safeSubject}</p>
            <div style="padding: 20px; border-radius: 16px; background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(148, 163, 184, 0.14); line-height: 1.7;">
              ${safeMessage}
            </div>
          </div>
        </div>
      </div>
    `,
  };
}
