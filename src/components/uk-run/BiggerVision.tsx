import { ChapterSection } from "@/components/ui/ChapterSection";
import { YorkshireFlag } from "@/components/motifs/YorkshireFlag";

export function BiggerVision() {
  return (
    <ChapterSection variant="dark" title="The Bigger Vision">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="font-body text-base leading-relaxed text-soft-white/80">
          <p className="mb-4">
            The UK run is just the beginning. The long-term vision extends to
            Everest Base Camp and beyond — each challenge bigger than the last,
            each one tied to a cause worth fighting for.
          </p>
          <p>
            This is about building something that lasts. A platform for
            charity, a community of supporters, and proof that one
            person&apos;s stubbornness can move mountains.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <YorkshireFlag className="w-40 opacity-80 md:w-56" />
        </div>
      </div>
    </ChapterSection>
  );
}
