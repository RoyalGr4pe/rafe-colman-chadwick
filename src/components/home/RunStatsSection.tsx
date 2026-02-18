"use client";

import { useEffect, useState } from "react";
import { StatBlock } from "@/components/ui/StatBlock";

interface RunStats {
  totalDistanceKm: number;
  totalElevationM: number;
  latestPace: string;
  daysActive: number;
}

export function RunStatsSection() {
  const [stats, setStats] = useState<RunStats | null>(null);

  useEffect(() => {
    fetch("/api/run-stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  if (!stats) {
    return (
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
          <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Run Stats
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded bg-navy/5" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
          Run Stats
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatBlock
            label="Total Distance"
            value={stats.totalDistanceKm.toLocaleString()}
            unit="km"
          />
          <StatBlock
            label="Elevation Gain"
            value={stats.totalElevationM.toLocaleString()}
            unit="m"
          />
          <StatBlock label="Latest Pace" value={stats.latestPace} unit="/km" />
          <StatBlock label="Days Active" value={stats.daysActive} />
        </div>
      </div>
    </section>
  );
}
