// Central content model for Sea Market Research.
// Replace these arrays with calls to your CMS (Sanity/Strapi) once it's connected —
// the shapes here match the content models in the project plan.

export type Sector = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  body: string[];
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  icon: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  body: string[];
};

export const siteName = "Sea Market Research";
export const siteTagline = "Market Intelligence for Growth Across Southeast Asia";
export const siteDescription =
  "Sea Market Research helps businesses and investors enter, grow, and win across Southeast Asia with market research, strategy, and market-entry consulting.";
export const contactEmail = "info@seamarketresearch.com";

export const sectors: Sector[] = [
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: "Stethoscope",
    summary:
      "Demand assessment, regulatory guidance, and growth planning for providers, medtech, and pharma businesses building sustainable operations in the region.",
    body: [
      "Demand assessment, regulatory guidance, and growth planning for providers, medtech, and pharma businesses building sustainable operations in the region.",
    ],
  },
  {
    slug: "consumer-retail",
    name: "Consumer & Retail",
    icon: "ShoppingBag",
    summary:
      "Expansion planning, positioning, and channel research for consumer brands and retail investors looking to grow across Southeast Asian markets.",
    body: [
      "Expansion planning, positioning, and channel research for consumer brands and retail investors looking to grow across Southeast Asian markets.",
    ],
  },
  {
    slug: "energy-renewables",
    name: "Energy & Renewables",
    icon: "Zap",
    summary:
      "Policy tracking, risk assessment, and market analysis for developers and investors navigating the region's shift toward renewable and low-carbon energy.",
    body: [
      "Policy tracking, risk assessment, and market analysis for developers and investors navigating the region's shift toward renewable and low-carbon energy.",
    ],
  },
  {
    slug: "automotive-mobility",
    name: "Automotive & Mobility",
    icon: "Car",
    summary:
      "Supplier mapping, penetration studies, and supply-chain research for automotive and mobility businesses adapting to electrification and localization trends.",
    body: [
      "Supplier mapping, penetration studies, and supply-chain research for automotive and mobility businesses adapting to electrification and localization trends.",
    ],
  },
  {
    slug: "industrials-manufacturing",
    name: "Industrials & Manufacturing",
    icon: "Factory",
    summary:
      "Efficiency reviews, footprint planning, and performance benchmarking for manufacturers looking to strengthen operations and resilience across the region.",
    body: [
      "Efficiency reviews, footprint planning, and performance benchmarking for manufacturers looking to strengthen operations and resilience across the region.",
    ],
  },
  {
    slug: "technology-media-telecom",
    name: "Technology, Media & Telecommunications",
    icon: "RadioTower",
    summary:
      "Digital market entry, ecosystem analysis, and competitive research for technology and telecom players scaling across fast-growing regional markets.",
    body: [
      "Digital market entry, ecosystem analysis, and competitive research for technology and telecom players scaling across fast-growing regional markets.",
    ],
  },
];

// Slugs of services that have their own dedicated long-form page instead of
// using the shared /services/[slug] detail template. Referenced everywhere a
// service links out (services grid, header/footer nav, homepage) via
// `serviceHref` below, so adding a new dedicated page only means updating
// this one map.
export const dedicatedServicePages: Record<string, string> = {
  "market-research": "/services/market-intelligence",
  "strategic-planning": "/services/growth-strategy",
  "market-entry-strategy": "/services/market-entry-planning",
  "mergers-and-acquisitions": "/services/investment-acquisition-support",
  "value-chain-analysis": "/services/value-chain-assessment",
  "competitive-benchmarking": "/services/competitive-landscape-analysis",
  "distribution-strategic-partnership": "/services/partner-channel-development",
  "consumer-behavior-analysis": "/services/customer-demand-insights",
};

export function serviceHref(slug: string): string {
  return dedicatedServicePages[slug] ?? `/services/${slug}`;
}

