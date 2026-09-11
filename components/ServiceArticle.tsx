// Shared long-form article renderer for service detail pages.
//
// A handful of services (Market Intelligence, Growth Strategy, ...) have a full
// long-form article below the hero instead of the couple of short paragraphs used
// by the generic /services/[slug] template. Those pages build an `ArticleSection[]`
// describing their own content and hand it to <ServiceArticle /> so the heading
// levels, spacing, bullet styling, and reading measure stay identical across pages
// without copy-pasting the markup (and layout tweaks only need to happen here).

export type ArticleBullet = { lead: string; text: string };

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: ArticleBullet[] }
  | { type: "list"; items: string[] };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export function ServiceArticle({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((section) => (
        // Generous top margin between sections (matches the spacing already used
        // on the Market Intelligence page).
        <div key={section.heading} className="mt-10">
          <h2 className="text-xl font-bold text-accent md:text-2xl">{section.heading}</h2>
          {section.blocks.map((block, bi) => {
            if (block.type === "paragraph") {
              return (
                <p key={bi} className="mt-4 text-black/70">
                  {block.text}
                </p>
              );
            }

            if (block.type === "bullets") {
              return (
                <ul key={bi} className="mt-4 space-y-4">
                  {block.items.map((item) => (
                    <li key={item.lead} className="text-black/70">
                      <span className="font-semibold text-primary">{item.lead}</span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              );
            }

            // Plain bullet list: compact multi-column grid on desktop, single column
            // on mobile.
            return (
              <ul
                key={bi}
                className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 md:grid-cols-3"
              >
                {block.items.map((text) => (
                  <li key={text} className="flex items-start gap-2 text-black/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {text}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      ))}
    </>
  );
}
