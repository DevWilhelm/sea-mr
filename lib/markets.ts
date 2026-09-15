// Country-market content model for Sea Market Research.
// Mirrors the shape of lib/content.ts: static data now, swappable for CMS
// calls later without touching the page template in app/markets/[slug].
//
// Adding a new market (e.g. Cambodia) means adding one entry to `markets`
// below — the route, metadata, and every page section are generated from
// this data via app/markets/[slug]/page.tsx.
//
// Note on schema: the brief's suggested fields `pageTitle` and
// `businessEnvironment` were folded into `countryName` (used for nav/
// breadcrumb labels) and the `overview` copy / "Market Entry Conditions"
// card respectively, since the rendered page has no separate slot for
// either — keeping them as distinct unused fields would just be dead data.

import { sectors, services, serviceHref, type Sector, type Service } from "@/lib/content";

export type MarketCard = {
  title: string;
  description: string;
};

export type Market = {
  slug: string;
  countryName: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  /** Page <title>; the root layout's title template appends " | Sea Market Research". */
  metaTitle: string;
  metaDescription: string;
  overviewHeading: string;
  overview: string[];
  keyMarketCharacteristics: MarketCard[];
  growthDrivers: MarketCard[];
  /** Slugs into lib/content.ts `sectors` — kept as references, not duplicated data. */
  prioritySectorSlugs: string[];
  considerationsHeading: string;
  marketResearchNeeds: string[];
  /** Slugs into lib/content.ts `services` — kept as references, not duplicated data. */
  relevantServiceSlugs: string[];
  ctaHeading: string;
  ctaDescription: string;
};

