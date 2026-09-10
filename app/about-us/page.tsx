import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteName} — market research and strategy consulting for Southeast Asia.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">About {siteName}</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We are a market research and strategy consultancy dedicated to helping
            organizations understand and win in Southeast Asia&apos;s diverse markets.
          </p>
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">Our Approach</h2>
          <p className="mt-4 text-black/70">
            We combine primary and desk research with deep sector expertise to give
            clients a clear, evidence-based view of demand, competition, and
            opportunity — market by market, not region-wide generalizations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">Who We Work With</h2>
          <p className="mt-4 text-black/70">
            We support corporates, investors, and public-sector organizations across
            construction, healthcare, energy, logistics, transport, and consumer
            sectors as they enter, grow, or restructure their presence in the region.
          </p>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="section text-center">
          <h2 className="text-2xl font-bold text-primary">Ready to talk?</h2>
          <p className="mx-auto mt-3 max-w-xl text-black/70">
            Tell us about the market question you&apos;re trying to answer and we&apos;ll
            help you find the fastest path to a confident decision.
          </p>
          <Link href="/contact-us" className="btn-primary mt-6 !bg-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
