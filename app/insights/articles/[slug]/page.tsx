import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section max-w-3xl">
          <p className="text-sm text-white/60">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {article.author}
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{article.title}</h1>
        </div>
      </section>

      <section className="section max-w-3xl">
        {article.body.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
        <Link href="/insights/articles" className="btn-secondary mt-8 !text-primary !border-primary/30 w-fit">
          Back to Articles
        </Link>
      </section>
    </>
  );
}
