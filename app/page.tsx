import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  sectors,
  services,
  serviceHref,
  clientIndustries,
  siteTagline,
} from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { serviceImages, sectorImages } from "@/lib/images";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <Image
          src="/images/hero-bangkok-skyline.jpg"
          alt="Aerial night view of Bangkok's skyline and river"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top right, rgba(11,37,69,0.95) 0%, rgba(11,37,69,0.85) 30%, rgba(11,37,69,0.55) 60%, rgba(11,37,69,0.2) 100%)",
          }}
        />
        <div className="relative z-20 mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
              SEA Market Research
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              {siteTagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              SEA Market Research helps companies understand Southeast Asia&apos;s
              fast-changing markets and make confident business decisions. Through clear
              insight, local context, and practical analysis, we support market entry,
              growth strategy, competitive positioning, and investment planning across
              the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact-us" className="btn-primary">
                Talk to Us
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <FadeIn className="md:flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Introduction
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              SEA Market Research combines regional market knowledge with international
              consulting rigor to support organizations operating, expanding, or investing
              across Southeast Asia.
            </h2>
            <p className="mt-6 text-base text-black/70">
              SEA Market Research provides reliable market intelligence and strategic insights
              to help organisations understand, enter, expand, and invest across Southeast
              Asia.
            </p>
            <p className="mt-4 text-base text-black/70">
              Combining strong regional knowledge with international consulting expertise, we
              support businesses, investors, institutions, and public sector organisations in
              evaluating customer demand, competitive dynamics, market trends, partnership
              opportunities, and growth potential.
            </p>
            <p className="mt-4 text-base text-black/70">Our services include:</p>
            <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                "Market entry studies",
                "Feasibility studies",
                "Customer research",
                "Competitor analysis",
                "Market sizing",
                "Sector mapping",
                "Partner identification",
                "Investment assessment",
                "Growth strategy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-black/70">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-black/70">
              Helping clients reduce uncertainty, make informed decisions, and create
              sustainable long-term value across Southeast Asia.
            </p>
          </FadeIn>
          <FadeIn delay={150} className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:flex-1">
            <Image
              src="/images/introduction.jpg"
              alt="Ornate Chinese-Thai shrine at a Bangkok traffic roundabout at dusk"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105 motion-reduce:hover:scale-100"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.15) 45%, rgba(11,37,69,0) 75%)",
              }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Why Southeast Asia */}
      <section className="bg-primary/5">
        <div className="section">
          <FadeIn>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Why Southeast Asia?</h2>
            <p className="mt-4 max-w-3xl text-black/70">
              Southeast Asia is one of the world&apos;s most diverse and fast-evolving
              business regions, offering strong opportunities across consumer markets,
              technology, infrastructure, services, and investment. At the same time,
              success in the region requires more than a regional view. Each market
              operates differently, with its own customer expectations, regulations,
              competitive conditions, pricing dynamics, and routes to market.
            </p>
            <p className="mt-4 max-w-3xl text-black/70">
              This diversity makes reliable local research essential. A clear
              understanding of market conditions, customer demand, and competitive
              dynamics helps organisations identify the right opportunities, reduce
              uncertainty, and plan their next move with greater confidence.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Diverse Growth Markets",
                text: "Southeast Asia brings together large consumer economies, emerging industrial hubs, and rapidly expanding digital markets. Opportunities vary significantly by country, sector, and stage of development, creating multiple paths for growth and investment.",
              },
              {
                title: "Expanding Demand",
                text: "Rising incomes, urbanisation, infrastructure development, and digital adoption are reshaping demand across B2B, B2C, and institutional markets. Businesses are seeing new customer segments, changing purchasing behaviour, and growing demand for more specialised products and services.",
              },
              {
                title: "Regional Complexity",
                text: "Southeast Asia is highly diverse, and no single approach works across every market. Regulations, competitive intensity, pricing, distribution channels, customer expectations, and partnership structures differ from country to country, making local market understanding essential.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="card h-full">
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 text-sm text-black/70">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Core Areas of Market Analysis and Strategy
          </h2>
          <p className="mt-4 max-w-3xl text-black/70">
            Successful market decisions in Southeast Asia depend on understanding several
            connected factors, from demand and competition to market entry conditions,
            partnerships, customer behaviour, and long-term growth potential.
          </p>
          <p className="mt-4 max-w-3xl text-black/70">
            Together, these areas provide a broader view of how markets function, where
            opportunities may exist, and which factors shape commercial performance across
            the region.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            const href = serviceHref(service.slug);
            const image = serviceImages[service.slug];
            return (
              <FadeIn key={service.slug} delay={(i % 4) * 100} className="h-full">
                <Link href={href} className="card-media group flex h-full flex-col">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(11,37,69,0.75) 0%, rgba(11,37,69,0.05) 60%, rgba(11,37,69,0) 100%)",
                      }}
                    />
                    <Icon className="absolute bottom-3 left-4 text-accent-light" size={26} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-semibold text-primary">{service.name}</p>
                    <p className="mt-2 text-sm text-black/60">{service.summary}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                      Learn More{" "}
                      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-primary/5">
        <div className="section">
          <FadeIn>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              We Specialize in the Following Sectors
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => {
              const Icon = getIcon(sector.icon);
              const image = sectorImages[sector.slug];
              return (
                <FadeIn key={sector.slug} delay={(i % 3) * 100} className="h-full">
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="card-media group relative flex h-40 flex-col items-center justify-center overflow-hidden text-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(11,37,69,0.85) 0%, rgba(11,37,69,0.45) 60%, rgba(11,37,69,0.25) 100%)",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center px-4">
                      <Icon className="text-accent-light" size={32} />
                      <p className="mt-3 font-semibold text-white">{sector.name}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-primary/5">
        <div className="section">
          <FadeIn>
            <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
              Trusted Across Industries
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {clientIndustries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary/80 transition hover:border-accent hover:text-accent"
                >
                  {industry}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white">
        <div className="section flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <FadeIn>
            <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
              Let&apos;s discuss how we can support your growth strategy in Southeast Asia
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Link href="/contact-us" className="btn-primary">
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
