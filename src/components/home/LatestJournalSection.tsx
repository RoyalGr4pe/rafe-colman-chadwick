import { getLatestJournalEntry } from "@/lib/sanity/queries";
import { JournalCard } from "@/components/ui/JournalCard";

export async function LatestJournalSection() {
  const entry = await getLatestJournalEntry();

  if (!entry) return null;

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
          Latest from the Journal
        </h2>
        <div className="max-w-lg">
          <JournalCard
            title={entry.title}
            date={entry.publishedAt}
            excerpt={entry.excerpt}
            slug={entry.slug}
            coverImage={entry.coverImage}
          />
        </div>
      </div>
    </section>
  );
}
