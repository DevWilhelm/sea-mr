import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "How a structured growth strategy helps organizations prioritize markets, segments, and investment across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Growth Strategy in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Growth in Southeast Asia rarely follows a single path. Opportunities can emerge from new customer segments, underserved markets, changing consumption patterns, digital channels, partnerships, or shifts in industry structure. The challenge is not simply finding where growth exists, but understanding which opportunities are realistic, scalable, and aligned with the organization's capabilities.",
      },
      {
        type: "paragraph",
        text: "A strong growth strategy brings together market potential, competitive positioning, customer demand, and execution priorities. It helps clarify where to expand, which opportunities deserve investment, and how resources should be allocated over time.",
      },
      {
        type: "paragraph",
        text: "Across Southeast Asia, this is especially important because market conditions differ significantly between countries. A growth approach that works in one market may need to be adjusted for another based on customer behavior, regulation, pricing, distribution, competition, or operating conditions.",
      },
    ],
  },
  {
    heading: "Where Growth Can Come From",
    blocks: [
      {
        type: "paragraph",
        text: "Growth opportunities can develop in several areas depending on the company's current position and long-term direction.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "New Geographic Markets:",
            text: "Expanding into countries, cities, or regions where demand is growing and market conditions support entry.",
          },
          {
            lead: "New Customer Segments:",
            text: "Identifying customer groups that are underserved or showing stronger demand for specific products or services.",
          },
          {
            lead: "Product and Service Expansion:",
            text: "Developing new offerings or adapting existing ones to meet changing market needs.",
          },
          {
            lead: "Channel Development:",
            text: "Exploring new sales, distribution, e-commerce, digital, or partnership channels that can improve market reach.",
          },
          {
            lead: "Market Share Expansion:",
            text: "Strengthening performance in existing markets through better positioning, pricing, distribution, and customer engagement.",
          },
          {
            lead: "Strategic Partnerships:",
            text: "Working with local partners, distributors, technology providers, or industry players to accelerate access and expansion.",
          },
        ],
      },
    ],
  },
  {
    heading: "Evaluating Growth Potential",
    blocks: [
      {
        type: "paragraph",
        text: "Not every attractive market opportunity should become a strategic priority. Growth opportunities need to be assessed against both market attractiveness and business feasibility.",
      },
      {
        type: "paragraph",
        text: "Key areas of evaluation may include:",
      },
      {
        type: "list",
        items: [
          "Market size and expected growth",
          "Customer demand and buying behavior",
          "Competitive intensity",
          "Regulatory and operating conditions",
          "Entry barriers",
          "Required investment",
          "Internal capabilities",
          "Revenue and profitability potential",
          "Time required to reach scale",
        ],
      },
      {
        type: "paragraph",
        text: "By comparing these factors, growth opportunities can be prioritized more clearly and resources can be directed toward areas with stronger potential.",
      },
    ],
  },
  {
    heading: "Building the Growth Roadmap",
    blocks: [
      {
        type: "paragraph",
        text: "Once the most relevant opportunities are identified, the next step is turning them into a structured growth roadmap.",
      },
      {
        type: "paragraph",
        text: "This typically includes:",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Defining Growth Priorities:",
            text: "Selecting the markets, customer segments, products, or channels that should receive the greatest focus.",
          },
          {
            lead: "Setting Clear Growth Targets:",
            text: "Establishing measurable commercial and strategic objectives.",
          },
          {
            lead: "Determining Investment Needs:",
            text: "Identifying the resources, capabilities, technology, people, and partnerships required.",
          },
          {
            lead: "Sequencing Initiatives:",
            text: "Deciding which opportunities should be pursued first and which should follow later.",
          },
          {
            lead: "Establishing Performance Measures:",
            text: "Creating clear indicators to track progress and evaluate whether the growth direction is delivering results.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "A well-designed roadmap helps ensure that growth efforts remain focused and manageable rather than becoming a collection of disconnected initiatives.",
      },
    ],
  },
  {
    heading: "Growth Strategy Across Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Southeast Asia offers significant long-term potential, but the region should not be treated as one uniform market. Indonesia, Thailand, Vietnam, Malaysia, the Philippines, Singapore, and other ASEAN economies each have different business environments, customer profiles, levels of market maturity, and competitive dynamics.",
      },
      {
        type: "paragraph",
        text: "For this reason, regional growth strategies often need to balance two perspectives: a broader Southeast Asian direction and country-specific execution.",
      },
      {
        type: "paragraph",
        text: "Regional priorities may define where the strongest opportunities are, while local strategies determine how products, pricing, channels, partnerships, and positioning should be adapted within each market.",
      },
    ],
  },
  {
    heading: "Balancing Ambition and Execution",
    blocks: [
      {
        type: "paragraph",
        text: "Growth strategies can fail when expansion ambitions move faster than the organization's ability to execute.",
      },
      {
        type: "paragraph",
        text: "Strong growth planning therefore considers not only market opportunity, but also operational capacity. This includes whether the organization has the people, investment, supply chain, partnerships, technology, and management capability required to support expansion.",
      },
      {
        type: "paragraph",
        text: "The most sustainable growth strategies are those that connect commercial ambition with realistic execution.",
      },
    ],
  },
  {
    heading: "Adapting as Markets Change",
    blocks: [
      {
        type: "paragraph",
        text: "Growth strategy is not a one-time exercise. Market conditions continue to change as competitors enter, customer preferences evolve, regulations shift, and new technologies reshape industries.",
      },
      {
        type: "paragraph",
        text: "Regular review helps determine whether existing priorities remain attractive or whether resources should be redirected toward new opportunities.",
      },
      {
        type: "paragraph",
        text: "Ongoing market monitoring can also reveal early signals of emerging growth areas before they become widely established.",
      },
    ],
  },
  {
    heading: "Creating a Clearer Path to Growth",
    blocks: [
      {
        type: "paragraph",
        text: "Sustainable growth comes from making deliberate choices about where to compete and how to build advantage.",
      },
      {
        type: "paragraph",
        text: "A structured growth strategy helps organizations move from broad expansion ambitions to clearly prioritized opportunities, practical investment decisions, and measurable actions.",
      },
      {
        type: "paragraph",
        text: "In Southeast Asia's diverse and fast-changing markets, this creates a stronger foundation for expanding market presence, developing new revenue streams, and building long-term competitiveness.",
      },
    ],
  },
];

export default function GrowthStrategyPage() {
  const service = services.find((s) => s.slug === "strategic-planning")!;

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <Compass size={36} className="text-accent-light" />
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{service.summary}</p>
        </div>
      </section>

      <section className="section max-w-3xl">
        <ServiceArticle sections={sections} />

        <Link href="/contact-us" className="btn-primary mt-10 !bg-primary">
          Talk to an Expert <ArrowRight size={16} className="ml-2" />
        </Link>
      </section>
    </>
  );
}
