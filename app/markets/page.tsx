import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { markets } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Country-specific market research and business insights across Southeast Asia: Singapore, Malaysia, Thailand, Vietnam, the Philippines, Indonesia, and Myanmar.",
};

export default function MarketsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Markets</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Country-level research and analysis across Southeast Asia&apos;s major markets.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <Link key={market.slug} href={`/markets/${market.slug}`} className="card">
              <MapPin className="text-accent" size={28} aria-hidden="true" />
              <p className="mt-4 font-semibold text-primary">{market.countryName}</p>
              <p className="mt-2 text-sm text-black/60">{market.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
