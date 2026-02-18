import { ChapterSection } from "@/components/ui/ChapterSection";
import { StatBlock } from "@/components/ui/StatBlock";

interface RunOverviewProps {
  totalDistance?: number;
  elevation?: number;
  days?: number;
  milesRemaining?: number;
}

export function RunOverview({
  totalDistance = 874,
  elevation = 9200,
  days = 30,
  milesRemaining = 0,
}: RunOverviewProps) {
  return (
    <ChapterSection title="The Run">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="max-w-[55ch] font-body text-base leading-relaxed text-ink/80">
          <p className="mb-4">
            A solo, unsupported run from John o&apos; Groats to Land&apos;s End
            — the full length of mainland Britain. Over 870 miles of road,
            trail, and terrain, through every kind of weather the British Isles
            can throw at a runner.
          </p>
          <p>
            This isn&apos;t a race. It&apos;s a mission — to raise funds, to
            tell a story, and to push the limits of what one person can endure
            for a cause that matters.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <StatBlock label="Total Distance" value={totalDistance} unit="mi" />
          <StatBlock label="Elevation" value={elevation.toLocaleString()} unit="m" />
          <StatBlock label="Target Days" value={days} />
          <StatBlock
            label="Miles Remaining"
            value={milesRemaining}
            unit="mi"
          />
        </div>
      </div>
    </ChapterSection>
  );
}
