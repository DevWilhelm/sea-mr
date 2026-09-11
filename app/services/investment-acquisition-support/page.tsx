import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";

export const metadata: Metadata = {
  title: "Investment & Acquisition Support",
  description:
    "How structured commercial evaluation, due diligence, and integration planning support investment and acquisition decisions across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Investment & Acquisition Support in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Investment and acquisition opportunities across Southeast Asia can provide a powerful route to growth, market access, capability expansion, and long-term strategic positioning. At the same time, these opportunities often involve complex decisions around target quality, market fit, valuation, regulation, integration, and execution.",
      },
      {
        type: "paragraph",
        text: "A successful investment or acquisition therefore requires more than identifying an attractive company. It requires a structured assessment of whether the opportunity supports the broader business strategy, whether the underlying value is sustainable, and whether the transaction can be executed effectively within local market conditions.",
      },
      {
        type: "paragraph",
        text: "Investment & Acquisition Support brings together market intelligence, commercial assessment, strategic evaluation, and transaction planning to help decision-makers approach these opportunities with greater clarity.",
      },
    ],
  },
  {
    heading: "Where Investment and Acquisition Opportunities Create Value",
    blocks: [
      {
        type: "paragraph",
        text: "Investment and acquisition strategies can serve different objectives depending on the company's priorities and market position.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Entering New Markets:",
            text: "Acquiring or investing in an established local business can provide faster access to customers, distribution networks, regulatory knowledge, and operating capabilities.",
          },
          {
            lead: "Expanding Capabilities:",
            text: "Transactions can strengthen a company's position by adding technology, expertise, intellectual property, production capacity, or specialized resources.",
          },
          {
            lead: "Broadening the Business Portfolio:",
            text: "Investment in adjacent products, services, industries, or customer segments can reduce dependence on a single market and create new sources of revenue.",
          },
          {
            lead: "Accelerating Growth:",
            text: "Rather than building capabilities entirely from the ground up, acquisitions can provide a faster route to scale in markets where timing and market access are critical.",
          },
          {
            lead: "Strengthening Competitive Position:",
            text: "Strategic investment can help secure a stronger market position, expand market share, improve distribution reach, or reduce competitive gaps.",
          },
        ],
      },
    ],
  },
  {
    heading: "Evaluating the Right Opportunities",
    blocks: [
      {
        type: "paragraph",
        text: "Not every attractive company is the right investment target.",
      },
      {
        type: "paragraph",
        text: "A strong evaluation process considers both the quality of the business and its strategic relevance. Important areas may include:",
      },
      {
        type: "list",
        items: [
          "Market position and competitive strength",
          "Revenue quality and growth potential",
          "Customer concentration and retention",
          "Product and service portfolio",
          "Management capabilities",
          "Operational performance",
          "Regulatory exposure",
          "Distribution and supplier relationships",
          "Scalability",
          "Strategic fit with the investor or acquirer",
        ],
      },
      {
        type: "paragraph",
        text: "Combining market-level analysis with company-level assessment provides a clearer view of whether an opportunity is likely to create sustainable value.",
      },
    ],
  },
  {
    heading: "Identifying and Screening Potential Targets",
    blocks: [
      {
        type: "paragraph",
        text: "Target identification should begin with a clearly defined investment thesis.",
      },
      {
        type: "paragraph",
        text: "This means establishing what type of company fits the strategic objective before searching for potential opportunities. Criteria may include geography, industry, company size, customer base, capabilities, ownership structure, or growth stage.",
      },
      {
        type: "paragraph",
        text: "Potential targets can then be screened against these criteria to narrow the market to the most relevant opportunities.",
      },
      {
        type: "paragraph",
        text: "A structured screening process may assess:",
      },
      {
        type: "list",
        items: [
          "Strategic relevance",
          "Market attractiveness",
          "Business model quality",
          "Competitive differentiation",
          "Growth outlook",
          "Transaction feasibility",
          "Potential risks",
          "Estimated value creation",
        ],
      },
      {
        type: "paragraph",
        text: "This helps prevent resources from being spent on opportunities that may appear attractive but do not fit the broader strategic direction.",
      },
    ],
  },
  {
    heading: "Commercial and Market Due Diligence",
    blocks: [
      {
        type: "paragraph",
        text: "Before an investment or acquisition decision is made, it is important to test the assumptions behind the opportunity.",
      },
      {
        type: "paragraph",
        text: "Commercial and market due diligence helps assess whether expected growth, demand, positioning, and competitive advantages are realistic.",
      },
      {
        type: "paragraph",
        text: "Key areas of review may include:",
      },
      {
        type: "list",
        items: [
          "Market size and future growth",
          "Customer demand and purchasing behavior",
          "Competitive landscape",
          "Market share and positioning",
          "Pricing dynamics",
          "Customer retention and concentration",
          "Industry risks",
          "Regulatory developments",
          "New market entrants",
          "Long-term demand drivers",
        ],
      },
      {
        type: "paragraph",
        text: "This analysis provides an independent view of the opportunity and helps identify both upside potential and areas of concern.",
      },
    ],
  },
  {
    heading: "Assessing Strategic Fit",
    blocks: [
      {
        type: "paragraph",
        text: "Financial attractiveness alone does not guarantee a successful acquisition.",
      },
      {
        type: "paragraph",
        text: "A target may perform well independently but still be a poor strategic fit if its capabilities, customer base, operating model, or long-term direction do not align with the acquiring organization.",
      },
      {
        type: "paragraph",
        text: "Strategic fit assessment may consider:",
      },
      {
        type: "list",
        items: [
          "Compatibility with existing operations",
          "Geographic expansion potential",
          "Customer overlap or cross-selling opportunities",
          "Product and service complementarity",
          "Distribution synergies",
          "Technology or capability enhancement",
          "Management compatibility",
          "Potential integration complexity",
        ],
      },
      {
        type: "paragraph",
        text: "Understanding these factors early can help determine whether the transaction is likely to create value beyond the purchase itself.",
      },
    ],
  },
  {
    heading: "Supporting Transaction Decisions",
    blocks: [
      {
        type: "paragraph",
        text: "Investment and acquisition decisions often involve multiple scenarios and trade-offs.",
      },
      {
        type: "paragraph",
        text: "Decision support can include comparing potential targets, testing growth assumptions, reviewing transaction structures, assessing strategic risks, and evaluating expected returns.",
      },
      {
        type: "paragraph",
        text: "Scenario analysis can also help answer questions such as:",
      },
      {
        type: "list",
        items: [
          "What happens if market growth slows?",
          "How dependent is the target on a small number of customers?",
          "How sensitive is the investment case to pricing or margin changes?",
          "What level of synergy is realistically achievable?",
          "What additional investment will be required after the transaction?",
        ],
      },
      {
        type: "paragraph",
        text: "This creates a more realistic view of the opportunity before final commitments are made.",
      },
    ],
  },
  {
    heading: "Planning for Integration and Value Creation",
    blocks: [
      {
        type: "paragraph",
        text: "The success of an acquisition is not determined when the transaction closes. Much of the value is created afterward.",
      },
      {
        type: "paragraph",
        text: "Early integration planning helps clarify how the acquired business will operate within the broader organization and where expected benefits will come from.",
      },
      {
        type: "paragraph",
        text: "Key areas may include:",
      },
      {
        type: "list",
        items: [
          "Management and governance",
          "Commercial integration",
          "Customer transition",
          "Brand strategy",
          "Systems and processes",
          "Talent retention",
          "Supply-chain coordination",
          "Cost efficiencies",
          "Cross-selling opportunities",
          "Performance tracking",
        ],
      },
      {
        type: "paragraph",
        text: "Clear priorities during the early stages can help reduce disruption and improve the chances of capturing the intended value from the transaction.",
      },
    ],
  },
  {
    heading: "Investment and Acquisition in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Southeast Asia presents a particularly diverse investment environment. Opportunities may differ significantly between countries depending on market maturity, ownership structures, local regulations, competitive intensity, and sector development.",
      },
      {
        type: "paragraph",
        text: "For this reason, investment decisions should be grounded in local market realities rather than relying only on regional-level assumptions.",
      },
      {
        type: "paragraph",
        text: "A target that appears attractive from a broader ASEAN perspective may face specific local challenges related to regulation, licensing, customer concentration, distribution, or ownership structure. Country-level evaluation is therefore an essential part of the investment process.",
      },
    ],
  },
  {
    heading: "From Opportunity Identification to Long-Term Value",
    blocks: [
      {
        type: "paragraph",
        text: "Investment and acquisition decisions are most effective when strategy, market understanding, commercial evaluation, and execution planning are connected from the beginning.",
      },
      {
        type: "paragraph",
        text: "A structured approach helps organizations move beyond simply finding available opportunities and instead focus on those that offer the strongest combination of strategic fit, market potential, transaction feasibility, and long-term value creation.",
      },
      {
        type: "paragraph",
        text: "Across Southeast Asia, this provides a more disciplined foundation for investment decisions, acquisitions, partnerships, and portfolio expansion—helping businesses pursue growth with greater clarity and a stronger understanding of both opportunity and risk.",
      },
    ],
  },
];

export default function InvestmentAcquisitionSupportPage() {
  const service = services.find((s) => s.slug === "mergers-and-acquisitions")!;

  return (
    <>
      <section className="bg-primary text-white">
        <div className="section">
          <Handshake size={36} className="text-accent-light" />
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
