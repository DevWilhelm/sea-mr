import { Resend } from "resend";

export type InquiryData = {
  firstName: string;
  lastName: string;
  companyName: string;
  jobTitle: string;
  country: string;
  phone: string;
  email: string;
  message: string;
};

export type InquiryAttachment = {
  filename: string;
  content: Buffer;
};

let resendClient: Resend | null = null;

// Lazily constructed so module evaluation (e.g. during `next build`'s page-data
// collection) doesn't require RESEND_API_KEY to be set — Resend's constructor
// throws immediately on a missing/empty key.
function getResendClient(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const FIELD_LABELS: Array<[keyof InquiryData, string]> = [
  ["firstName", "First Name"],
  ["lastName", "Last Name"],
  ["companyName", "Company Name"],
  ["jobTitle", "Job Title"],
  ["country", "Country"],
  ["phone", "Phone Number"],
  ["email", "Email Address"],
];

export async function sendInquiryNotification(
  data: InquiryData,
  reference: string,
  attachment?: InquiryAttachment
) {
  const rows = FIELD_LABELS.map(
    ([key, label]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#0B2545;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:4px 0;color:#1a1a1a;">${escapeHtml(
        data[key]
      )}</td></tr>`
  ).join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;">
      <p style="color:#0EA5A4;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:1px;">New Website Inquiry</p>
      <p style="color:#1a1a1a;font-size:13px;">Reference: <strong>${reference}</strong></p>
      <table style="border-collapse:collapse;margin:16px 0;">${rows}</table>
      <p style="color:#0B2545;font-weight:600;margin-bottom:4px;">Message</p>
      <p style="color:#1a1a1a;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const text = [
    `New website inquiry — Reference: ${reference}`,
    "",
    ...FIELD_LABELS.map(([key, label]) => `${label}: ${data[key]}`),
    "",
    "Message:",
    data.message,
  ].join("\n");

  return getResendClient().emails.send({
    to: process.env.CONTACT_NOTIFICATION_TO!,
    from: process.env.CONTACT_NOTIFICATION_FROM!,
    replyTo: data.email,
    subject: `New website inquiry — ${data.companyName} (${data.firstName} ${data.lastName})`,
    html,
    text,
    attachments: attachment
      ? [{ filename: attachment.filename, content: attachment.content }]
      : undefined,
  });
}
