import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";
import { ServiceHero } from "@/components/ServiceHero";
import { FadeIn } from "@/components/FadeIn";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Customer & Demand Insights",
  description:
    "How customer segmentation and demand analysis help businesses understand what drives purchasing decisions across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Customer & Demand Insights in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Customer demand across Southeast Asia is shaped by a mix of income levels, cultural preferences, digital adoption, urbanization, demographic change, and local purchasing habits. Because these factors vary widely from one market to another, broad regional assumptions can easily miss what customers actually value and how demand is evolving.",
      },
      {
        type: "paragraph",
        text: "Customer & Demand Insights focuses on building a clearer picture of who the customers are, what influences their decisions, how their needs are changing, and where future demand is likely to develop. This helps businesses make stronger choices around product positioning, market entry, pricing, communication, and growth priorities.",
      },
    ],
  },
  {
    heading: "Understanding What Drives Demand",
    blocks: [
      {
        type: "paragraph",
        text: "Demand is rarely influenced by a single factor. Purchasing decisions may be shaped by price, convenience, product quality, brand trust, digital experience, availability, peer influence, or changing lifestyle expectations.",
      },
      {
        type: "paragraph",
        text: "In Southeast Asia, these drivers can differ significantly across countries and customer groups. Urban consumers may respond differently from customers in secondary cities, while younger digital-first segments may have completely different expectations from older or more traditional buyers.",
      },
      {
        type: "paragraph",
        text: "Understanding these differences helps businesses avoid treating the market as one uniform audience.",
      },
    ],
  },
  {
    heading: "Building a Clearer View of the Customer",
    blocks: [
      {
        type: "paragraph",
        text: "Customer insight begins with identifying meaningful segments rather than relying only on basic demographic categories.",
      },
      {
        type: "paragraph",
        text: "Segmentation can consider age, income, location, lifestyle, buying behavior, digital engagement, purchase frequency, brand preferences, and product usage. In business-to-business markets, it may also include company size, industry, purchasing criteria, decision-making structure, and procurement behavior.",
      },
      {
        type: "paragraph",
        text: "The objective is to understand which groups have the strongest demand potential and how their expectations differ.",
      },
    ],
  },
  {
    heading: "Tracking Changes in Customer Preferences",
    blocks: [
      {
        type: "paragraph",
        text: "Customer expectations can change quickly, especially in fast-growing and digitally connected markets.",
      },
      {
        type: "paragraph",
        text: "New technologies, social media, economic conditions, sustainability concerns, and changing lifestyles can all influence what customers value.",
      },
      {
        type: "paragraph",
        text: "Monitoring these shifts helps identify whether demand is moving toward greater convenience, premium quality, affordability, digital access, healthier options, personalization, or other emerging preferences.",
      },
      {
        type: "paragraph",
        text: "This type of insight is especially useful when developing new products or adjusting existing offerings.",
      },
    ],
  },
  {
    heading: "Measuring Market Demand",
    blocks: [
      {
        type: "paragraph",
        text: "Understanding customers is only part of the picture. Businesses also need to know how much demand exists and how it is likely to develop.",
      },
      {
        type: "paragraph",
        text: "Demand analysis may look at market size, purchase frequency, consumption patterns, customer penetration, growth rates, replacement cycles, geographic concentration, and adoption trends.",
      },
      {
        type: "paragraph",
        text: "This makes it possible to distinguish between markets that are large today and those that may offer stronger future growth.",
      },
      {
        type: "paragraph",
        text: "A market with moderate current demand, for example, may still be attractive if customer adoption is increasing rapidly and competitive intensity remains relatively low.",
      },
    ],
  },
  {
    heading: "Connecting Customer Needs with Product Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "Customer insight becomes most valuable when it directly informs business decisions.",
      },
      {
        type: "paragraph",
        text: "Understanding why customers choose one product over another can support changes in product features, packaging, service design, pricing, distribution, and positioning.",
      },
      {
        type: "paragraph",
        text: "It can also reveal where existing products are failing to meet expectations.",
      },
      {
        type: "paragraph",
        text: "In some cases, the strongest opportunity may come from adapting an existing offering to local needs rather than launching something entirely new.",
      },
    ],
  },
  {
    heading: "Identifying Unmet Demand",
    blocks: [
      {
        type: "paragraph",
        text: "One of the most useful outcomes of customer research is identifying needs that are not being served well by existing competitors.",
      },
      {
        type: "paragraph",
        text: "These gaps may appear as:",
      },
      {
        type: "list",
        items: [
          "Limited product availability",
          "Weak service quality",
          "Inconvenient purchasing channels",
          "Pricing mismatches",
          "Poor digital experience",
          "Insufficient product variety",
          "Unmet expectations in specific customer segments",
        ],
      },
      {
        type: "paragraph",
        text: "Recognizing these gaps can help businesses identify where new propositions or stronger positioning may create an advantage.",
      },
    ],
  },
  {
    heading: "Comparing Demand Across Southeast Asian Markets",
    blocks: [
      {
        type: "paragraph",
        text: "Customer behavior can vary significantly across ASEAN countries, even within the same industry.",
      },
      {
        type: "paragraph",
        text: "A product that performs well in Singapore may require different pricing, packaging, communication, or distribution in Indonesia, Vietnam, Thailand, Malaysia, or the Philippines.",
      },
      {
        type: "paragraph",
        text: "For this reason, demand analysis should consider both regional similarities and country-specific differences.",
      },
      {
        type: "paragraph",
        text: "A regional view helps identify broader patterns, while local analysis provides the detail needed to execute effectively.",
      },
    ],
  },
  {
    heading: "From Customer Data to Business Direction",
    blocks: [
      {
        type: "paragraph",
        text: "Collecting customer data is useful, but the real value comes from turning that information into clear business implications.",
      },
      {
        type: "paragraph",
        text: "Customer & Demand Insights can help answer questions such as:",
      },
      {
        type: "list",
        items: [
          "Which customer segments are growing fastest?",
          "What factors influence purchase decisions?",
          "Which needs are still underserved?",
          "How sensitive are customers to price?",
          "Which features or benefits matter most?",
          "Where is demand strongest geographically?",
          "How are preferences changing over time?",
        ],
      },
      {
        type: "paragraph",
        text: "These insights can guide decisions around market entry, product development, pricing, marketing, channel strategy, and commercial investment.",
      },
    ],
  },
  {
    heading: "Creating Stronger Market Relevance",
    blocks: [
      {
        type: "paragraph",
        text: "A business becomes more competitive when its decisions are closely connected to real customer demand.",
      },
      {
        type: "paragraph",
        text: "Customer & Demand Insights provides the evidence needed to understand how customers think, what they value, and how their behavior is changing across Southeast Asia.",
      },
      {
        type: "paragraph",
        text: "By combining customer segmentation, demand analysis, trend monitoring, and market comparison, businesses can build more relevant offerings, improve market positioning, and identify growth opportunities with greater confidence.",
      },
    ],
  },
];

export default function CustomerDemandInsightsPage() {
  const service = services.find((s) => s.slug === "consumer-behavior-analysis")!;

  return (
    <>
      <ServiceHero
        icon={Users}
        title={service.name}
        summary={service.summary}
        image={serviceImages["consumer-behavior-analysis"].src}
        imageAlt={serviceImages["consumer-behavior-analysis"].alt}
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
