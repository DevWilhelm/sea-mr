import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteName } from "@/lib/content";
import { aboutHeroImage } from "@/lib/images";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteName} — market research and strategy consulting for Southeast Asia.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <Image
          src={aboutHeroImage.src}
          alt={aboutHeroImage.alt}
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top right, rgba(11,37,69,0.95) 0%, rgba(11,37,69,0.88) 30%, rgba(11,37,69,0.6) 65%, rgba(11,37,69,0.4) 100%)",
          }}
        />
        <div className="section relative z-20">
          <FadeIn>
            <h1 className="text-3xl font-bold md:text-4xl">About {siteName}</h1>
            <p className="mt-4 max-w-2xl text-white/80">
              We are a market research and strategy consultancy dedicated to helping
              organizations understand and win in Southeast Asia&apos;s diverse markets.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="card h-full">
            <h2 className="text-2xl font-bold text-primary">Our Approach</h2>
            <p className="mt-4 text-black/70">
              We combine primary and desk research with deep sector expertise to give
              clients a clear, evidence-based view of demand, competition, and
              opportunity market by market, not region-wide generalizations.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="card h-full">
            <h2 className="text-2xl font-bold text-primary">Who We Work With</h2>
            <p className="mt-4 text-black/70">
              We support corporates, investors, and public-sector organizations across
              construction, healthcare, energy, logistics, transport, and consumer
              sectors as they enter, grow, or restructure their presence in the region.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-primary/5">
        <div className="section text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-primary">Ready to talk?</h2>
            <p className="mx-auto mt-3 max-w-xl text-black/70">
              Tell us about the market question you&apos;re trying to answer and we&apos;ll
              help you find the fastest path to a confident decision.
            </p>
            <Link href="/contact-us" className="btn-primary mt-6 !bg-primary">
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
