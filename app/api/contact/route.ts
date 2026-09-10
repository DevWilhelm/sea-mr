import { NextRequest, NextResponse } from "next/server";

// Stub contact endpoint. Before launch:
//   1. Verify the reCAPTCHA token sent from the client.
//   2. Send the submission via an email provider (e.g. Resend, SendGrid) to your inbox.
//   3. Optionally store the RFP file upload in S3/Cloudflare R2 and store the lead in your CMS.
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const submission = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    companyName: formData.get("companyName"),
    jobTitle: formData.get("jobTitle"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    hasAttachment: formData.get("rfpFile") instanceof File,
  };

  // Placeholder: log to server console until an email provider is wired in.
  console.log("New contact form submission:", submission);

  return NextResponse.json({ ok: true });
}
