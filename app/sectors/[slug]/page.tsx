import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { sectors, caseStudies } from "@/lib/content";
import { getIcon } from "@/lib/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return { title: sector.name, description: sector.summary };
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const Icon = getIcon(sector.icon);
  const related = caseStudies.filter((cs) => cs.sector === sector.name);

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <Icon size={36} className="text-accent-light" />
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{sector.name}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{sector.summary}</p>
        </div>
      </section>

      <section className="section max-w-3xl">
        {sector.body.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
        <Link href="/contact-us" className="btn-primary mt-8 !bg-primary">
          Talk to an Expert <ArrowRight size={16} className="ml-2" />
        </Link>
      </section>

      {related.length > 0 && (
        <section className="bg-primary/5">
          <div className="section">
            <h2 className="text-2xl font-bold text-primary">Related Case Studies</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card">
                  <p className="font-semibold text-primary">{cs.title}</p>
                  <p className="mt-2 text-sm text-black/60">{cs.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
