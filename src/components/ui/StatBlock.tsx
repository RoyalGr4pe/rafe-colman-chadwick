import { cn } from "@/lib/utils";

interface StatBlockProps {
  label: string;
  value: string | number;
  unit?: string;
  sublabel?: string;
  className?: string;
}

export function StatBlock({
  label,
  value,
  unit,
  sublabel,
  className,
}: StatBlockProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className="font-meta text-xs font-semibold uppercase tracking-widest text-gold">
        {label}
      </p>
      <p className="font-display text-4xl font-semibold text-navy md:text-5xl">
        {value}
        {unit && (
          <span className="ml-1 font-meta text-lg font-normal text-gold">
            {unit}
          </span>
        )}
      </p>
      {sublabel && (
        <p className="font-meta text-xs text-ink/50">{sublabel}</p>
      )}
    </div>
  );
}
