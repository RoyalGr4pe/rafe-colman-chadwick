import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface JournalCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  className?: string;
}

export function JournalCard({
  title,
  date,
  excerpt,
  slug,
  coverImage,
  className,
}: JournalCardProps) {
  return (
    <Link href={`/journal/${slug}`} className={cn("group block", className)}>
      {coverImage && (
        <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      )}
      <p className="font-meta text-xs text-ink/40">
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h3 className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-gold">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
        {excerpt}
      </p>
    </Link>
  );
}
