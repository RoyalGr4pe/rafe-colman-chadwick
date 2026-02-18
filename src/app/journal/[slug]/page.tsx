import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getJournalEntryBySlug } from "@/lib/sanity/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getJournalEntryBySlug(slug);

  if (!entry) return { title: "Not Found" };

  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function JournalEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getJournalEntryBySlug(slug);

  if (!entry) notFound();

  return (
    <article className="pt-28 pb-20">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <header className="mb-12">
          <p className="mb-3 font-meta text-xs text-ink/40">
            {new Date(entry.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {entry.title}
          </h1>
        </header>

        {entry.coverImage && (
          <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src={entry.coverImage}
              alt={entry.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        )}

        {/* Portable Text body — replace with @portabletext/react when Sanity schemas are configured */}
        <div className="prose prose-lg mx-auto max-w-[65ch] font-body">
          {entry.body ? (
            <p className="text-ink/80">
              {/* Placeholder: render Portable Text here */}
              {JSON.stringify(entry.body)}
            </p>
          ) : (
            <p className="text-ink/50">{entry.excerpt}</p>
          )}
        </div>
      </div>
    </article>
  );
}
