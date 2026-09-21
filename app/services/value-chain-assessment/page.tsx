import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";
import { ServiceHero } from "@/components/ServiceHero";
import { FadeIn } from "@/components/FadeIn";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Value Chain Assessment",
  description:
    "How a structured value chain assessment helps businesses improve cost, resilience, and competitive advantage across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Value Chain Assessment in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "A company's performance depends on more than its products or market position. It also depends on how effectively value is created across sourcing, operations, logistics, distribution, sales, and customer delivery.",
      },
      {
        type: "paragraph",
        text: "In Southeast Asia, these activities often span multiple countries, suppliers, partners, and operating environments. Differences in infrastructure, labor costs, regulations, logistics networks, and supplier capabilities can create both inefficiencies and opportunities.",
      },
      {
        type: "paragraph",
        text: "Value Chain Assessment provides a structured way to understand how each part of the business contributes to cost, speed, quality, resilience, and competitive advantage.",
      },
    ],
  },
  {
    heading: "Why Value Chain Assessment Matters",
    blocks: [
      {
        type: "paragraph",
        text: "A detailed view of the value chain can reveal where performance can be improved and where hidden risks may exist.",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Improving Operational Performance:",
            text: "Reviewing each stage of the value chain helps identify delays, duplication, capacity constraints, and process inefficiencies.",
          },
          {
            lead: "Understanding Cost Drivers:",
            text: "Breaking down activities across sourcing, production, logistics, and distribution provides greater visibility into where costs are created and where savings may be possible.",
          },
          {
            lead: "Strengthening Supply Chain Resilience:",
            text: "Dependence on specific suppliers, markets, or logistics routes can create vulnerabilities. A value chain assessment helps identify these exposure points and potential alternatives.",
          },
          {
            lead: "Finding Sources of Competitive Advantage:",
            text: "Some parts of the value chain may create stronger differentiation than others, such as faster distribution, better supplier relationships, stronger after-sales support, or more efficient production.",
          },
          {
            lead: "Supporting Expansion Decisions:",
            text: "Understanding the current value chain helps determine what needs to change when entering new Southeast Asian markets or scaling existing operations.",
          },
        ],
      },
    ],
  },
  {
    heading: "Mapping the Full Value Chain",
    blocks: [
      {
        type: "paragraph",
        text: "The first step is developing a clear picture of how value moves through the organization.",
      },
      {
        type: "paragraph",
        text: "This may include:",
      },
      {
        type: "list",
        items: [
          "Raw material and supplier sourcing",
          "Procurement",
          "Manufacturing or service delivery",
          "Warehousing",
          "Transportation and logistics",
          "Distribution channels",
          "Sales and marketing",
          "Customer service",
          "After-sales support",
        ],
      },
      {
        type: "paragraph",
        text: "Mapping these activities provides visibility into how different functions connect and where dependencies exist.",
      },
    ],
  },
  {
    heading: "Assessing Performance Across Each Stage",
    blocks: [
      {
        type: "paragraph",
        text: "Once the value chain is mapped, each stage can be reviewed against key performance factors.",
      },
      {
        type: "paragraph",
        text: "Areas of assessment may include:",
      },
      {
        type: "list",
        items: [
          "Cost efficiency",
          "Lead times",
          "Capacity utilization",
          "Quality performance",
          "Supplier reliability",
          "Inventory levels",
          "Logistics performance",
          "Channel effectiveness",
          "Customer responsiveness",
          "Technology and automation",
          "Operational risk",
        ],
      },
      {
        type: "paragraph",
        text: "This helps distinguish between activities that are performing well and those that may be limiting overall business performance.",
      },
    ],
  },
  {
    heading: "Identifying Value Drivers",
    blocks: [
      {
        type: "paragraph",
        text: "Not every activity contributes equally to competitive advantage.",
      },
      {
        type: "paragraph",
        text: "Some parts of the value chain may have a stronger influence on profitability, customer satisfaction, market access, or differentiation.",
      },
      {
        type: "paragraph",
        text: "Key value drivers may include:",
      },
      {
        type: "list",
        items: [
          "Reliable access to critical suppliers",
          "Lower production costs",
          "Faster delivery",
          "Strong distribution coverage",
          "Product availability",
          "Flexible manufacturing",
          "Local market responsiveness",
          "Digital capabilities",
          "Customer service quality",
        ],
      },
      {
        type: "paragraph",
        text: "Understanding these drivers helps prioritize the areas that matter most strategically.",
      },
    ],
  },
  {
    heading: "Evaluating Cost and Efficiency Opportunities",
    blocks: [
      {
        type: "paragraph",
        text: "Value Chain Assessment can also highlight areas where resources may be used more effectively.",
      },
      {
        type: "paragraph",
        text: "Potential improvement opportunities may include:",
      },
      {
        type: "list",
        items: [
          "Consolidating suppliers",
          "Renegotiating sourcing arrangements",
          "Reducing logistics complexity",
          "Improving inventory management",
          "Optimizing warehouse locations",
          "Automating repetitive processes",
          "Revising distribution structures",
          "Outsourcing non-core activities",
          "Bringing critical activities in-house",
        ],
      },
      {
        type: "paragraph",
        text: "The objective is not simply to reduce cost, but to improve the overall balance between efficiency, quality, resilience, and service.",
      },
    ],
  },
  {
    heading: "Reviewing Supply Chain Risk",
    blocks: [
      {
        type: "paragraph",
        text: "Value chains across Southeast Asia can be exposed to a wide range of external risks.",
      },
      {
        type: "paragraph",
        text: "These may include:",
      },
      {
        type: "list",
        items: [
          "Supplier concentration",
          "Cross-border logistics disruption",
          "Regulatory changes",
          "Currency fluctuations",
          "Infrastructure limitations",
          "Political or economic uncertainty",
          "Labor constraints",
          "Dependence on imported materials",
          "Natural disaster exposure",
        ],
      },
      {
        type: "paragraph",
        text: "A structured assessment helps identify which parts of the value chain are most vulnerable and where contingency planning may be required.",
      },
    ],
  },
  {
    heading: "Comparing Alternative Value Chain Models",
    blocks: [
      {
        type: "paragraph",
        text: "In some cases, improving performance may require more than optimizing the existing model.",
      },
      {
        type: "paragraph",
        text: "Businesses may need to consider alternative structures such as:",
      },
      {
        type: "list",
        items: [
          "Using additional suppliers",
          "Nearshoring production",
          "Relocating manufacturing",
          "Establishing regional distribution hubs",
          "Changing logistics partners",
          "Using direct-to-customer channels",
          "Building local production capability",
          "Developing strategic partnerships",
        ],
      },
      {
        type: "paragraph",
        text: "Comparing different models can help determine which structure provides the strongest combination of cost, flexibility, resilience, and market reach.",
      },
    ],
  },
  {
    heading: "Value Chains Across Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Operating across Southeast Asia adds an additional layer of complexity because each country may have different operating conditions.",
      },
      {
        type: "paragraph",
        text: "Manufacturing economics, logistics infrastructure, labor availability, supplier ecosystems, import procedures, and distribution networks can vary significantly across the region.",
      },
      {
        type: "paragraph",
        text: "For this reason, value chain decisions should consider both regional integration and country-level realities.",
      },
      {
        type: "paragraph",
        text: "A regional model may create scale, while local adjustments may still be necessary to improve responsiveness and reduce operational risk.",
      },
    ],
  },
  {
    heading: "Turning Assessment into Action",
    blocks: [
      {
        type: "paragraph",
        text: "The purpose of a Value Chain Assessment is not only to identify problems, but to define practical improvement priorities.",
      },
      {
        type: "paragraph",
        text: "A clear action plan may include:",
      },
      {
        type: "list",
        items: [
          "Quick efficiency improvements",
          "Medium-term process changes",
          "Supplier or partner restructuring",
          "Technology investments",
          "Logistics optimization",
          "Capacity expansion",
          "Risk mitigation measures",
          "Long-term operating model changes",
        ],
      },
      {
        type: "paragraph",
        text: "Prioritizing initiatives based on impact, feasibility, investment requirements, and implementation time helps turn analysis into measurable improvement.",
      },
    ],
  },
  {
    heading: "Building a Stronger and More Resilient Value Chain",
    blocks: [
      {
        type: "paragraph",
        text: "An effective value chain connects operational efficiency with customer value and long-term competitiveness.",
      },
      {
        type: "paragraph",
        text: "By understanding how each activity contributes to performance, businesses can identify where costs can be reduced, where resilience can be strengthened, and where additional value can be created.",
      },
      {
        type: "paragraph",
        text: "For companies operating across Southeast Asia, a structured Value Chain Assessment provides a clearer foundation for improving operations, strengthening supply networks, supporting expansion, and building a more competitive business model.",
      },
    ],
  },
];

export default function ValueChainAssessmentPage() {
  const service = services.find((s) => s.slug === "value-chain-analysis")!;

  return (
    <>
      <ServiceHero
        icon={LinkIcon}
        title={service.name}
        summary={service.summary}
        image={serviceImages["value-chain-analysis"].src}
        imageAlt={serviceImages["value-chain-analysis"].alt}
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
