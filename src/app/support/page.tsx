import type { Metadata } from "next";
import Link from "next/link";
import { ChapterSection } from "@/components/ui/ChapterSection";
import { EmailSignup } from "@/components/home/EmailSignup";

export const metadata: Metadata = {
  title: "Support the Mission",
  description:
    "Donate, follow, and spread the word. Every contribution helps Rafe run further for charity.",
};

export default function SupportPage() {
  return (
    <div className="pt-28 pb-20">
      <ChapterSection title="Support the Mission">
        <p className="mb-8 max-w-[60ch] font-body text-base leading-relaxed text-ink/80">
          There are many ways to support the journey. Whether you donate,
          share the story, or simply follow along — every bit of support
          fuels the miles ahead.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-ink/5 bg-white p-8">
            <h3 className="mb-3 font-display text-xl font-semibold">Donate</h3>
            <p className="mb-4 font-body text-sm text-ink/70">
              All funds go directly to the nominated charities. Donate via
              JustGiving — every pound makes a difference.
            </p>
            <Link
              href="https://www.justgiving.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-gold px-5 py-2.5 font-meta text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
            >
              Donate on JustGiving
            </Link>
          </div>

          <div className="rounded-lg border border-ink/5 bg-white p-8">
            <h3 className="mb-3 font-display text-xl font-semibold">
              Follow the Journey
            </h3>
            <p className="mb-4 font-body text-sm text-ink/70">
              Keep up with daily updates, route progress, and
              behind-the-scenes content from the road.
            </p>
            <Link
              href="/uk-run"
              className="inline-flex items-center rounded-sm border border-navy px-5 py-2.5 font-meta text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-soft-white"
            >
              Follow the Run
            </Link>
          </div>

          <div className="rounded-lg border border-ink/5 bg-white p-8">
            <h3 className="mb-3 font-display text-xl font-semibold">
              Spread the Word
            </h3>
            <p className="mb-4 font-body text-sm text-ink/70">
              Share the story with your network. The more people who know,
              the further the impact reaches.
            </p>
            <Link
              href="/press"
              className="inline-flex items-center rounded-sm border border-navy px-5 py-2.5 font-meta text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-soft-white"
            >
              Press & Media
            </Link>
          </div>
        </div>
      </ChapterSection>

      <EmailSignup />
    </div>
  );
}
