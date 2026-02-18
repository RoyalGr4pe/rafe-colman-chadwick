import { Suspense } from "react";
import { getSiteSettings } from "@/lib/sanity/queries";
import { Hero } from "@/components/home/Hero";
import { BioSection } from "@/components/home/BioSection";
import { FundraisingSection } from "@/components/home/FundraisingSection";
import { RunStatsSection } from "@/components/home/RunStatsSection";
import { LatestJournalSection } from "@/components/home/LatestJournalSection";
import { EmailSignup } from "@/components/home/EmailSignup";

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <>
      <Hero heroImage={settings?.heroImage} />
      <BioSection />
      <FundraisingSection />
      <RunStatsSection />
      <Suspense fallback={null}>
        <LatestJournalSection />
      </Suspense>
      <EmailSignup />
    </>
  );
}
