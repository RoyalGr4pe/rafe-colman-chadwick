import { getSanityClient } from "./client";

// Journal
export async function getLatestJournalEntry() {
  const client = getSanityClient();
  if (!client) return null;

  return client.fetch(
    `*[_type == "journalEntry"] | order(publishedAt desc)[0]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getAllJournalEntries() {
  const client = getSanityClient();
  if (!client) return [];

  return client.fetch(
    `*[_type == "journalEntry"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getJournalEntryBySlug(slug: string) {
  const client = getSanityClient();
  if (!client) return null;

  return client.fetch(
    `*[_type == "journalEntry" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      body,
      excerpt,
      "coverImage": coverImage.asset->url
    }`,
    { slug }
  );
}

// UK Run Page
export async function getUKRunPageContent() {
  const client = getSanityClient();
  if (!client) return null;

  return client.fetch(
    `*[_type == "ukRunPage"][0]{
      pillars,
      biggerVision,
      documentaryEmbed
    }`
  );
}

// Site Settings
export async function getSiteSettings() {
  const client = getSanityClient();
  if (!client) return null;

  return client.fetch(
    `*[_type == "siteSettings"][0]{
      fundraisingFallback,
      currentLocationLat,
      currentLocationLng,
      "heroImage": heroImage.asset->url
    }`
  );
}

// Press Assets
export async function getPressAssets() {
  const client = getSanityClient();
  if (!client) return [];

  return client.fetch(
    `*[_type == "pressAsset"] | order(title asc){
      title,
      category,
      "fileUrl": file.asset->url,
      "imageUrl": file.asset->url
    }`
  );
}
