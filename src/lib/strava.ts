interface RunStats {
  totalDistanceKm: number;
  totalElevationM: number;
  latestPace: string;
  daysActive: number;
}

async function getAccessToken(): Promise<string> {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    throw new Error(`Strava token refresh failed: ${res.status}`);
  }

  const data = await res.json();
  return data.access_token;
}

export async function fetchRunStats(): Promise<RunStats> {
  const token = await getAccessToken();

  const res = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=200",
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 600 }, // 10 minute cache
    }
  );

  if (!res.ok) {
    throw new Error(`Strava API error: ${res.status}`);
  }

  const activities: {
    type: string;
    distance: number;
    total_elevation_gain: number;
    moving_time: number;
    start_date: string;
  }[] = await res.json();

  const runs = activities.filter((a) => a.type === "Run");

  const totalDistanceKm = runs.reduce((sum, r) => sum + r.distance / 1000, 0);
  const totalElevationM = runs.reduce(
    (sum, r) => sum + r.total_elevation_gain,
    0
  );

  const uniqueDays = new Set(
    runs.map((r) => r.start_date.split("T")[0])
  );

  const latest = runs[0];
  const latestPaceMinPerKm = latest
    ? latest.moving_time / 60 / (latest.distance / 1000)
    : 0;
  const paceMin = Math.floor(latestPaceMinPerKm);
  const paceSec = Math.round((latestPaceMinPerKm - paceMin) * 60);

  return {
    totalDistanceKm: Math.round(totalDistanceKm),
    totalElevationM: Math.round(totalElevationM),
    latestPace: `${paceMin}:${paceSec.toString().padStart(2, "0")}`,
    daysActive: uniqueDays.size,
  };
}
