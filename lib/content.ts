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

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  body: string[];
};

export type Whitepaper = {
  slug: string;
  title: string;
  summary: string;
  gated: boolean;
};

export const siteName = "Sea Market Research";
export const siteTagline = "Market Intelligence for Growth Across Southeast Asia";
export const siteDescription =
  "Sea Market Research helps businesses and investors enter, grow, and win across Southeast Asia with market research, strategy, and market-entry consulting.";
export const contactEmail = "info@seamarketresearch.com";

export const sectors: Sector[] = [
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    summary:
      "Demand forecasting, competitor mapping, and market entry for building materials, infrastructure, and real estate players.",
    body: [
      "Southeast Asia's construction sector is being reshaped by urban migration, infrastructure spending, and a wave of foreign direct investment into industrial parks and transport corridors.",
      "We help materials manufacturers, contractors, and infrastructure investors size demand by country, map the competitive and regulatory landscape, and identify the distribution or joint-venture partners best positioned to support market entry.",
      "Typical engagements cover market sizing, competitor benchmarking, channel mapping, and feasibility studies ahead of a plant, distribution hub, or regional office launch.",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "Stethoscope",
    summary:
      "Market access, competitive intelligence, and demand modeling for medical devices, diagnostics, and pharma companies.",
    body: [
      "Rising incomes, aging populations in some markets, and expanding insurance coverage are driving healthcare spending across the region — but registration pathways, procurement models, and channel structures vary sharply by country.",
      "We support medical device, diagnostics, and pharmaceutical companies with regulatory and reimbursement landscaping, hospital and distributor mapping, and competitive intelligence to guide launch sequencing.",
      "Recent work includes multi-country market sizing for a diagnostics portfolio and distributor due diligence ahead of a regional exclusivity agreement.",
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    icon: "Zap",
    summary:
      "Research and strategy support for renewable energy, oil & gas, and power infrastructure players entering the region.",
    body: [
      "The region's energy transition is creating opportunity across solar, wind, grid infrastructure, and energy storage, alongside continued investment in conventional power and gas infrastructure.",
      "We help developers, equipment suppliers, and investors assess project pipelines, policy and incentive frameworks, and local partnership requirements market by market.",
      "Engagements range from feasibility studies for renewable project developers to competitive benchmarking for equipment and EPC suppliers.",
    ],
  },
  {
    slug: "logistics",
    name: "Supply Chain & Logistics",
    icon: "Truck",
    summary:
      "Network design, partner identification, and demand analysis for logistics, warehousing, and freight operators.",
    body: [
      "E-commerce growth and manufacturing relocation into Southeast Asia are driving demand for warehousing, last-mile delivery, and freight capacity — with infrastructure maturity varying widely between markets.",
      "We support 3PLs, freight operators, and shippers with network and site assessments, competitive benchmarking, and partner or M&A target identification.",
      "Our work has covered warehousing feasibility studies, last-mile partner shortlisting, and cross-border freight corridor analysis.",
    ],
  },
  {
    slug: "transport-mobility",
    name: "Transport & Mobility",
    icon: "Car",
    summary:
      "Market entry and competitive research for automotive, mobility platforms, and transport infrastructure.",
    body: [
      "Vehicle ownership growth, ride-hailing adoption, and early EV infrastructure investment are transforming mobility across the region, alongside continued expansion of mass transit in major cities.",
      "We help automotive OEMs, mobility platforms, and infrastructure providers understand demand drivers, competitive positioning, and regulatory requirements by market.",
      "Recent projects include EV charging infrastructure feasibility and competitive benchmarking for a regional mobility platform entrant.",
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

export const articles: Article[] = [
  {
    slug: "multi-country-research-playbook",
    title: "A Playbook for Multi-Country Market Research in Southeast Asia",
    excerpt:
      "Running research across several Southeast Asian markets at once raises different challenges than a single-country study. Here's how to plan for them.",
    date: "2026-06-12",
    author: "Sea Market Research Team",
    body: [
      "Multi-country research projects in Southeast Asia fail most often not because of bad analysis, but because of poor planning around language, sample availability, and comparability across markets.",
      "Before fieldwork begins, define a common research framework that still allows for market-specific nuance — a rigid single questionnaire rarely works across culturally and linguistically diverse markets.",
      "Build in extra time for translation review and local expert validation; a week saved at the design stage is often lost several times over during analysis.",
    ],
  },
  {
    slug: "panel-data-quality",
    title: "Protecting Data Quality in Online Panel Research",
    excerpt:
      "Online panels are efficient, but data quality issues — including bots and fraudulent respondents — are a growing risk in the region.",
    date: "2026-05-03",
    author: "Sea Market Research Team",
    body: [
      "Online research panels offer speed and reach, but Southeast Asia has seen a rise in low-quality and fraudulent panel responses that can quietly distort findings.",
      "We recommend layering attention checks, response-time screening, and post-fieldwork data forensics on top of standard panel provider quality controls.",
      "Treat panel vendor quality claims as a starting point, not a guarantee — independent validation catches issues vendors miss.",
    ],
  },
  {
    slug: "diy-vs-full-service-research",
    title: "DIY vs. Full-Service Market Research: Making the Right Call",
    excerpt:
      "Self-serve research tools are more capable than ever. Here's how to decide when they're enough — and when they're not.",
    date: "2026-03-21",
    author: "Sea Market Research Team",
    body: [
      "DIY research tools are a good fit for quick directional questions with straightforward sampling needs.",
      "Full-service research earns its cost when the decision at stake is high-consequence, the target population is hard to reach, or cross-market comparability matters.",
      "Many of our clients use a blend: DIY tools for ongoing tracking, full-service studies for major market entry or investment decisions.",
    ],
  },
  {
    slug: "agile-research-for-brands",
    title: "Agile Market Research for Southeast Asian Brands",
    excerpt:
      "Faster decision cycles call for research methods that deliver clear answers without sacrificing rigor.",
    date: "2026-02-08",
    author: "Sea Market Research Team",
    body: [
      "Agile research doesn't mean cutting corners — it means scoping tightly around the specific decision a team needs to make.",
      "We favor short, focused research sprints tied to a single decision, with a clear go/no-go or choose-between-options framing.",
      "This approach has helped consumer brands move from question to decision in weeks rather than months.",
    ],
  },
];

export const whitepapers: Whitepaper[] = [
  {
    slug: "southeast-asia-consumer-outlook",
    title: "The Southeast Asia Consumer Outlook",
    summary:
      "A look at shifting consumer priorities, digital adoption, and channel behavior across the region's largest markets.",
    gated: true,
  },
  {
    slug: "market-entry-readiness-checklist",
    title: "Market Entry Readiness: A Practical Checklist",
    summary:
      "A structured checklist covering regulatory, commercial, and operational readiness before entering a new Southeast Asian market.",
    gated: true,
  },
];

export const clientIndustries = [
  "Construction",
  "Healthcare",
  "Energy",
  "Logistics",
  "Automotive",
  "Consumer Goods",
  "Industrials",
  "Financial Services",
];
