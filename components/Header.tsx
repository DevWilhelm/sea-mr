"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { sectors, services, siteName } from "@/lib/content";

const navLinkClass =
  "text-sm font-medium text-white/90 hover:text-white transition";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          {siteName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/about-us" className={navLinkClass}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("sectors")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/sectors" className={`${navLinkClass} flex items-center gap-1`}>
              Sectors <ChevronDown size={14} />
            </Link>
            {openDropdown === "sectors" && (
              <div className="absolute left-0 top-full w-64 rounded-xl bg-white p-2 shadow-lg">
                {sectors.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/sectors/${s.slug}`}
                    className="block rounded-lg px-4 py-2 text-sm text-primary hover:bg-primary/5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/services" className={`${navLinkClass} flex items-center gap-1`}>
              Our Services <ChevronDown size={14} />
            </Link>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full w-72 rounded-xl bg-white p-2 shadow-lg">
                {services.map((s) => {
                  // "Market Intelligence" links to its own dedicated long-form page
                  // instead of the shared /services/[slug] detail template.
                  const href =
                    s.slug === "market-research"
                      ? "/services/market-intelligence"
                      : `/services/${s.slug}`;
                  return (
                    <Link
                      key={s.slug}
                      href={href}
                      className="block rounded-lg px-4 py-2 text-sm text-primary hover:bg-primary/5"
                    >
                      {s.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/case-studies" className={navLinkClass}>
            Case Studies
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("insights")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/insights" className={`${navLinkClass} flex items-center gap-1`}>
              Insights <ChevronDown size={14} />
            </Link>
            {openDropdown === "insights" && (
              <div className="absolute left-0 top-full w-48 rounded-xl bg-white p-2 shadow-lg">
                <Link
                  href="/insights/articles"
                  className="block rounded-lg px-4 py-2 text-sm text-primary hover:bg-primary/5"
                >
                  Articles
                </Link>
                <Link
                  href="/insights/whitepapers"
                  className="block rounded-lg px-4 py-2 text-sm text-primary hover:bg-primary/5"
                >
                  Whitepapers
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" className="btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/sectors" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Sectors
            </Link>
            <Link href="/services" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Our Services
            </Link>
            <Link href="/case-studies" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Case Studies
            </Link>
            <Link href="/insights" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Insights
            </Link>
            <Link
              href="/contact-us"
              className="btn-primary w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
