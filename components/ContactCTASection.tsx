"use client";

import { usePathname } from "next/navigation";
import ContactForm from "@/components/ContactForm";

// Renders the shared contact form at the bottom of every page, just above
// the footer. Skipped on /contact-us, which already renders <ContactForm />
// as its main content — showing it again there would duplicate the form.
export default function ContactCTASection() {
  const pathname = usePathname();
  if (pathname?.replace(/\/$/, "") === "/contact-us") return null;

  return (
    <section className="bg-primary/5">
      <div className="section max-w-2xl">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Get in Touch</h2>
        <p className="mt-3 text-black/70">
          Tell us about your project and our team will get back to you shortly.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
