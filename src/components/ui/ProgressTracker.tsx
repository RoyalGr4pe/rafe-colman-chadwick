"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Donation {
  name: string;
  amount: number;
}

interface ProgressTrackerProps {
  current: number;
  target: number;
  currency?: string;
  recentDonations?: Donation[];
  fallback?: number;
  className?: string;
}

export function ProgressTracker({
  current,
  target,
  currency = "£",
  recentDonations,
  className,
}: ProgressTrackerProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = Math.min((current / target) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 flex items-end justify-between">
        <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
          {currency}
          {current.toLocaleString()}
        </p>
        <p className="font-meta text-sm text-ink/50">
          of {currency}
          {target.toLocaleString()} target
        </p>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-navy/10">
        <div
          className="h-full rounded-full bg-gold transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>

      <p className="mt-1 font-meta text-xs text-ink/40">
        {percentage.toFixed(0)}% raised
      </p>

      {recentDonations && recentDonations.length > 0 && (
        <div className="mt-4 space-y-1">
          <p className="font-meta text-xs font-semibold uppercase tracking-widest text-gold">
            Recent Donations
          </p>
          {recentDonations.slice(0, 3).map((d, i) => (
            <p key={i} className="font-meta text-sm text-ink/60">
              {d.name} &mdash; {currency}
              {d.amount.toLocaleString()}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
