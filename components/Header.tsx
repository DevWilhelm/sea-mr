"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { sectors, services, serviceHref, siteName } from "@/lib/content";
import { markets } from "@/lib/markets";
import NavDropdown from "@/components/NavDropdown";

const navLinkClass = "text-sm font-medium text-white/90 hover:text-white transition";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);

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

          <NavDropdown
            label="Markets"
            href="/markets"
            panelClassName="w-56"
            items={markets.map((m) => ({ key: m.slug, href: `/markets/${m.slug}`, label: m.countryName }))}
          />

          <NavDropdown
            label="Sectors"
            href="/sectors"
            panelClassName="w-64"
            items={sectors.map((s) => ({ key: s.slug, href: `/sectors/${s.slug}`, label: s.name }))}
          />

          <NavDropdown
            label="Our Services"
            href="/services"
            panelClassName="w-72"
            items={services.map((s) => ({ key: s.slug, href: serviceHref(s.slug), label: s.name }))}
          />

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
            <div>
              <button
                type="button"
                className={`${navLinkClass} flex w-full items-center justify-between py-1`}
                aria-expanded={mobileMarketsOpen}
                aria-controls="mobile-markets-menu"
                onClick={() => setMobileMarketsOpen((v) => !v)}
              >
                Markets
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform ${mobileMarketsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileMarketsOpen && (
                <div id="mobile-markets-menu" className="mt-2 flex flex-col gap-3 border-l border-white/10 pl-4">
                  {markets.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/markets/${m.slug}`}
                      className="py-1 text-sm text-white/80 transition hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {m.countryName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/sectors" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Sectors
            </Link>
            <Link href="/services" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Our Services
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
