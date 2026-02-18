import type { Metadata } from "next";
import { getUKRunPageContent, getSiteSettings } from "@/lib/sanity/queries";
import { RunOverview } from "@/components/uk-run/RunOverview";
import { RouteMap } from "@/components/ui/RouteMap";
import { WhyImDoingThis } from "@/components/uk-run/WhyImDoingThis";
import { FundraisingTransparency } from "@/components/uk-run/FundraisingTransparency";
import { DocumentarySection } from "@/components/uk-run/DocumentarySection";
import { BiggerVision } from "@/components/uk-run/BiggerVision";

export const metadata: Metadata = {
  title: "UK Run — John o' Groats to Land's End",
  description:
    "Follow Rafe's solo run the length of Britain: 870+ miles from John o' Groats to Land's End, raising funds for charity.",
};

// John o' Groats to Land's End approximate waypoints
const ROUTE_COORDINATES: [number, number][] = [
  [-3.069, 58.644], // John o' Groats
  [-3.94, 57.48], // Inverness area
  [-3.99, 56.46], // Perth area
  [-3.19, 55.95], // Edinburgh area
  [-2.97, 54.78], // Carlisle area
  [-2.74, 53.76], // Lancaster area
  [-2.24, 53.48], // Manchester area
  [-1.89, 52.48], // Birmingham area
  [-2.59, 51.45], // Bristol area
  [-3.7, 50.42], // Exeter area
  [-5.713, 50.066], // Land's End
];

export default async function UKRunPage() {
  const [content, settings] = await Promise.all([
    getUKRunPageContent(),
    getSiteSettings(),
  ]);

  const currentPosition: [number, number] | undefined =
    settings?.currentLocationLng && settings?.currentLocationLat
      ? [settings.currentLocationLng, settings.currentLocationLat]
      : undefined;

  return (
    <div className="pt-20">
      <RunOverview />

      <RouteMap
        coordinates={ROUTE_COORDINATES}
        currentPosition={currentPosition}
        milestones={[
          { position: [-3.069, 58.644], label: "John o' Groats — Start" },
          { position: [-5.713, 50.066], label: "Land's End — Finish" },
        ]}
      />

      <WhyImDoingThis pillars={content?.pillars} />
      <FundraisingTransparency />
      <DocumentarySection
        embedId={content?.documentaryEmbed}
      />
      <BiggerVision />
    </div>
  );
}