export const markets: Market[] = [
  {
    slug: "singapore",
    countryName: "Singapore",
    eyebrow: "Singapore Market Research",
    heroTitle: "Market Research and Business Insights in Singapore",
    heroDescription:
      "Singapore operates as Southeast Asia's leading business and financial hub, and its role as a regional headquarters location shapes how companies approach the wider region. Understanding local market conditions here is often the first step in a broader Southeast Asia strategy.",
    metaTitle: "Singapore Market Research & Business Insights",
    metaDescription:
      "Market research, competitive intelligence, and growth strategy insights for businesses evaluating or operating in Singapore's regional hub economy.",
    overviewHeading: "Understanding the Singapore Market",
    overview: [
      "Singapore's economy is built around financial and professional services, technology, and advanced manufacturing, supported by a transparent regulatory environment and strong physical and digital infrastructure. Many multinational organizations use Singapore as a regional headquarters, which means decisions made here frequently extend beyond the domestic market.",
      "The domestic consumer base is comparatively small but highly sophisticated, with purchasing decisions shaped by quality, reliability, and service standards that are often higher than elsewhere in the region. Competitive intensity is high across most sectors, and market entrants typically face established local and international players operating at a mature level.",
      "Because so many companies treat Singapore as a launch point for regional expansion, market assessments here often need to account for how a Singapore-based strategy will translate into neighboring markets with different regulatory, competitive, and consumer conditions.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description:
          "A diversified, services-led economy anchored by finance, technology, and trade, with a stable regulatory framework that supports long-term planning.",
      },
      {
        title: "Consumer & Demand Trends",
        description:
          "A smaller but affluent consumer base with high expectations around quality, digital convenience, and service consistency.",
      },
      {
        title: "Competitive Environment",
        description:
          "Dense competition from established multinational and regional players, with differentiation often built on service quality and specialization rather than price.",
      },
      {
        title: "Market Entry Conditions",
        description:
          "Straightforward company formation and clear regulation, though the country's cost base and competitive intensity raise the bar for market entry.",
      },
    ],
    growthDrivers: [
      {
        title: "Regional Headquarters Activity",
        description: "Continued use of Singapore as a base for regional management, finance, and business development functions.",
      },
      {
        title: "Technology & Digital Services",
        description: "Growth in fintech, enterprise software, and digital infrastructure investment.",
      },
      {
        title: "Trade & Connectivity",
        description: "Singapore's position as a logistics and trade gateway supports demand for supply chain and distribution services.",
      },
      {
        title: "Healthcare & Aging Population",
        description: "An aging population is increasing demand for healthcare services, medtech, and related infrastructure.",
      },
    ],
    prioritySectorSlugs: ["technology-media-telecom", "healthcare-life-sciences", "consumer-retail"],
    considerationsHeading: "Key Considerations When Evaluating the Singapore Market",
    marketResearchNeeds: [
      "Market entry decisions in Singapore often require a clear understanding of how the domestic market differs from its function as a regional base — a strategy built primarily around domestic scale can look very different from one designed to support wider Southeast Asia coverage.",
      "Competitive positioning is particularly important given the concentration of established players; pricing, service quality, and customer expectations tend to be benchmarked against mature international standards rather than emerging-market norms.",
      "Distribution and partnership structures are generally efficient and well established, though this can also mean limited differentiation opportunities for new entrants without a distinct value proposition.",
    ],
    relevantServiceSlugs: ["market-research", "competitive-benchmarking", "mergers-and-acquisitions", "strategic-planning"],
    ctaHeading: "Exploring Opportunities in Singapore?",
    ctaDescription:
      "Get in touch to discuss market research, competitive analysis, or regional strategy support for Singapore and the wider Southeast Asia region.",
  },
  {
    slug: "malaysia",
    countryName: "Malaysia",
    eyebrow: "Malaysia Market Research",
    heroTitle: "Market Research and Business Insights in Malaysia",
    heroDescription:
      "Malaysia combines a diversified economy with established manufacturing capacity and growing digital and consumer sectors. Its position within Southeast Asia's trade networks makes local market context an important input into regional planning.",
    metaTitle: "Malaysia Market Research & Business Insights",
    metaDescription:
      "Market research and market entry insights for businesses assessing Malaysia's manufacturing, energy, digital, and consumer sectors.",
    overviewHeading: "Understanding the Malaysia Market",
    overview: [
      "Malaysia's economy spans electronics manufacturing, energy, palm oil and agriculture, and a growing services sector, supported by relatively developed transport and industrial infrastructure. Multiple economic zones and industrial parks give manufacturers a range of options depending on cost, supply chain, and market access priorities.",
      "The consumer market includes a sizeable urban middle class alongside more price-sensitive segments outside major cities, and purchasing behavior varies meaningfully between states and between urban and rural areas. Ethnic and religious diversity also shapes product positioning, marketing, and distribution decisions in ways that a single national approach can miss.",
      "Regulatory requirements, including sector-specific foreign ownership rules and halal certification for many consumer products, add a layer of complexity that varies by industry and is worth assessing early in a market entry process.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description:
          "A diversified economy built on manufacturing, energy, and trade, with well-developed industrial infrastructure and multiple special economic zones.",
      },
      {
        title: "Consumer & Demand Trends",
        description:
          "A growing urban middle class alongside price-sensitive segments, with demand patterns that vary by region and demographic group.",
      },
      {
        title: "Competitive Environment",
        description:
          "A mix of established domestic conglomerates, regional players, and multinational entrants, with competitive intensity varying significantly by sector.",
      },
      {
        title: "Market Entry Conditions",
        description:
          "Generally accessible market entry, though foreign ownership limits, halal certification, and state-level variation require sector-specific review.",
      },
    ],
    growthDrivers: [
      {
        title: "Electronics & Manufacturing",
        description: "Continued investment in electronics, semiconductors, and advanced manufacturing capacity.",
      },
      {
        title: "Digital Economy",
        description: "Expanding e-commerce, fintech, and digital services adoption among urban consumers.",
      },
      {
        title: "Energy Transition",
        description: "Growing investment in renewable energy and energy efficiency alongside established oil and gas activity.",
      },
      {
        title: "Trade Connectivity",
        description: "Malaysia's position within regional supply chains continues to support manufacturing and logistics demand.",
      },
    ],
    prioritySectorSlugs: ["industrials-manufacturing", "technology-media-telecom", "energy-renewables"],
    considerationsHeading: "Key Considerations When Evaluating the Malaysia Market",
    marketResearchNeeds: [
      "Distribution structures, customer expectations, and regulatory requirements can differ significantly across industries and states in Malaysia, making a single national assumption risky for planning purposes.",
      "Foreign ownership restrictions apply to specific sectors and should be reviewed early, alongside halal certification requirements for many consumer and food-related products.",
      "Partner and distributor selection is often central to market entry, particularly outside the main urban centers, where local relationships and market knowledge carry significant weight.",
    ],
    relevantServiceSlugs: ["market-research", "market-entry-strategy", "distribution-strategic-partnership", "value-chain-analysis"],
    ctaHeading: "Exploring Opportunities in Malaysia?",
    ctaDescription:
      "Get in touch to discuss market entry, distribution strategy, or competitive research tailored to Malaysia's regional and state-level market conditions.",
  },
  {
    slug: "thailand",
    countryName: "Thailand",
    eyebrow: "Thailand Market Research",
    heroTitle: "Market Research and Business Insights in Thailand",
    heroDescription:
      "Thailand remains one of Southeast Asia's largest consumer markets and a long-established manufacturing base, particularly for automotive and related supply chains. Its role as a regional trade and logistics center makes country-specific market understanding important for both consumer and industrial businesses.",
    metaTitle: "Thailand Market Research & Business Insights",
    metaDescription:
      "Market research and business insights covering Thailand's consumer, automotive, tourism, and manufacturing sectors for companies evaluating the market.",
    overviewHeading: "Understanding the Thailand Market",
    overview: [
      "Thailand's economy combines a large domestic consumer base with a mature manufacturing sector, most notably in automotive assembly and parts production, alongside significant food and agricultural processing industries. Bangkok functions as the primary commercial center, though secondary cities and industrial estates play an increasingly important role in manufacturing and distribution.",
      "Consumer behavior reflects a mix of price sensitivity and brand awareness, with retail and e-commerce channels both playing meaningful roles depending on category and region. Tourism remains an important driver of demand in hospitality, retail, and related services, adding a layer of seasonal and geographic variation to market conditions.",
      "Competition tends to be well established in consumer categories, with strong local retail groups and long-standing distributor networks. Businesses evaluating Thailand generally need to understand how these existing channel relationships affect market access alongside regulatory and import requirements.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description: "A large, diversified economy anchored by automotive manufacturing, agriculture and food processing, and tourism.",
      },
      {
        title: "Consumer & Demand Trends",
        description: "A sizeable consumer base with a mix of price-sensitive and brand-conscious segments, and growing e-commerce adoption.",
      },
      {
        title: "Competitive Environment",
        description: "Established local retail and distribution groups alongside long-standing multinational presence in key categories.",
      },
      {
        title: "Market Entry Conditions",
        description: "Structured foreign business regulations and import requirements that vary by sector and often shape the choice of entry mode.",
      },
    ],
    growthDrivers: [
      {
        title: "Automotive & Manufacturing",
        description: "Continued investment in automotive assembly, parts manufacturing, and related supply chains.",
      },
      {
        title: "Tourism Recovery",
        description: "Ongoing recovery and growth in inbound tourism supporting hospitality, retail, and services demand.",
      },
      {
        title: "Healthcare & Medical Services",
        description: "Rising demand for healthcare services and medical tourism infrastructure.",
      },
      {
        title: "Infrastructure Investment",
        description: "Transport and logistics infrastructure upgrades supporting distribution across the country and the wider region.",
      },
    ],
    prioritySectorSlugs: ["automotive-mobility", "healthcare-life-sciences", "consumer-retail"],
    considerationsHeading: "Key Considerations When Evaluating the Thailand Market",
    marketResearchNeeds: [
      "Market entry decisions often require a clear understanding of how existing distributor and retail relationships shape access to consumers, particularly outside Bangkok's central business districts.",
      "Pricing and positioning need to account for a consumer base that spans both price-sensitive and brand-conscious segments, often within the same product category.",
      "Regulatory requirements for foreign business activity, along with import and licensing procedures, vary by sector and are generally worth reviewing before committing to a specific entry mode.",
    ],
    relevantServiceSlugs: ["market-research", "consumer-behavior-analysis", "distribution-strategic-partnership", "competitive-benchmarking"],
    ctaHeading: "Exploring Opportunities in Thailand?",
    ctaDescription:
      "Get in touch to discuss market research, consumer insights, or entry strategy support for Thailand's consumer and manufacturing sectors.",
  },
  {
    slug: "vietnam",
    countryName: "Vietnam",
    eyebrow: "Vietnam Market Research",
    heroTitle: "Market Research and Business Insights in Vietnam",
    heroDescription:
      "Vietnam has become one of Southeast Asia's fastest-growing manufacturing and investment destinations, supported by a young population and expanding consumer demand. Rapid change in this market means research conducted even a year or two ago can quickly become outdated.",
    metaTitle: "Vietnam Market Research & Business Insights",
    metaDescription:
      "Market entry and business insights for Vietnam's manufacturing, consumer, and digital sectors, covering foreign investment and distribution conditions.",
    overviewHeading: "Understanding the Vietnam Market",
    overview: [
      "Vietnam's economy has shifted significantly toward export-oriented manufacturing, particularly in electronics, textiles, and increasingly higher-value production, supported by sustained foreign direct investment and trade agreements with major economies. Ho Chi Minh City and Hanoi anchor distinct northern and southern commercial ecosystems, each with its own supplier networks and business culture.",
      "Consumer demand is being reshaped by a young, increasingly urban population with rising incomes and fast-growing smartphone and internet penetration. Distribution has historically relied on dense networks of traditional retail and wholesale channels, though modern trade and e-commerce are expanding quickly, creating a transitional retail landscape that varies by city and category.",
      "Regulatory and administrative processes continue to evolve, and requirements can differ between provinces, making local execution capability an important factor in how smoothly a market entry or expansion proceeds.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description: "A fast-growing, export-oriented manufacturing economy supported by sustained foreign direct investment and expanding trade agreements.",
      },
      {
        title: "Consumer & Demand Trends",
        description: "A young, urbanizing population with rising incomes and rapidly increasing digital and e-commerce adoption.",
      },
      {
        title: "Competitive Environment",
        description: "A mix of established multinational manufacturers, emerging local brands, and an evolving modern retail sector.",
      },
      {
        title: "Market Entry Conditions",
        description: "Administrative requirements that continue to evolve and can vary by province, making local execution an important consideration.",
      },
    ],
    growthDrivers: [
      {
        title: "Manufacturing Expansion",
        description: "Continued relocation and expansion of electronics, textile, and other export-oriented manufacturing.",
      },
      {
        title: "Foreign Direct Investment",
        description: "Sustained inbound investment supported by trade agreements and a competitive manufacturing cost base.",
      },
      {
        title: "Digital & E-commerce Growth",
        description: "Rapid growth in internet and smartphone penetration driving e-commerce and digital services adoption.",
      },
      {
        title: "Infrastructure Development",
        description: "Ongoing investment in transport, industrial parks, and logistics infrastructure.",
      },
    ],
    prioritySectorSlugs: ["industrials-manufacturing", "technology-media-telecom", "consumer-retail"],
    considerationsHeading: "Key Considerations When Evaluating the Vietnam Market",
    marketResearchNeeds: [
      "Market size and customer segment estimates can shift quickly in Vietnam given the pace of urban income growth, making recent, market-specific data important for planning purposes.",
      "Distribution structures are in transition between traditional trade and modern retail or e-commerce, and the balance between these channels varies significantly by product category and city.",
      "Administrative and regulatory requirements can differ between provinces, so market entry planning often benefits from understanding local execution conditions rather than relying solely on national-level rules.",
    ],
    relevantServiceSlugs: ["market-entry-strategy", "value-chain-analysis", "distribution-strategic-partnership", "market-research"],
    ctaHeading: "Exploring Opportunities in Vietnam?",
    ctaDescription: "Get in touch to discuss market entry planning, supply chain research, or distribution strategy for Vietnam's fast-changing market.",
  },
  {
    slug: "philippines",
    countryName: "Philippines",
    eyebrow: "Philippines Market Research",
    heroTitle: "Market Research and Business Insights in the Philippines",
    heroDescription:
      "The Philippines combines a large, young population with fast-growing digital adoption and a services-oriented economy. Its geography as an archipelago adds a distribution dimension that businesses need to plan around from the outset.",
    metaTitle: "Philippines Market Research & Business Insights",
    metaDescription:
      "Market research and entry insights for the Philippines, covering consumer behavior, digital adoption, and distribution across its island geography.",
    overviewHeading: "Understanding the Philippines Market",
    overview: [
      "The Philippine economy is heavily services-oriented, with business process outsourcing, telecommunications, and financial services playing a significant role alongside a growing consumer sector. Manila remains the dominant commercial center, though secondary cities such as Cebu and Davao represent distinct regional markets with their own dynamics.",
      "Consumer demand is driven by a large, young population and rapidly increasing smartphone and internet usage, which has accelerated e-commerce and digital financial services adoption in recent years. At the same time, physical retail and distribution remain important, particularly outside major urban centers.",
      "The country's archipelagic geography creates genuine distribution complexity — reaching customers across multiple islands typically requires a different logistics and channel approach than a single-city or mainland market, and this affects both cost and market coverage decisions.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description: "A services-led economy supported by business process outsourcing, telecommunications, and a growing consumer sector.",
      },
      {
        title: "Consumer & Demand Trends",
        description: "A large, young population with fast-growing digital adoption and increasing e-commerce and digital finance usage.",
      },
      {
        title: "Competitive Environment",
        description: "Established telecommunications and retail conglomerates alongside a growing base of digital-first entrants.",
      },
      {
        title: "Market Entry Conditions",
        description: "Foreign ownership rules apply in specific sectors, and archipelagic geography adds distribution planning considerations.",
      },
    ],
    growthDrivers: [
      {
        title: "Digital Adoption",
        description: "Continued growth in smartphone penetration, e-commerce, and digital financial services.",
      },
      {
        title: "Services & BPO Sector",
        description: "Sustained expansion of business process outsourcing and related professional services employment.",
      },
      {
        title: "Telecommunications Investment",
        description: "Ongoing investment in mobile and broadband infrastructure supporting digital growth.",
      },
      {
        title: "Healthcare Demand",
        description: "Growing demand for healthcare services and infrastructure alongside population growth.",
      },
    ],
    prioritySectorSlugs: ["technology-media-telecom", "consumer-retail", "healthcare-life-sciences"],
    considerationsHeading: "Key Considerations When Evaluating the Philippines Market",
    marketResearchNeeds: [
      "Distribution planning in the Philippines typically needs to account for the country's geographically fragmented, multi-island structure, which can significantly affect logistics cost and market coverage.",
      "Customer segments and purchasing behavior often differ meaningfully between Metro Manila and secondary cities, making regional-level analysis more useful than a single national estimate.",
      "Foreign ownership restrictions apply to select sectors and should be reviewed early, alongside an assessment of existing telecommunications and retail partners relevant to the category.",
    ],
    relevantServiceSlugs: ["consumer-behavior-analysis", "market-entry-strategy", "distribution-strategic-partnership", "market-research"],
    ctaHeading: "Exploring Opportunities in the Philippines?",
    ctaDescription: "Get in touch to discuss consumer research, distribution planning, or market entry strategy for the Philippines' island-based market structure.",
  },
  {
    slug: "indonesia",
    countryName: "Indonesia",
    eyebrow: "Indonesia Market Research",
    heroTitle: "Market Research and Business Insights in Indonesia",
    heroDescription:
      "As Southeast Asia's largest economy and most populous country, Indonesia offers substantial scale but also significant regional and regulatory variation. A national approach can easily overlook the differences that determine success in individual provinces.",
    metaTitle: "Indonesia Market Research & Business Insights",
    metaDescription:
      "Market research and strategy insights for Indonesia's consumer, digital, manufacturing, and energy sectors across its diverse regional markets.",
    overviewHeading: "Understanding the Indonesia Market",
    overview: [
      "Indonesia's economy benefits from a very large domestic consumer market, significant natural resources, and a growing manufacturing base, alongside one of the region's most active digital economies. Jakarta serves as the primary commercial and financial center, but the country's thousands of islands and dozens of major cities mean that market conditions vary considerably by region.",
      "Consumer demand spans a wide income range, from a large and growing middle class in major cities to more price-sensitive segments in secondary and rural areas, and purchasing behavior, channel preference, and even product specifications can differ by province. Digital commerce has grown rapidly, but physical and traditional retail remain significant, particularly outside Java.",
      "Regulatory and licensing requirements can also vary by region and sector, and local partnership structures often play an important role in navigating this complexity, particularly for businesses without an established presence in the country.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description: "The region's largest economy, combining natural resources, manufacturing, and one of Southeast Asia's most active digital economies.",
      },
      {
        title: "Consumer & Demand Trends",
        description: "A very large, diverse consumer base spanning a growing urban middle class and more price-sensitive regional segments.",
      },
      {
        title: "Competitive Environment",
        description: "A mix of large domestic conglomerates, well-funded digital platforms, and multinational entrants competing across categories.",
      },
      {
        title: "Market Entry Conditions",
        description: "Regulatory and licensing requirements that vary by region and sector, often requiring local partnership structures.",
      },
    ],
    growthDrivers: [
      {
        title: "Digital Economy Growth",
        description: "Continued expansion of e-commerce, fintech, and digital platforms across a large mobile-first population.",
      },
      {
        title: "Manufacturing & Resources",
        description: "Ongoing investment in manufacturing capacity and natural resource processing.",
      },
      {
        title: "Middle-Class Consumption",
        description: "A growing urban middle class driving demand across consumer, healthcare, and retail categories.",
      },
      {
        title: "Energy Transition",
        description: "Increasing investment in renewable energy alongside continued resource-sector activity.",
      },
    ],
    prioritySectorSlugs: ["consumer-retail", "technology-media-telecom", "energy-renewables"],
    considerationsHeading: "Key Considerations When Evaluating the Indonesia Market",
    marketResearchNeeds: [
      "Market size and customer segment estimates for Indonesia are generally more useful when built at a provincial or city level, given how significantly conditions vary across the country's regions.",
      "Distribution structures differ between Java's major urban centers and other islands, and pricing, packaging, and channel strategy often need to be adapted accordingly.",
      "Licensing and regulatory requirements can vary by sector and region, and local partnerships are frequently a practical requirement for navigating this complexity rather than an optional consideration.",
    ],
    relevantServiceSlugs: ["market-entry-strategy", "distribution-strategic-partnership", "value-chain-analysis", "market-research"],
    ctaHeading: "Exploring Opportunities in Indonesia?",
    ctaDescription: "Get in touch to discuss market sizing, regional research, or entry strategy support for Indonesia's large and varied market.",
  },
  {
    slug: "myanmar",
    countryName: "Myanmar",
    eyebrow: "Myanmar Market Research",
    heroTitle: "Market Research and Business Insights in Myanmar",
    heroDescription:
      "Myanmar presents a distinct set of operating conditions within Southeast Asia, shaped by an evolving regulatory environment and variable market accessibility. Businesses considering this market typically place a strong emphasis on up-to-date, locally grounded information before making decisions.",
    metaTitle: "Myanmar Market Research & Business Insights",
    metaDescription:
      "Careful, up-to-date market research and business insights for companies evaluating Myanmar's evolving operating and regulatory environment.",
    overviewHeading: "Understanding the Myanmar Market",
    overview: [
      "Myanmar's economy includes agriculture, consumer goods, and a number of selected industrial sectors, with business activity concentrated primarily around Yangon and a smaller number of secondary commercial centers. Operating conditions have evolved considerably in recent years, and current, locally verified information is particularly important given how quickly circumstances can change.",
      "Distribution networks and business practices often rely heavily on established local relationships, and information about market conditions can be less consistently available than in neighboring markets, which adds to the importance of careful, ground-level assessment.",
      "Regulatory and operating requirements can be complex and subject to change, and businesses generally benefit from a cautious, well-informed approach that accounts for this complexity rather than assumptions carried over from other Southeast Asian markets.",
    ],
    keyMarketCharacteristics: [
      {
        title: "Economic Landscape",
        description: "An economy centered on agriculture, consumer goods, and selected industrial sectors, with business activity concentrated in a small number of commercial centers.",
      },
      {
        title: "Consumer & Demand Trends",
        description: "Consumer markets shaped by local purchasing patterns and price sensitivity, with meaningful differences between urban and rural areas.",
      },
      {
        title: "Competitive Environment",
        description: "A market where established local relationships and distribution networks often carry significant weight relative to newer entrants.",
      },
      {
        title: "Market Entry Conditions",
        description: "A regulatory and operating environment that can be complex and subject to change, warranting careful, current due diligence.",
      },
    ],
    growthDrivers: [
      {
        title: "Agriculture & Consumer Goods",
        description: "Continued activity in agricultural production and domestic consumer goods markets.",
      },
      {
        title: "Infrastructure Development",
        description: "Gradual infrastructure investment affecting transport, logistics, and market accessibility.",
      },
      {
        title: "Selected Industrial Sectors",
        description: "Specific industrial sectors with ongoing, though variable, levels of activity and investment.",
      },
    ],
    prioritySectorSlugs: ["consumer-retail", "industrials-manufacturing", "energy-renewables"],
    considerationsHeading: "Key Considerations When Evaluating the Myanmar Market",
    marketResearchNeeds: [
      "Market entry decisions in Myanmar generally require particular care around the currency and reliability of available information, given how quickly local conditions can change.",
      "Distribution structures often depend on established local relationships, and identifying credible partners is typically a more significant undertaking than in more mature regional markets.",
      "Regulatory and operating requirements can be complex and evolving, making thorough, up-to-date due diligence an important step before committing to a specific market entry approach.",
    ],
    relevantServiceSlugs: ["market-research", "market-entry-strategy", "distribution-strategic-partnership"],
    ctaHeading: "Exploring Opportunities in Myanmar?",
    ctaDescription: "Get in touch to discuss current market conditions, due diligence, or entry considerations relevant to Myanmar.",
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}

export function getMarketSectors(market: Market): Sector[] {
  return sectors.filter((s) => market.prioritySectorSlugs.includes(s.slug));
}

export function getMarketServices(market: Market): (Service & { href: string })[] {
  return services
    .filter((s) => market.relevantServiceSlugs.includes(s.slug))
    .map((s) => ({ ...s, href: serviceHref(s.slug) }));
}
