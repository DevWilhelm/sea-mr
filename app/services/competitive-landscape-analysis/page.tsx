import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceArticle, type ArticleSection } from "@/components/ServiceArticle";
import { ServiceHero } from "@/components/ServiceHero";
import { FadeIn } from "@/components/FadeIn";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Competitive Landscape Analysis",
  description:
    "How a structured competitive landscape analysis helps businesses understand market positioning, strategic moves, and opportunities across Southeast Asia.",
};

const sections: ArticleSection[] = [
  {
    heading: "Competitive Landscape Analysis in Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Southeast Asia is a highly competitive region where local champions, regional groups, multinational companies, and emerging digital players often compete within the same market. Understanding this environment requires more than identifying who the major competitors are. It also means examining how they position themselves, where they are gaining traction, what capabilities they are building, and how competitive pressure may evolve over time.",
      },
      {
        type: "paragraph",
        text: "Competitive Landscape Analysis provides a structured view of the market by comparing key players, business models, market positions, strategic moves, and sources of differentiation. This helps organizations understand where they stand today and where future opportunities or threats may emerge.",
      },
    ],
  },
  {
    heading: "Understanding the Competitive Environment",
    blocks: [
      {
        type: "paragraph",
        text: "A strong competitive analysis should look beyond market share alone.",
      },
      {
        type: "paragraph",
        text: "Important areas may include:",
      },
      {
        type: "list",
        items: [
          "Major local and international competitors",
          "Market positioning",
          "Product and service portfolios",
          "Pricing strategies",
          "Distribution and sales channels",
          "Customer segments",
          "Geographic coverage",
          "Partnerships and alliances",
          "Innovation activity",
          "Recent investments and expansion moves",
        ],
      },
      {
        type: "paragraph",
        text: "By bringing these factors together, it becomes easier to see how the market is structured and which companies are shaping its direction.",
      },
    ],
  },
  {
    heading: "Identifying the Key Market Players",
    blocks: [
      {
        type: "paragraph",
        text: "The competitive environment in Southeast Asia can vary significantly by country and industry.",
      },
      {
        type: "paragraph",
        text: "In some markets, a few established companies may dominate. In others, competition may be more fragmented, with smaller local businesses holding strong regional or niche positions.",
      },
      {
        type: "paragraph",
        text: "A structured competitor mapping process can help classify players by:",
      },
      {
        type: "list",
        items: [
          "Market size",
          "Business model",
          "Geographic reach",
          "Customer focus",
          "Product specialization",
          "Pricing position",
          "Growth stage",
          "Strategic importance",
        ],
      },
      {
        type: "paragraph",
        text: "This creates a clearer picture of both direct competitors and emerging challengers.",
      },
    ],
  },
  {
    heading: "Comparing Competitive Positioning",
    blocks: [
      {
        type: "paragraph",
        text: "Different companies often compete on very different strengths.",
      },
      {
        type: "paragraph",
        text: "Some may focus on low cost, while others rely on premium positioning, service quality, strong distribution, technology, brand reputation, or local relationships.",
      },
      {
        type: "paragraph",
        text: "Competitive Landscape Analysis can assess areas such as:",
      },
      {
        type: "list",
        items: [
          "Brand strength",
          "Product differentiation",
          "Pricing",
          "Customer loyalty",
          "Distribution reach",
          "Operational efficiency",
          "Digital capabilities",
          "Innovation",
          "Local market knowledge",
          "Service quality",
        ],
      },
      {
        type: "paragraph",
        text: "Comparing these areas can reveal where competitive advantages are strongest and where gaps may exist.",
      },
    ],
  },
  {
    heading: "Tracking Strategic Moves",
    blocks: [
      {
        type: "paragraph",
        text: "Competitive positions are not static.",
      },
      {
        type: "paragraph",
        text: "Companies continually adjust their strategies through new product launches, partnerships, acquisitions, pricing changes, geographic expansion, digital investments, and changes in distribution.",
      },
      {
        type: "paragraph",
        text: "Monitoring these developments helps identify early signals of market change.",
      },
      {
        type: "paragraph",
        text: "Key activities may include tracking:",
      },
      {
        type: "list",
        items: [
          "New market entries",
          "Store or facility expansion",
          "Mergers and acquisitions",
          "Strategic partnerships",
          "Product launches",
          "Technology investment",
          "Pricing changes",
          "Recruitment trends",
          "Capital investment",
          "Changes in distribution",
        ],
      },
      {
        type: "paragraph",
        text: "These signals can provide insight into where competitors may be heading next.",
      },
    ],
  },
  {
    heading: "Evaluating Market Share and Growth Momentum",
    blocks: [
      {
        type: "paragraph",
        text: "Market share provides an important reference point, but it should be considered together with growth momentum.",
      },
      {
        type: "paragraph",
        text: "A smaller competitor may be strategically significant if it is growing quickly, gaining customers, entering new regions, or disrupting traditional business models.",
      },
      {
        type: "paragraph",
        text: "Competitive analysis can therefore compare:",
      },
      {
        type: "list",
        items: [
          "Current market position",
          "Historical growth",
          "Share gains or losses",
          "Revenue trends",
          "Customer acquisition",
          "Geographic expansion",
          "Investment activity",
          "Product portfolio growth",
        ],
      },
      {
        type: "paragraph",
        text: "This helps distinguish established leaders from fast-rising challengers.",
      },
    ],
  },
  {
    heading: "Understanding Barriers to Competition",
    blocks: [
      {
        type: "paragraph",
        text: "Competitive intensity is also influenced by how difficult it is for new players to enter or expand.",
      },
      {
        type: "paragraph",
        text: "Relevant barriers may include:",
      },
      {
        type: "list",
        items: [
          "Capital requirements",
          "Regulation",
          "Brand loyalty",
          "Access to distribution",
          "Technology",
          "Local partnerships",
          "Supply chain access",
          "Customer relationships",
          "Licensing",
          "Economies of scale",
        ],
      },
      {
        type: "paragraph",
        text: "Understanding these barriers can help determine whether an industry is likely to remain concentrated or become more competitive over time.",
      },
    ],
  },
  {
    heading: "Competitive Dynamics Across Southeast Asia",
    blocks: [
      {
        type: "paragraph",
        text: "Southeast Asia should not be viewed as one competitive market.",
      },
      {
        type: "paragraph",
        text: "A company may be a market leader in Thailand but relatively weak in Vietnam. Another may dominate Indonesia while having little presence in Malaysia or Singapore.",
      },
      {
        type: "paragraph",
        text: "Competitive Landscape Analysis therefore needs to consider both regional and country-level perspectives.",
      },
      {
        type: "paragraph",
        text: "This can include comparing:",
      },
      {
        type: "list",
        items: [
          "Market leaders by country",
          "Local versus multinational strength",
          "Country-specific pricing models",
          "Distribution differences",
          "Regulatory advantages",
          "Customer preferences",
          "Local partnerships",
          "Speed of digital adoption",
        ],
      },
      {
        type: "paragraph",
        text: "This country-level view helps explain why the same competitor may perform very differently across ASEAN markets.",
      },
    ],
  },
  {
    heading: "Identifying White Spaces and Strategic Gaps",
    blocks: [
      {
        type: "paragraph",
        text: "One of the most valuable outcomes of competitive analysis is identifying areas where competition is weaker or customer needs are not fully served.",
      },
      {
        type: "paragraph",
        text: "Potential opportunities may include:",
      },
      {
        type: "list",
        items: [
          "Underserved customer groups",
          "Geographic gaps",
          "Missing product categories",
          "Premium or value segments",
          "Weak digital offerings",
          "Limited service coverage",
          "Inefficient distribution models",
          "Unmet customer expectations",
        ],
      },
      {
        type: "paragraph",
        text: "These gaps can become important inputs for market entry, growth strategy, product development, or investment decisions.",
      },
    ],
  },
  {
    heading: "From Competitor Data to Strategic Insight",
    blocks: [
      {
        type: "paragraph",
        text: "Collecting competitor information is only the first step.",
      },
      {
        type: "paragraph",
        text: "The real value comes from interpreting what the information means for strategic decision-making.",
      },
      {
        type: "paragraph",
        text: "A strong Competitive Landscape Analysis helps answer questions such as:",
      },
      {
        type: "list",
        items: [
          "Who are the most important competitors?",
          "Which players are gaining momentum?",
          "Where are competitors strongest or weakest?",
          "Which strategies appear to be working?",
          "What areas remain underdeveloped?",
          "Where could new competition emerge?",
          "How should positioning change in response?",
        ],
      },
      {
        type: "paragraph",
        text: "Turning competitor information into these insights allows organizations to move beyond observation and make more informed strategic choices.",
      },
    ],
  },
  {
    heading: "Building a Stronger Competitive Position",
    blocks: [
      {
        type: "paragraph",
        text: "Competitive advantage depends on understanding both the market and the companies competing within it.",
      },
      {
        type: "paragraph",
        text: "By examining market structure, competitor behavior, positioning, capabilities, and strategic activity, organizations can identify where they are differentiated and where improvement may be needed.",
      },
      {
        type: "paragraph",
        text: "For businesses operating across Southeast Asia, Competitive Landscape Analysis creates a clearer view of how competition is evolving and where future opportunities may emerge.",
      },
      {
        type: "paragraph",
        text: "This provides a stronger foundation for market entry, expansion, positioning, investment, and long-term growth decisions.",
      },
    ],
  },
];

export default function CompetitiveLandscapeAnalysisPage() {
  const service = services.find((s) => s.slug === "competitive-benchmarking")!;

  return (
    <>
      <ServiceHero
        icon={BarChart3}
        title={service.name}
        summary={service.summary}
        image={serviceImages["competitive-benchmarking"].src}
        imageAlt={serviceImages["competitive-benchmarking"].alt}
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
