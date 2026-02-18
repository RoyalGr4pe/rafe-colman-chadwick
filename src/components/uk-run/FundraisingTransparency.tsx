"use client";

import { useEffect, useState } from "react";
import { ChapterSection } from "@/components/ui/ChapterSection";
import { ProgressTracker } from "@/components/ui/ProgressTracker";

interface FundraisingData {
  total: number;
  target: number;
  recentDonations: { name: string; amount: number }[];
}

export function FundraisingTransparency() {
  const [data, setData] = useState<FundraisingData | null>(null);

  useEffect(() => {
    fetch("/api/fundraising")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  return (
    <ChapterSection title="Where the Money Goes">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          {data ? (
            <ProgressTracker
              current={data.total}
              target={data.target}
              recentDonations={data.recentDonations}
            />
          ) : (
            <div className="h-3 w-full animate-pulse rounded-full bg-navy/10" />
          )}
        </div>

        <div className="font-body text-base leading-relaxed text-ink/80">
          <p className="mb-4">
            Full transparency: every pound raised is tracked and reported.
            Funds are split between the nominated charities, with a small
            percentage covering essential running costs (gear replacement,
            nutrition, emergency medical).
          </p>
          <p>
            Regular updates on fundraising breakdowns are published in the
            journal.
          </p>
        </div>
      </div>
    </ChapterSection>
  );
}
