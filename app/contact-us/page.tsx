import type { Metadata } from "next";
import { contactEmail, siteName } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteName} to discuss your growth strategy in Southeast Asia.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">
            Let&apos;s discuss how we can support your growth strategy in Southeast Asia
          </h1>
          <p className="mt-4 text-white/80">{contactEmail}</p>
        </div>
      </section>

      <section className="section max-w-2xl">
        <ContactForm />
      </section>
    </>
  );
}
