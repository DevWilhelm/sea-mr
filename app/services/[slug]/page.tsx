import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { getIcon } from "@/lib/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <Icon size={36} className="text-accent-light" />
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{service.summary}</p>
        </div>
      </section>

      <section className="section max-w-3xl">
        {service.body.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}
        <Link href="/contact-us" className="btn-primary mt-8 !bg-primary">
          Talk to an Expert <ArrowRight size={16} className="ml-2" />
        </Link>
      </section>
    </>
  );
}
