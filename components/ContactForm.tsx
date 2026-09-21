"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-black/10 px-4 py-2 text-sm outline-none focus:border-accent";
const labelClass = "text-sm font-semibold text-primary";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // This site is deployed as a static export (no server), so there is no
  // /api/contact to post to yet. TODO: once real submission handling is
  // wired up (e.g. a form backend like Formspree, or a Render web service),
  // replace this stub with an actual network call.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="card">
        <p className="font-semibold text-primary">Thanks for reaching out.</p>
        <p className="mt-2 text-sm text-black/60">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="firstName">First Name*</label>
        <input id="firstName" name="firstName" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="lastName">Last Name*</label>
        <input id="lastName" name="lastName" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="companyName">Company Name*</label>
        <input id="companyName" name="companyName" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="jobTitle">Job Title*</label>
        <input id="jobTitle" name="jobTitle" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="country">Country*</label>
        <input id="country" name="country" required className={inputClass} placeholder="e.g. Thailand" />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone Number*</label>
        <input id="phone" name="phone" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="email">Email Address*</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">Message*</label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="rfpFile">
          RFP Files (.doc, .xls, .pdf, .ppt)
        </label>
        <input
          id="rfpFile"
          name="rfpFile"
          type="file"
          accept=".doc,.docx,.xls,.xlsx,.pdf,.ppt,.pptx"
          className="mt-1 block w-full text-sm"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary !bg-primary">
          {status === "sending" ? "Sending Inquiry..." : "Send Inquiry"}
        </button>
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">
            Something went wrong — please try again or email us directly.
          </p>
        )}
        <p className="mt-3 text-xs text-black/50">
          This site should be protected by reCAPTCHA before launch; Google&apos;s{" "}
          <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
        </p>
      </div>
    </form>
  );
}
