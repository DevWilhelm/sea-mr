import Link from "next/link";
import { sectors, services, siteName, contactEmail } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <p className="text-lg font-bold text-white">{siteName}</p>
          <p className="mt-3 text-sm">
            Market intelligence and strategy for organizations growing across Southeast Asia.
          </p>
          <p className="mt-4 text-sm">{contactEmail}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Who We Are</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-white">About</Link></li>
            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link href="/insights" className="hover:text-white">Insights</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Sectors</p>
          <ul className="space-y-2 text-sm">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link href={`/sectors/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Services</p>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => {
              // "Market Intelligence" links to its own dedicated long-form page
              // instead of the shared /services/[slug] detail template.
              const href =
                s.slug === "market-research"
                  ? "/services/market-intelligence"
                  : `/services/${s.slug}`;
              return (
                <li key={s.slug}>
                  <Link href={href} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/60 md:px-10">
        © {new Date().getFullYear()} {siteName}. All rights reserved.
      </div>
    </footer>
  );
}
