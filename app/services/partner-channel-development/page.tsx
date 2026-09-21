import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";
import { ServiceHero } from "@/components/ServiceHero";
import { FadeIn } from "@/components/FadeIn";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Partner & Channel Development",
  description:
    "How choosing the right route to market and building strong partner networks supports commercial execution across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Partner & Channel Development in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Building a strong market presence in Southeast Asia often depends on having the right commercial network behind the business. Even when demand is attractive, market expansion can be difficult without reliable distributors, local partners, sales channels, or strategic relationships that provide access to customers and support day-to-day execution.",
      },
      {
        type: "paragraph",
        text: "Partner & Channel Development focuses on designing the most effective route to market for each country and customer segment. The objective is not simply to find distributors or partners, but to understand which commercial structure best supports market coverage, sales growth, operational control, and long-term expansion.",
      },
    ],
  },
  {
    heading: "Choosing the Right Route to Market",
    blocks: [
      {
        type: "paragraph",
        text: "Southeast Asian markets differ significantly in the way products and services reach customers. Some industries rely heavily on established distributors and dealer networks, while others are increasingly driven by direct sales, digital platforms, e-commerce, or a combination of several channels.",
      },
      {
        type: "paragraph",
        text: "Selecting the right channel model therefore requires an understanding of customer purchasing behavior, industry structure, geographic coverage, logistics requirements, and the level of control a company wants to maintain.",
      },
      {
        type: "paragraph",
        text: "A direct model may provide stronger control over pricing and customer relationships, while a distributor-led approach can offer faster access to local networks and reduce the resources required to establish operations. In many cases, a hybrid model provides the flexibility needed to serve different customer groups effectively.",
      },
    ],
  },
  {
    heading: "Finding Partners That Support Long-Term Growth",
    blocks: [
      {
        type: "paragraph",
        text: "The quality of a partnership can have a significant impact on market performance. A potential partner should be evaluated not only on its current sales network but also on its reputation, customer relationships, financial stability, technical capabilities, industry experience, and ability to grow alongside the business.",
      },
      {
        type: "paragraph",
        text: "Strong partners can contribute much more than distribution. They may provide local market knowledge, regulatory familiarity, customer access, after-sales capabilities, and insights into changing competitive conditions.",
      },
      {
        type: "paragraph",
        text: "For this reason, partner selection should consider both immediate commercial opportunities and long-term strategic alignment.",
      },
    ],
  },
  {
    heading: "Developing an Effective Partner Network",
    blocks: [
      {
        type: "paragraph",
        text: "Once suitable partners are identified, the next challenge is building a commercial structure that enables both sides to perform effectively.",
      },
      {
        type: "paragraph",
        text: "Clear responsibilities, geographic coverage, customer ownership, pricing arrangements, sales targets, and performance expectations help create alignment from the beginning. Communication and information sharing are equally important, particularly when partners are expected to represent the business in different markets.",
      },
      {
        type: "paragraph",
        text: "Regular performance reviews can reveal where additional support is required and whether the existing partner network is delivering the expected level of market coverage and commercial results.",
      },
    ],
  },
  {
    heading: "Strengthening Existing Sales Channels",
    blocks: [
      {
        type: "paragraph",
        text: "Channel development is not limited to entering new markets. Existing distribution networks may also contain gaps, overlaps, or underperforming areas.",
      },
      {
        type: "paragraph",
        text: "Reviewing sales contribution, geographic coverage, customer reach, margin performance, service quality, and channel productivity can identify where the current structure could be improved.",
      },
      {
        type: "paragraph",
        text: "In some cases, this may mean adding new distributors or introducing digital channels. In others, it could involve consolidating overlapping partners, changing territory responsibilities, or strengthening direct relationships with key customer groups.",
      },
      {
        type: "paragraph",
        text: "The goal is to develop a channel structure that supports growth without creating unnecessary complexity.",
      },
    ],
  },
  {
    heading: "Adapting Channel Strategies Across Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "A single distribution model rarely works equally well across the entire ASEAN region. Market maturity, infrastructure, consumer behavior, regulations, and industry practices vary considerably from one country to another.",
      },
      {
        type: "paragraph",
        text: "For example, an approach built around local distributors may be effective in one market, while direct sales or digital channels may provide better results elsewhere. Regional expansion therefore requires a balance between a consistent commercial strategy and country-specific execution.",
      },
      {
        type: "paragraph",
        text: "Understanding these differences allows businesses to adapt their partner profiles, distribution structures, pricing approaches, and sales processes according to local market conditions.",
      },
    ],
  },
  {
    heading: "Building Stronger Market Connections",
    blocks: [
      {
        type: "paragraph",
        text: "Partner & Channel Development ultimately connects market opportunity with commercial execution. A strong product and attractive market are valuable, but growth depends on how effectively the business can reach customers and maintain reliable relationships across the market.",
      },
      {
        type: "paragraph",
        text: "By developing the right mix of partners, distributors, direct channels, and digital routes to market, businesses can strengthen customer access, improve commercial efficiency, and create a more scalable foundation for growth across Southeast Asia.",
      },
    ],
  },
];

export default function PartnerChannelDevelopmentPage() {
  const service = services.find((s) => s.slug === "distribution-strategic-partnership")!;

  return (
    <>
      <ServiceHero
        icon={Network}
        title={service.name}
        summary={service.summary}
        image={serviceImages["distribution-strategic-partnership"].src}
        imageAlt={serviceImages["distribution-strategic-partnership"].alt}
      />

      <FadeIn>
        <section className="section max-w-3xl">
          <ServiceArticle sections={sections} />

          <Link href="/contact-us" className="btn-primary mt-10 !bg-primary">
            Talk to an Expert <ArrowRight size={16} className="ml-2" />
          </Link>
        </section>
      </FadeIn>
    </>
  );
}
