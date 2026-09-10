import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { whitepapers } from "@/lib/content";
import WhitepaperDownloadForm from "@/components/WhitepaperDownloadForm";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return whitepapers.map((w) => ({ slug: w.slug }));
}

function getWhitepaper(slug: string) {
  return whitepapers.find((w) => w.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const wp = getWhitepaper(params.slug);
  if (!wp) return {};
  return { title: wp.title, description: wp.summary };
}

export default function WhitepaperDetailPage({ params }: Props) {
  const wp = getWhitepaper(params.slug);
  if (!wp) notFound();

  return (
    <section className="bg-primary text-white">
      <div className="section max-w-2xl">
        <h1 className="text-3xl font-bold md:text-4xl">{wp.title}</h1>
        <p className="mt-4 text-white/80">{wp.summary}</p>
        {wp.gated ? (
          <WhitepaperDownloadForm title={wp.title} />
        ) : (
          <p className="mt-6 text-white/80">Download link coming soon.</p>
        )}
      </div>
    </section>
  );
}
