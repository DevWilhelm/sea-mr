// Photography sourced from Unsplash (images.unsplash.com), keyed by the same
// slugs used in lib/content.ts, so a photo can be swapped by changing one line.

export type SourcedImage = { src: string; alt: string };

function unsplash(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=80&w=1600`;
}

export const serviceImages: Record<string, SourcedImage> = {
  "market-research": {
    src: unsplash("photo-1666875753105-c63a6f3bdc86"),
    alt: "Analyst reviewing a market data dashboard on a laptop",
  },
  "strategic-planning": {
    src: unsplash("photo-1558978325-66dcf73b99b0"),
    alt: "Team discussing growth strategy around a table",
  },
  "market-entry-strategy": {
    src: unsplash("photo-1513568720563-6a5b8c6caab3"),
    alt: "Busy Southeast Asian city street",
  },
  "mergers-and-acquisitions": {
    src: unsplash("photo-1672380135241-c024f7fbfa13"),
    alt: "Two business partners shaking hands over a deal",
  },
  "value-chain-analysis": {
    src: unsplash("photo-1587293852726-70cdb56c2866"),
    alt: "Warehouse and supply chain logistics operation",
  },
  "competitive-benchmarking": {
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Business analyst reviewing charts and data on screen",
  },
  "distribution-strategic-partnership": {
    src: unsplash("photo-1517048676732-d65bc937f952"),
    alt: "Business partners meeting to discuss a partnership",
  },
  "consumer-behavior-analysis": {
    src: unsplash("photo-1686771416317-b964cc4e0002"),
    alt: "Researcher leading a customer focus group discussion",
  },
};

export const sectorImages: Record<string, SourcedImage> = {
  "healthcare-life-sciences": {
    src: unsplash("photo-1706264569029-64d9bf0d7a94"),
    alt: "Doctor in a modern healthcare setting",
  },
  "consumer-retail": {
    src: unsplash("photo-1684377961632-a3e9dc0c0977"),
    alt: "Interior of a modern retail store",
  },
  "energy-renewables": {
    src: unsplash("photo-1509391366360-2e959784a276"),
    alt: "Solar panel field under a clear sky",
  },
  "automotive-mobility": {
    src: unsplash("photo-1567789884554-0b844b597180"),
    alt: "Electric vehicle on a production line",
  },
  "industrials-manufacturing": {
    src: unsplash("photo-1717386255773-1e3037c81788"),
    alt: "Industrial manufacturing facility floor",
  },
  "technology-media-telecom": {
    src: unsplash("photo-1785682117029-86171f64c826"),
    alt: "Telecommunications data center server racks",
  },
};

export const aboutHeroImage: SourcedImage = {
  src: unsplash("photo-1568992687947-868a62a9f521"),
  alt: "Diverse team collaborating in an office meeting",
};
