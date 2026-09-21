import Image from "next/image";
import type { LucideIcon } from "lucide-react";

// Same visual language as the homepage hero (full-bleed photo + navy gradient
// overlay) so the 8 dedicated service pages get a photo background instead of
// a flat color, without changing any of their heading/summary content.
export function ServiceHero({
  icon: Icon,
  title,
  summary,
  image,
  imageAlt,
}: {
  icon: LucideIcon;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top right, rgba(11,37,69,0.95) 0%, rgba(11,37,69,0.88) 30%, rgba(11,37,69,0.6) 65%, rgba(11,37,69,0.4) 100%)",
        }}
      />
      <div className="section relative z-20">
        <Icon size={36} className="text-accent-light" />
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-white/80">{summary}</p>
      </div>
    </section>
  );
}