export const services: Service[] = [
  {
    slug: "market-research",
    name: "Market Intelligence",
    icon: "Search",
    summary:
      "Gain a clearer view of market size, customer demand, industry trends, competitive conditions, and emerging opportunities across Southeast Asia.",
    body: [
      "We combine primary research (interviews, surveys, expert panels) with desk research and proprietary data to answer the questions that matter most before you commit resources to a market.",
      "Deliverables typically include market sizing, demand drivers, competitive landscape, regulatory overview, and a clear set of strategic implications.",
    ],
  },
  {
    slug: "strategic-planning",
    name: "Growth Strategy",
    icon: "Compass",
    summary:
      "Turn market insights into practical priorities by identifying where to focus, how to allocate resources, and which opportunities offer the strongest potential for growth.",
    body: [
      "We work with leadership teams to translate market insight into a prioritized growth plan — which markets, which segments, and in what sequence.",
      "Our approach balances ambition with execution realism, factoring in organizational capacity, capital constraints, and local operating conditions.",
    ],
  },
  {
    slug: "market-entry-strategy",
    name: "Market Entry Planning",
    icon: "MapPin",
    summary:
      "Evaluate market attractiveness, entry barriers, customer expectations, local conditions, and routes to market before expanding into a new country.",
    body: [
      "Entering a new Southeast Asian market means navigating a different regulatory regime, competitive set, and go-to-market model each time.",
      "We help you choose the right entry mode (direct, joint venture, distributor, or acquisition), size the initial investment, and build a phased launch plan.",
    ],
  },
  {
    slug: "mergers-and-acquisitions",
    name: "Investment & Acquisition Support",
    icon: "Handshake",
    summary:
      "Assess potential opportunities, targets, market fit, and strategic value to support better-informed investment, partnership, and acquisition decisions.",
    body: [
      "We support commercial due diligence, target screening, and post-merger integration planning for buyers and investors active in the region.",
      "Our sector teams bring the local market context needed to stress-test growth assumptions behind a deal thesis.",
    ],
  },
  {
    slug: "value-chain-analysis",
    name: "Value Chain Assessment",
    icon: "Link",
    summary:
      "Examine suppliers, operations, distribution, customers, and other parts of the value chain to identify gaps, inefficiencies, and opportunities for improvement.",
    body: [
      "We map the full value chain — from raw materials or manufacturing through distribution to end customer — to identify where value is created, captured, and at risk.",
      "This work often surfaces opportunities for margin improvement, vertical integration, or new partnership models.",
    ],
  },
  {
    slug: "competitive-benchmarking",
    name: "Competitive Landscape Analysis",
    icon: "BarChart3",
    summary:
      "Understand how key competitors are positioned, how they operate, and where your business can differentiate, strengthen its offer, or improve market performance.",
    body: [
      "We benchmark pricing, product portfolio, channel strategy, and market share against direct and indirect competitors across your target markets.",
      "The output is a clear view of where you're differentiated, where you're exposed, and where the gaps are worth closing.",
    ],
  },
  {
    slug: "distribution-strategic-partnership",
    name: "Partner & Channel Development",
    icon: "Network",
    summary:
      "Identify suitable distributors, commercial partners, and market channels that can help strengthen local presence and support expansion across the region.",
    body: [
      "Distributor and partner selection is one of the highest-stakes decisions in a Southeast Asia market entry — and one of the hardest to reverse.",
      "We identify, shortlist, and assess potential distribution and joint-venture partners against your commercial and operational requirements.",
    ],
  },
  {
    slug: "consumer-behavior-analysis",
    name: "Customer & Demand Insights",
    icon: "Users",
    summary:
      "Explore customer needs, purchasing behaviour, preferences, decision drivers, and changing expectations to support product, marketing, and commercial decisions.",
    body: [
      "Consumer preferences, price sensitivity, and channel behavior can differ significantly even between neighboring Southeast Asian markets.",
      "We run qualitative and quantitative consumer research to inform product positioning, pricing, and go-to-market decisions.",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "building-materials-market-entry",
    title: "Market Entry Roadmap for a Building Materials Manufacturer",
    sector: "Construction",
    summary:
      "Sized demand across three markets and identified the distribution partners that anchored a phased regional launch.",
    body: [
      "A global building materials manufacturer wanted to assess entry into Vietnam, Indonesia, and the Philippines but lacked reliable local demand data.",
      "We ran a market sizing and competitive mapping exercise across all three markets, followed by distributor shortlisting and commercial due diligence.",
      "The client entered Vietnam first, using our recommended distribution partner, with a phased plan to enter the remaining two markets within 18 months.",
    ],
  },
  {
    slug: "diagnostics-portfolio-expansion",
    title: "Regional Expansion Plan for a Diagnostics Portfolio",
    sector: "Healthcare",
    summary:
      "Mapped the regulatory and reimbursement landscape across five markets to sequence a diagnostics product launch.",
    body: [
      "A diagnostics company needed to prioritize which Southeast Asian markets to pursue first for a new test portfolio.",
      "We assessed registration timelines, reimbursement pathways, and hospital procurement models across five markets, and benchmarked existing competitor footprints.",
      "Our recommended sequencing became the basis for the company's three-year regional launch plan.",
    ],
  },
  {
    slug: "renewables-feasibility-study",
    title: "Feasibility Study for a Renewable Energy Developer",
    sector: "Energy",
    summary:
      "Assessed project pipeline, policy incentives, and partnership requirements ahead of a solar developer's regional entry.",
    body: [
      "A renewable energy developer was evaluating whether to enter the Southeast Asian solar market and, if so, where to start.",
      "We analyzed policy frameworks, land and grid connection requirements, and local partnership norms across four markets.",
      "The resulting feasibility study directly informed the developer's decision to prioritize a single market for its first project.",
    ],
  },
  {
    slug: "last-mile-logistics-partner-selection",
    title: "Last-Mile Partner Selection for an E-commerce Logistics Provider",
    sector: "Supply Chain & Logistics",
    summary:
      "Shortlisted and evaluated last-mile delivery partners to support rapid e-commerce order growth.",
    body: [
      "A logistics provider needed to scale last-mile delivery capacity quickly to keep pace with e-commerce order volume.",
      "We benchmarked available last-mile partners on coverage, cost, and reliability, and ran a structured evaluation and negotiation support process.",
      "The client signed agreements with two regional partners within the study's recommended timeline.",
    ],
  },
  {
    slug: "ev-charging-infrastructure-study",
    title: "EV Charging Infrastructure Feasibility Study",
    sector: "Transport & Mobility",
    summary:
      "Evaluated demand, site economics, and regulatory requirements for an EV charging network operator.",
    body: [
      "An EV charging network operator wanted to understand where and how fast to expand across two major Southeast Asian cities.",
      "We modeled vehicle adoption forecasts, assessed candidate site economics, and reviewed permitting and grid-connection requirements.",
      "The findings shaped the operator's first 100-site rollout plan.",
    ],
  },
  {
    slug: "consumer-goods-growth-strategy",
    title: "Growth Strategy for a Consumer Goods Entrant",
    sector: "Consumer Goods",
    summary:
      "Combined consumer research and channel analysis to guide a multi-market consumer goods launch.",
    body: [
      "A consumer goods company sought to understand purchasing behavior and channel dynamics before launching a new product line regionally.",
      "We ran quantitative consumer surveys and channel mapping across three markets to identify the highest-potential launch sequence and retail mix.",
      "The client's regional launch plan was built directly around our segment prioritization and channel recommendations.",
    ],
  },
];

export const clientIndustries = [
  "Healthcare",
  "Energy",
  "Automotive",
  "Consumer Goods",
  "Industrials",
  "Financial Services",
];
