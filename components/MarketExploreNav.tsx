import Link from "next/link";
import { markets } from "@/lib/markets";

// "Explore Southeast Asian Markets" cross-links, shown near the bottom of
// every country page. Reuses the pill style already established by the
// homepage's "Trusted Across Industries" section, with hover/focus states
// added since these are real links rather than static tags.
export default function MarketExploreNav({ currentSlug }: { currentSlug: string }) {
  const otherMarkets = markets.filter((m) => m.slug !== currentSlug);

  if (otherMarkets.length === 0) return null;

  return (
    <section className="bg-primary/5">
      <div className="section">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Explore Southeast Asian Markets</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {otherMarkets.map((m) => (
            <Link
              key={m.slug}
              href={`/markets/${m.slug}`}
              className="rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary/80 transition hover:border-accent hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              {m.countryName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
