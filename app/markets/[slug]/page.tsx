import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { markets, getMarket, getMarketSectors, getMarketServices } from "@/lib/markets";
import { getIcon } from "@/lib/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarketExploreNav from "@/components/MarketExploreNav";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};
  return { title: market.metaTitle, description: market.metaDescription };
}

export default async function MarketDetailPage({ params }: Props) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();

  const prioritySectors = getMarketSectors(market);
  const relevantServices = getMarketServices(market);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="section">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }, { label: market.countryName }]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">{market.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">{market.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{market.heroDescription}</p>
          <Link href="/contact-us" className="btn-primary mt-8">
            Talk to an Expert <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Market overview */}
      <section className="section max-w-3xl">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{market.overviewHeading}</h2>
        {market.overview.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
      </section>

      {/* Key market characteristics */}
      <section className="bg-primary/5">
        <div className="section">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Key Market Characteristics</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {market.keyMarketCharacteristics.map((item) => (
              <div key={item.title} className="card">
                <p className="font-semibold text-primary">{item.title}</p>
                <p className="mt-2 text-sm text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth drivers */}
      <section className="section">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Growth Drivers & Market Dynamics</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {market.growthDrivers.map((item) => (
            <div key={item.title} className="card">
              <p className="font-semibold text-primary">{item.title}</p>
              <p className="mt-2 text-sm text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Priority industries */}
      {prioritySectors.length > 0 && (
        <section className="bg-primary/5">
          <div className="section">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Key Industries and Areas of Opportunity</h2>
            <p className="mt-4 max-w-3xl text-black/70">
              Sectors particularly relevant to {market.countryName}, drawn from our regional sector coverage.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prioritySectors.map((sector) => {
                const Icon = getIcon(sector.icon);
                return (
                  <Link key={sector.slug} href={`/sectors/${sector.slug}`} className="card">
                    <Icon className="text-accent" size={28} aria-hidden="true" />
                    <p className="mt-4 font-semibold text-primary">{sector.name}</p>
                    <p className="mt-2 text-sm text-black/60">{sector.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Market research considerations */}
      <section className="section max-w-3xl">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{market.considerationsHeading}</h2>
        {market.marketResearchNeeds.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
      </section>

      {/* Relevant services */}
      {relevantServices.length > 0 && (
        <section className="bg-primary/5">
          <div className="section">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Relevant Market Research and Strategy Services</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relevantServices.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <Link key={service.slug} href={service.href} className="card group">
                    <Icon className="text-accent" size={28} aria-hidden="true" />
                    <p className="mt-4 font-semibold text-primary">{service.name}</p>
                    <p className="mt-2 text-sm text-black/60">{service.summary}</p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
                      Learn More <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Country-to-country navigation */}
      <MarketExploreNav currentSlug={market.slug} />

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="section text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{market.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">{market.ctaDescription}</p>
          <Link href="/contact-us" className="btn-primary mt-6">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
