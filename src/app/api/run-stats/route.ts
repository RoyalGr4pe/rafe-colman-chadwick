import { NextResponse } from "next/server";
import { fetchRunStats } from "@/lib/strava";

export async function GET() {
  try {
    const stats = await fetchRunStats();
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      {
        totalDistanceKm: 0,
        totalElevationM: 0,
        latestPace: "--:--",
        daysActive: 0,
      },
      { status: 503 }
    );
  }
}
