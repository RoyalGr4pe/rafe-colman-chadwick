import { NextResponse } from "next/server";
import { fetchFundraisingData } from "@/lib/justgiving";
import { getSiteSettings } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await fetchFundraisingData();
    return NextResponse.json(data);
  } catch {
    // Fallback to Sanity CMS value
    try {
      const settings = await getSiteSettings();
      return NextResponse.json({
        total: settings?.fundraisingFallback ?? 0,
        target: 10000,
        recentDonations: [],
      });
    } catch {
      return NextResponse.json(
        { total: 0, target: 10000, recentDonations: [] },
        { status: 503 }
      );
    }
  }
}
