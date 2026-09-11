import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  sectors,
  services,
  serviceHref,
  caseStudies,
  articles,
  clientIndustries,
  siteTagline,
} from "@/lib/content";
import { getIcon } from "@/lib/icons";

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
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Sea Market Research
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
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="md:flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Introduction
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Sea Market Research combines regional market knowledge with international
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
            <p className="mt-4 text-base text-black/70">
              Our services include market entry studies, feasibility studies, customer
              research, competitor analysis, market sizing, sector mapping, partner
              identification, investment assessment, and growth strategy helping clients
              reduce uncertainty, make informed decisions, and create sustainable long-term
              value across Southeast Asia.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:flex-1">
            <Image
              src="/images/introduction.jpg"
              alt="Ornate Chinese-Thai shrine at a Bangkok traffic roundabout at dusk"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,37,69,0.55) 0%, rgba(11,37,69,0.15) 45%, rgba(11,37,69,0) 75%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Southeast Asia */}
      <section className="bg-primary/5">
        <div className="section">
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
            ].map((item) => (
              <div key={item.title} className="card">
                <p className="font-semibold text-primary">{item.title}</p>
                <p className="mt-2 text-sm text-black/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            const href = serviceHref(service.slug);
            return (
              <Link key={service.slug} href={href} className="card group">
                <Icon className="text-accent" size={28} />
                <p className="mt-4 font-semibold text-primary">{service.name}</p>
                <p className="mt-2 text-sm text-black/60">{service.summary}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn More{" "}
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-primary/5">
        <div className="section">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            We Specialize in the Following Sectors
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector) => {
              const Icon = getIcon(sector.icon);
              return (
                <Link
                  key={sector.slug}
                  href={`/sectors/${sector.slug}`}
                  className="card flex flex-col items-center text-center"
                >
                  <Icon className="text-accent" size={32} />
                  <p className="mt-3 font-semibold text-primary">{sector.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Whitepaper CTA */}
      <section className="section">
        <div className="rounded-3xl bg-primary px-8 py-12 text-white md:px-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Stay Ahead of the Curve
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-bold md:text-3xl">
            Explore Southeast Asia&apos;s Rapidly Evolving Consumer Market
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            Get our latest whitepaper on shifting consumer priorities and growth
            strategies across the region.
          </p>
          <Link href="/insights/whitepapers/southeast-asia-consumer-outlook" className="btn-primary mt-6">
            Download Now
          </Link>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Case Studies
        </p>
        <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
          We have completed hundreds of projects for our clients
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {cs.sector}
              </p>
              <p className="mt-2 font-semibold text-primary">{cs.title}</p>
              <p className="mt-2 text-sm text-black/60">{cs.summary}</p>
            </Link>
          ))}
        </div>
        <Link href="/case-studies" className="btn-secondary mt-8 !text-primary !border-primary/30 w-fit">
          See All Case Studies
        </Link>
      </section>

      {/* Clients */}
      <section className="bg-primary/5">
        <div className="section">
          <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
            Trusted Across Industries
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {clientIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary/80"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Insights
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Our insights into the Southeast Asia market
            </h2>
          </div>
          <Link href="/insights" className="hidden text-sm font-semibold text-accent md:block">
            See All Insights
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/articles/${article.slug}`}
              className="card"
            >
              <p className="font-semibold text-primary">{article.title}</p>
              <p className="mt-2 text-sm text-black/60">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white">
        <div className="section flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
            Let&apos;s discuss how we can support your growth strategy in Southeast Asia
          </h2>
          <Link href="/contact-us" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
