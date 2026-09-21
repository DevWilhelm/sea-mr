import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";
import { ServiceHero } from "@/components/ServiceHero";
import { FadeIn } from "@/components/FadeIn";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Market Intelligence",
  description:
    "How market intelligence helps organizations track shifts, competitors, opportunities, and regulation across Southeast Asia.",
};

const intro = [
  "Southeast Asia is one of the world's most diverse and rapidly evolving business regions. Across ASEAN markets, shifts in consumer demand, digital adoption, regulation, investment activity, and competitive behavior can quickly reshape opportunities and risks. In this environment, relying on static information or broad market assumptions is rarely enough.",
  "Market intelligence provides a clearer view of what is happening across industries, competitors, customers, and regulatory environments. By combining reliable data with contextual analysis, organizations can better understand market movements, identify meaningful changes, and support stronger strategic decisions.",
  "Effective market intelligence goes beyond collecting information. It focuses on turning fragmented market signals into practical knowledge that can guide expansion, positioning, investment, and long-term planning across Southeast Asia.",
];

const sections: ArticleSection[] = [
  {
    heading: "Why Market Intelligence Matters in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "The complexity of Southeast Asian markets makes continuous market awareness especially important.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Tracking Market Shifts and Emerging Trends:",
            text: "Consumer preferences, technology adoption, investment flows, and sector development can change rapidly across the region. Market intelligence helps identify these movements early and provides a clearer picture of where demand, competition, and opportunity may be heading.",
          },
          {
            lead: "Understanding Competitive Activity:",
            text: "Businesses operating across Southeast Asia often face a mix of local, regional, and international competitors. Monitoring competitor strategies, product launches, pricing, partnerships, expansion plans, and market positioning can reveal important changes in the competitive landscape.",
          },
          {
            lead: "Identifying New Business Opportunities:",
            text: "Market intelligence can highlight underserved segments, growing industries, changing customer expectations, and new geographic opportunities. These insights can support decisions related to market entry, product development, diversification, and regional expansion.",
          },
          {
            lead: "Monitoring Regulatory and Economic Developments:",
            text: "Regulations, government policies, trade conditions, and economic changes vary significantly between ASEAN countries. Keeping track of these developments helps organizations understand how external changes may affect operations, investment decisions, and future growth.",
          },
          {
            lead: "Supporting Faster and Better Decisions:",
            text: "In fast-moving markets, decision-makers need timely and relevant information. Well-structured intelligence reduces uncertainty and helps organizations respond more confidently to changes in demand, competition, and business conditions.",
          },
        ],
      },
    ],
  },
  {
    heading: "How Market Intelligence Is Developed",
    blocks: [
      {
        type: "paragraph",
        text: "A strong market intelligence process combines multiple sources of information and converts them into a structured view of the market.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Defining Key Intelligence Priorities:",
            text: "The process begins by identifying the most important questions, such as changes in competitor activity, market attractiveness, customer demand, regulatory developments, or industry growth.",
          },
          {
            lead: "Collecting Market Information:",
            text: "Relevant information may come from industry reports, company announcements, government data, financial information, trade sources, digital channels, interviews, and other trusted market sources.",
          },
          {
            lead: "Monitoring Competitors and Industry Players:",
            text: "Competitor activity is reviewed to understand strategic direction, product positioning, pricing behavior, partnerships, investments, and expansion plans.",
          },
          {
            lead: "Analyzing Market Signals:",
            text: "Collected information is assessed to identify patterns, emerging trends, potential risks, and areas of opportunity. This analysis helps separate meaningful developments from short-term market noise.",
          },
          {
            lead: "Turning Intelligence into Strategic Insight:",
            text: "The final step is translating market findings into clear business implications. This allows decision-makers to understand not only what is changing, but also why it matters and how it may affect future strategies.",
          },
        ],
      },
    ],
  },
  {
    heading: "Key Areas of Market Intelligence",
    blocks: [
      {
        type: "paragraph",
        text: "Market intelligence across Southeast Asia can cover a wide range of strategic areas depending on the industry and business objective.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Competitor Intelligence:",
            text: "Analysis of competitor positioning, market activity, pricing, products, partnerships, and strategic movements.",
          },
          {
            lead: "Industry Intelligence:",
            text: "Monitoring sector growth, investment trends, technology changes, value-chain developments, and structural shifts.",
          },
          {
            lead: "Customer and Demand Intelligence:",
            text: "Understanding changing customer needs, purchasing behavior, preferences, and emerging demand patterns.",
          },
          {
            lead: "Regulatory Intelligence:",
            text: "Tracking policy changes, compliance requirements, trade regulations, and other developments that may affect business operations.",
          },
          {
            lead: "Market Opportunity Intelligence:",
            text: "Identifying attractive segments, geographic markets, new customer groups, and potential areas for expansion.",
          },
          {
            lead: "Strategic Risk Intelligence:",
            text: "Detecting early signals related to competition, regulation, market disruption, supply conditions, or broader economic changes.",
          },
        ],
      },
    ],
  },
  {
    heading: "The Value of Continuous Market Intelligence",
    blocks: [
      {
        type: "paragraph",
        text: "Market intelligence is most effective when it is treated as an ongoing process rather than a one-time activity. Southeast Asian markets continue to evolve as digital transformation, demographic change, infrastructure development, investment, and regulation reshape the business environment.",
      },
      {
        type: "paragraph",
        text: "Continuous monitoring helps organizations maintain an updated understanding of market conditions and respond more effectively to new developments. It can also support earlier identification of opportunities and risks before they become widely visible.",
      },
      {
        type: "paragraph",
        text: "For businesses operating across multiple Southeast Asian markets, market intelligence creates a more connected view of regional developments while still recognizing the differences between individual countries.",
      },
    ],
  },
  {
    heading: "Market Intelligence for Stronger Strategic Planning",
    blocks: [
      {
        type: "paragraph",
        text: "Reliable market intelligence provides a stronger foundation for business planning in Southeast Asia. By combining market data, competitor information, regulatory developments, and industry trends, organizations can build a clearer picture of the forces shaping their markets.",
      },
      {
        type: "paragraph",
        text: "This deeper understanding supports more informed choices related to market entry, investment, expansion, positioning, and long-term strategy. In a region defined by rapid change and strong competition, timely and relevant intelligence can become an important advantage for sustainable growth.",
      },
    ],
  },
];

export default function MarketIntelligencePage() {
  const service = services.find((s) => s.slug === "market-research")!;

  return (
    <>
      <ServiceHero
        icon={Search}
        title={service.name}
        summary={service.summary}
        image={serviceImages["market-research"].src}
        imageAlt={serviceImages["market-research"].alt}
      />

      <FadeIn>
      <section className="section max-w-3xl">
        {intro.map((p, i) => (
          <p key={i} className="mt-4 text-black/70">
            {p}
          </p>
        ))}

        <ServiceArticle sections={sections} />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact-us" className="btn-primary !bg-primary">
            Talk to an Expert <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            href="/services"
            className="btn-secondary mt-0 !text-primary !border-primary/30"
          >
            Back to Services
          </Link>
        </div>
      </section>
      </FadeIn>
    </>
  );
}
