import type { Metadata } from "next";
import Image from "next/image";
import { getPressAssets } from "@/lib/sanity/queries";
import { ChapterSection } from "@/components/ui/ChapterSection";
import { PullQuote } from "@/components/ui/PullQuote";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press resources, high-resolution images, and media enquiries for Rafe Colman-Chadwick.",
};

export default async function PressPage() {
  const assets = await getPressAssets();

  return (
    <div className="pt-28 pb-20">
      <ChapterSection title="Press & Media">
        <p className="mb-8 max-w-[60ch] font-body text-base leading-relaxed text-ink/80">
          For media enquiries, interviews, or press resources, get in touch at{" "}
          <a
            href="mailto:press@rafecolmanchadwick.com"
            className="text-gold underline underline-offset-4 hover:text-gold/80"
          >
            press@rafecolmanchadwick.com
          </a>
        </p>
      </ChapterSection>

      <ChapterSection title="Credibility & Endorsements">
        <div className="space-y-8">
          <PullQuote
            quote="An incredible feat of endurance and heart."
            attribution="YSTV"
          />
          <PullQuote
            quote="What Rafe is doing is quite extraordinary. Quite extraordinary."
            attribution="Miriam Margolyes"
          />
        </div>
      </ChapterSection>

      <ChapterSection title="Press Images">
        {assets && assets.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assets
              .filter(
                (a: { category: string }) =>
                  a.category === "image" || a.category === "photo"
              )
              .map((asset: { title: string; imageUrl: string }, i: number) => (
                <div
                  key={i}
                  className="relative aspect-[3/2] overflow-hidden rounded-lg"
                >
                  <Image
                    src={asset.imageUrl}
                    alt={asset.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
          </div>
        ) : (
          <p className="font-body text-ink/50">
            Press images coming soon. Contact us for high-resolution assets.
          </p>
        )}
      </ChapterSection>

      <ChapterSection title="Downloadable Resources">
        {assets && assets.length > 0 ? (
          <ul className="space-y-3">
            {assets
              .filter(
                (a: { category: string }) =>
                  a.category === "pdf" || a.category === "document"
              )
              .map((asset: { title: string; fileUrl: string }, i: number) => (
                <li key={i}>
                  <a
                    href={asset.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-meta text-sm text-gold underline underline-offset-4 hover:text-gold/80"
                  >
                    {asset.title}
                  </a>
                </li>
              ))}
          </ul>
        ) : (
          <p className="font-body text-ink/50">
            Bio PDF and press kit available on request.
          </p>
        )}
      </ChapterSection>
    </div>
  );
}
