import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Sectors",
  description: "Sectors we cover across Southeast Asia: construction, healthcare, energy, logistics, and transport & mobility.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Sectors</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We specialize in the sectors driving Southeast Asia&apos;s growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = getIcon(sector.icon);
            return (
              <Link key={sector.slug} href={`/sectors/${sector.slug}`} className="card">
                <Icon className="text-accent" size={28} />
                <p className="mt-4 font-semibold text-primary">{sector.name}</p>
                <p className="mt-2 text-sm text-black/60">{sector.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
