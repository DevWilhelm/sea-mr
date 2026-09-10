import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles on Southeast Asia market research and strategy.",
};

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Articles</h1>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} href={`/insights/articles/${a.slug}`} className="card">
              <p className="text-xs text-black/50">
                {new Date(a.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-2 font-semibold text-primary">{a.title}</p>
              <p className="mt-2 text-sm text-black/60">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
