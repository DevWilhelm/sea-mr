import type { Metadata } from "next";
import Link from "next/link";
import { articles, whitepapers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles and whitepapers on Southeast Asia market trends and strategy.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Insights</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Our latest thinking on Southeast Asia&apos;s market trends and strategy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Articles</h2>
          <Link href="/insights/articles" className="text-sm font-semibold text-accent">
            See All Articles
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <Link key={a.slug} href={`/insights/articles/${a.slug}`} className="card">
              <p className="font-semibold text-primary">{a.title}</p>
              <p className="mt-2 text-sm text-black/60">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="section">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">Whitepapers</h2>
            <Link href="/insights/whitepapers" className="text-sm font-semibold text-accent">
              See All Whitepapers
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {whitepapers.map((w) => (
              <Link key={w.slug} href={`/insights/whitepapers/${w.slug}`} className="card">
                <p className="font-semibold text-primary">{w.title}</p>
                <p className="mt-2 text-sm text-black/60">{w.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
