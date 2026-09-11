import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Market research, strategy, and market entry services for Southeast Asia.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Specialized research and consulting services to help you navigate market
            entry, growth, and expansion across Southeast Asia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            // "Market Intelligence" and "Growth Strategy" link to their own dedicated
            // long-form pages instead of the shared /services/[slug] detail template
            // used by the other services.
            const dedicatedSlugs: Record<string, string> = {
              "market-research": "/services/market-intelligence",
              "strategic-planning": "/services/growth-strategy",
            };
            const href = dedicatedSlugs[service.slug] ?? `/services/${service.slug}`;
            return (
              <Link key={service.slug} href={href} className="card">
                <Icon className="text-accent" size={28} />
                <p className="mt-4 font-semibold text-primary">{service.name}</p>
                <p className="mt-2 text-sm text-black/60">{service.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
