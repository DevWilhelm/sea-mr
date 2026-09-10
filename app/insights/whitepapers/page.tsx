import type { Metadata } from "next";
import Link from "next/link";
import { whitepapers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Whitepapers",
  description: "Downloadable whitepapers on Southeast Asia market trends.",
};

export default function WhitepapersPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Whitepapers</h1>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {whitepapers.map((w) => (
            <Link key={w.slug} href={`/insights/whitepapers/${w.slug}`} className="card">
              <p className="font-semibold text-primary">{w.title}</p>
              <p className="mt-2 text-sm text-black/60">{w.summary}</p>
              {w.gated && (
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                  Requires email to download
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
