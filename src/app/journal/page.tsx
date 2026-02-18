import type { Metadata } from "next";
import { getAllJournalEntries } from "@/lib/sanity/queries";
import { JournalCard } from "@/components/ui/JournalCard";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Race reports, behind-the-scenes stories, and updates from the road.",
};

export default async function JournalPage() {
  const entries = await getAllJournalEntries();

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <h1 className="mb-12 font-display text-4xl font-semibold md:text-5xl">
          Journal
        </h1>

        {entries && entries.length > 0 ? (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {entries.map(
              (entry: {
                slug: string;
                title: string;
                publishedAt: string;
                excerpt: string;
                coverImage?: string;
              }) => (
                <JournalCard
                  key={entry.slug}
                  title={entry.title}
                  date={entry.publishedAt}
                  excerpt={entry.excerpt}
                  slug={entry.slug}
                  coverImage={entry.coverImage}
                />
              )
            )}
          </div>
        ) : (
          <p className="font-body text-ink/50">
            No journal entries yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
