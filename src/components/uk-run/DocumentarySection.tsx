import { ChapterSection } from "@/components/ui/ChapterSection";
import { MediaEmbed } from "@/components/ui/MediaEmbed";

interface DocumentarySectionProps {
  embedId?: string;
  embedType?: "youtube" | "vimeo";
}

export function DocumentarySection({
  embedId,
  embedType = "youtube",
}: DocumentarySectionProps) {
  return (
    <ChapterSection title="The Documentary" id="documentary">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          {embedId ? (
            <MediaEmbed
              type={embedType}
              src={embedId}
              caption="Documentary trailer"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-lg bg-navy/5">
              <p className="font-meta text-sm text-ink/40">
                Documentary coming soon
              </p>
            </div>
          )}
        </div>

        <div className="font-body text-base leading-relaxed text-ink/80">
          <p className="mb-4">
            In partnership with YSTV and independent filmmakers, the entire
            journey is being captured on camera. From the pre-dawn starts to
            the moments of doubt, from the kindness of strangers to the final
            steps — nothing is left out.
          </p>
          <p className="mb-4">
            The documentary aims to show what ultra-endurance running really
            looks like: not glossy, not sponsored, not elite. Just real.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-meta text-xs uppercase tracking-widest text-gold">
            <span>YSTV</span>
            <span>London Marathon</span>
            <span>Miriam Margolyes</span>
          </div>
        </div>
      </div>
    </ChapterSection>
  );
}
