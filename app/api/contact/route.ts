import { NextResponse } from "next/server";
import { z } from "zod";
import { sendInquiryNotification, type InquiryData } from "@/lib/email";
import { generateInquiryReference } from "@/lib/reference";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_ATTACHMENT_EXTENSIONS = [
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".pdf",
  ".ppt",
  ".pptx",
];

const inquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  country: z.string().trim().min(1, "Country is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().email("A valid email address is required"),
  message: z.string().trim().min(1, "Message is required"),
});

function hasAllowedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return ALLOWED_ATTACHMENT_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. If it's filled,
  // pretend success so bots don't learn to adjust their behavior.
  const honeypot = formData.get("companyWebsite");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true, reference: generateInquiryReference() });
  }

  const field = (name: string) => {
    const value = formData.get(name);
    return typeof value === "string" ? value : "";
  };

  const parsed = inquirySchema.safeParse({
    firstName: field("firstName"),
    lastName: field("lastName"),
    companyName: field("companyName"),
    jobTitle: field("jobTitle"),
    country: field("country"),
    phone: field("phone"),
    email: field("email"),
    message: field("message"),
  });

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ ok: false, error: firstError }, { status: 400 });
  }

  const data: InquiryData = parsed.data;

  const rawFile = formData.get("rfpFile");
  let attachment: { filename: string; content: Buffer } | undefined;

  if (rawFile instanceof File && rawFile.size > 0) {
    if (rawFile.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Attachment is too large (8MB limit). Please remove it and try again." },
        { status: 400 }
      );
    }
    if (!hasAllowedExtension(rawFile.name)) {
      return NextResponse.json(
        { ok: false, error: "Attachment type not supported. Allowed: doc, docx, xls, xlsx, pdf, ppt, pptx." },
        { status: 400 }
      );
    }
    const arrayBuffer = await rawFile.arrayBuffer();
    attachment = { filename: rawFile.name, content: Buffer.from(arrayBuffer) };
  }

  const reference = generateInquiryReference();

  try {
    await sendInquiryNotification(data, reference, attachment);
  } catch (error) {
    console.error("Failed to send inquiry notification email:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your inquiry. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, reference });
}
