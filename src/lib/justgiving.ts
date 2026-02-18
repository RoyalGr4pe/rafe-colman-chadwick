interface FundraisingData {
  total: number;
  target: number;
  recentDonations: { name: string; amount: number }[];
}

export async function fetchFundraisingData(): Promise<FundraisingData> {
  const apiKey = process.env.JUSTGIVING_API_KEY;
  const campaignId = process.env.JUSTGIVING_CAMPAIGN_ID;

  if (!apiKey || !campaignId) {
    throw new Error("JustGiving configuration missing");
  }

  const res = await fetch(
    `https://api.justgiving.com/${apiKey}/v1/fundraising/pages/${campaignId}`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 }, // 5 minute cache
    }
  );

  if (!res.ok) {
    throw new Error(`JustGiving API error: ${res.status}`);
  }

  const data = await res.json();

  const donationsRes = await fetch(
    `https://api.justgiving.com/${apiKey}/v1/fundraising/pages/${campaignId}/donations`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    }
  );

  const donations = donationsRes.ok ? await donationsRes.json() : { donations: [] };

  return {
    total: parseFloat(data.grandTotalRaisedExcludingGiftAid ?? "0"),
    target: parseFloat(data.fundraisingTarget ?? "0"),
    recentDonations: (donations.donations ?? [])
      .slice(0, 5)
      .map((d: { donorDisplayName: string; amount: string }) => ({
        name: d.donorDisplayName || "Anonymous",
        amount: parseFloat(d.amount),
      })),
  };
}
