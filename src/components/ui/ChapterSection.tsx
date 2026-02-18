import { cn } from "@/lib/utils";

interface ChapterSectionProps {
  chapterNumber?: number;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "dark";
  className?: string;
  id?: string;
}

export function ChapterSection({
  chapterNumber,
  title,
  children,
  variant = "default",
  className,
  id,
}: ChapterSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24",
        isDark ? "bg-navy text-soft-white" : "bg-soft-white text-ink",
        className
      )}
    >
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        {chapterNumber != null && (
          <p className="mb-3 font-meta text-xs font-semibold uppercase tracking-widest text-gold">
            Chapter {chapterNumber}
          </p>
        )}
        <h2 className="mb-10 font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
