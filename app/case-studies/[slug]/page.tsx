import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            {cs.sector}
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{cs.title}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{cs.summary}</p>
        </div>
      </section>

      <section className="section max-w-3xl">
        {cs.body.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
        <Link href="/case-studies" className="btn-secondary mt-8 !text-primary !border-primary/30 w-fit">
          Back to Case Studies
        </Link>
      </section>
    </>
  );
}
