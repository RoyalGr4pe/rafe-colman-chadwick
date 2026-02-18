import { cn } from "@/lib/utils";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function PullQuote({ quote, attribution, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn("border-l-4 border-gold py-4 pl-6 md:pl-10", className)}
    >
      <p className="font-display text-2xl leading-relaxed italic md:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-3 font-meta text-sm text-ink/60">
          &mdash; {attribution}
        </footer>
      )}
    </blockquote>
  );
}
