import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";

export const metadata: Metadata = {
  title: "Market Entry Planning",
  description:
    "How structured market entry planning helps businesses evaluate where and how to expand across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Market Entry Planning for Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Expanding into Southeast Asia can open access to fast-growing industries, emerging customer segments, and new commercial opportunities. But entering the region successfully requires more than choosing an attractive country and launching operations. Each market has its own competitive landscape, customer expectations, regulatory framework, distribution structure, and business practices.",
      },
      {
        type: "paragraph",
        text: "Market Entry Planning helps bring these factors together before major commitments are made. It provides a structured way to evaluate where to enter, how to enter, which customer segments to prioritize, and what capabilities are required to build a sustainable position.",
      },
      {
        type: "paragraph",
        text: "Rather than treating Southeast Asia as one market, effective entry planning recognizes the differences between individual countries and builds an approach around local realities.",
      },
    ],
  },
  {
    heading: "What Market Entry Planning Needs to Address",
    blocks: [
      {
        type: "paragraph",
        text: "A strong market entry plan should answer several important questions before expansion begins.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Which Markets Offer the Best Fit:",
            text: "Market size alone does not determine attractiveness. Growth outlook, competitive pressure, accessibility, customer demand, regulatory requirements, and operating costs all influence whether a market is suitable.",
          },
          {
            lead: "Who the Priority Customers Are:",
            text: "Understanding the most relevant customer groups helps businesses avoid entering with an overly broad approach. Clear segmentation supports stronger positioning, more effective sales strategies, and better use of resources.",
          },
          {
            lead: "How the Market Should Be Entered:",
            text: "Different entry models can produce very different results. Direct investment, local partnerships, distributors, joint ventures, licensing, or digital channels may each be appropriate depending on the industry and country.",
          },
          {
            lead: "What Barriers May Affect Entry:",
            text: "Regulatory approvals, import requirements, local ownership rules, pricing pressure, supply-chain limitations, and established competitors can all affect the speed and cost of market entry.",
          },
          {
            lead: "What Resources Will Be Required:",
            text: "Successful entry depends on having the right level of investment, local capabilities, management attention, distribution coverage, and operational support.",
          },
        ],
      },
    ],
  },
  {
    heading: "Evaluating Market Attractiveness",
    blocks: [
      {
        type: "paragraph",
        text: "Before entering a new Southeast Asian market, businesses need a clear view of both opportunity and difficulty.",
      },
      {
        type: "paragraph",
        text: "Market attractiveness can be assessed through factors such as:",
      },
      {
        type: "list",
        items: [
          "Market size and growth rate",
          "Customer demand and purchasing behavior",
          "Industry maturity",
          "Competitive intensity",
          "Pricing conditions",
          "Regulatory complexity",
          "Route-to-market availability",
          "Infrastructure and logistics",
          "Investment requirements",
          "Potential profitability",
        ],
      },
      {
        type: "paragraph",
        text: "This type of assessment helps compare markets more objectively and identify where the strongest entry potential may exist.",
      },
    ],
  },
  {
    heading: "Selecting the Right Entry Model",
    blocks: [
      {
        type: "paragraph",
        text: "Choosing how to enter a market is just as important as deciding where to enter.",
      },
      {
        type: "paragraph",
        text: "Some businesses may benefit from direct operations and greater control, while others may achieve faster access through local partners or distributors. The right model depends on the balance between investment, speed, control, market knowledge, and risk.",
      },
      {
        type: "paragraph",
        text: "Common entry options may include:",
      },
      {
        type: "list",
        items: [
          "Direct sales",
          "Local distributors",
          "Strategic partnerships",
          "Joint ventures",
          "Licensing arrangements",
          "Local subsidiaries",
          "E-commerce or digital channels",
          "Acquisition of an existing market player",
        ],
      },
      {
        type: "paragraph",
        text: "Each option creates different operational and financial implications, so entry mode selection should reflect both business objectives and local market conditions.",
      },
    ],
  },
  {
    heading: "Building a Practical Market Entry Roadmap",
    blocks: [
      {
        type: "paragraph",
        text: "Once the target market and entry model are selected, the next step is translating the strategy into a practical sequence of actions.",
      },
      {
        type: "paragraph",
        text: "A market entry roadmap may include:",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Target Market Prioritization:",
            text: "Identifying which country, city, industry segment, or customer group should be approached first.",
          },
          {
            lead: "Positioning and Value Proposition:",
            text: "Defining how the offering should be presented relative to local customer needs and competitors.",
          },
          {
            lead: "Partner and Channel Selection:",
            text: "Evaluating potential distributors, agents, commercial partners, or sales channels.",
          },
          {
            lead: "Regulatory Preparation:",
            text: "Understanding licenses, approvals, legal requirements, and compliance obligations before launch.",
          },
          {
            lead: "Operational Setup:",
            text: "Determining staffing, supply-chain needs, local support, pricing structures, and other execution requirements.",
          },
          {
            lead: "Launch Sequencing:",
            text: "Establishing a realistic timeline for market preparation, entry, testing, and expansion.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "This structured approach helps reduce uncertainty and ensures that commercial, operational, and regulatory considerations are addressed together.",
      },
    ],
  },
  {
    heading: "Managing Risk Before Entry",
    blocks: [
      {
        type: "paragraph",
        text: "New market expansion always involves uncertainty, but many risks can be identified before significant investment is made.",
      },
      {
        type: "paragraph",
        text: "Potential risks may include:",
      },
      {
        type: "list",
        items: [
          "Misjudging customer demand",
          "Underestimating local competition",
          "Choosing the wrong partner",
          "Regulatory delays",
          "Pricing that does not fit local purchasing power",
          "Supply-chain or logistics limitations",
          "Higher-than-expected entry costs",
          "Slow customer adoption",
        ],
      },
      {
        type: "paragraph",
        text: "Market Entry Planning helps identify these issues early so that alternative approaches, safeguards, and contingency plans can be developed before launch.",
      },
    ],
  },
  {
    heading: "Local Adaptation Matters",
    blocks: [
      {
        type: "paragraph",
        text: "A successful entry model in one Southeast Asian country may not work equally well in another.",
      },
      {
        type: "paragraph",
        text: "Customer expectations, decision-making processes, distribution channels, price sensitivity, business culture, and regulation can differ significantly between markets such as Thailand, Vietnam, Indonesia, Malaysia, Singapore, and the Philippines.",
      },
      {
        type: "paragraph",
        text: "For this reason, market entry planning should balance regional consistency with local adaptation. The broader business direction may remain the same, while product positioning, pricing, partnerships, channels, and communication may need to change by market.",
      },
    ],
  },
  {
    heading: "Entering in Stages",
    blocks: [
      {
        type: "paragraph",
        text: "In many cases, a phased approach can reduce risk and improve decision-making.",
      },
      {
        type: "paragraph",
        text: "Businesses may begin with a limited market test, selected customer segment, pilot partnership, or targeted geographic area before making a larger investment. Early results can then be used to refine assumptions and improve the entry model.",
      },
      {
        type: "paragraph",
        text: "This allows expansion to be based on market evidence rather than relying entirely on initial projections.",
      },
    ],
  },
  {
    heading: "From Market Opportunity to Market Presence",
    blocks: [
      {
        type: "paragraph",
        text: "Entering Southeast Asia successfully requires more than identifying a promising market. It requires a clear understanding of where the opportunity is, how the market works, what barriers exist, and which entry model offers the strongest balance of control, speed, investment, and risk.",
      },
      {
        type: "paragraph",
        text: "A well-developed Market Entry Plan turns these considerations into a structured pathway from initial market evaluation to commercial launch.",
      },
      {
        type: "paragraph",
        text: "By combining market assessment, customer segmentation, competitive analysis, entry-mode selection, regulatory understanding, and execution planning, businesses can enter Southeast Asian markets with greater clarity and build a stronger foundation for long-term expansion.",
      },
    ],
  },
];

export default function MarketEntryPlanningPage() {
  const service = services.find((s) => s.slug === "market-entry-strategy")!;

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <MapPin size={36} className="text-accent-light" />
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
