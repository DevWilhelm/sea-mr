import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Case studies from our work across Southeast Asia's key sectors.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <h1 className="text-3xl font-bold md:text-4xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We have completed hundreds of projects for our clients across Southeast Asia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {cs.sector}
              </p>
              <p className="mt-2 font-semibold text-primary">{cs.title}</p>
              <p className="mt-2 text-sm text-black/60">{cs.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
