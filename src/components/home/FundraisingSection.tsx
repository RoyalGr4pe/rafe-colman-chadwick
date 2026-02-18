"use client";

import { useEffect, useState } from "react";
import { ProgressTracker } from "@/components/ui/ProgressTracker";

interface FundraisingData {
  total: number;
  target: number;
  recentDonations: { name: string; amount: number }[];
}

export function FundraisingSection() {
  const [data, setData] = useState<FundraisingData | null>(null);

  useEffect(() => {
    fetch("/api/fundraising")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  if (!data) {
    return (
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
          <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Fundraising Progress
          </h2>
          <div className="h-3 w-full animate-pulse rounded-full bg-navy/10" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
          Fundraising Progress
        </h2>
        <ProgressTracker
          current={data.total}
          target={data.target}
          recentDonations={data.recentDonations}
        />
      </div>
    </section>
  );
}
