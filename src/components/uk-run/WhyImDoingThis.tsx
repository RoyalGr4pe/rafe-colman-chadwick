import { ChapterSection } from "@/components/ui/ChapterSection";
import { PullQuote } from "@/components/ui/PullQuote";

interface Pillar {
  title: string;
  body: string;
  quote?: string;
  quoteAttribution?: string;
}

interface WhyImDoingThisProps {
  pillars?: Pillar[];
}

const DEFAULT_PILLARS: Pillar[] = [
  {
    title: "Raising Funds for Those Who Need It",
    body: "Every penny raised goes directly to charities supporting mental health, homelessness, and youth development across the UK.",
    quote: "It's not about me. It's about every person who needs to know someone is running for them.",
  },
  {
    title: "Proving What's Possible",
    body: "Ordinary people can achieve extraordinary things. This run is proof that you don't need to be elite — you just need to be stubborn enough to keep going.",
    quote: "The Yorkshire Sherpa doesn't stop.",
  },
  {
    title: "Telling the Story",
    body: "Partnering with YSTV and independent filmmakers to document every step. The documentary will capture the raw, unfiltered reality of ultra-endurance.",
  },
  {
    title: "Building a Community",
    body: "This isn't a solo effort in spirit. Supporters, donors, and fellow runners along the way make this a shared journey.",
    quote: "Rafenaldo runs with the people.",
  },
];

export function WhyImDoingThis({ pillars }: WhyImDoingThisProps) {
  const items = pillars ?? DEFAULT_PILLARS;

  return (
    <>
      {items.map((pillar, i) => (
        <ChapterSection key={i} chapterNumber={i + 1} title={pillar.title}>
          <p className="mb-8 max-w-[60ch] font-body text-base leading-relaxed text-ink/80">
            {pillar.body}
          </p>
          {pillar.quote && (
            <PullQuote
              quote={pillar.quote}
              attribution={pillar.quoteAttribution}
            />
          )}
        </ChapterSection>
      ))}
    </>
  );
}
