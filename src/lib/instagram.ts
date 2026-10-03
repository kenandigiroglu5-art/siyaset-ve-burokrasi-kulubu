import type { InstagramMediaType, InstagramPost } from "@/types";

// Bu modül yalnızca sunucu tarafında (Server Component) çalışmalıdır —
// INSTAGRAM_ACCESS_TOKEN burada okunur ve asla client bundle'a girmemelidir.
// Client tarafı sadece "@/lib/instagram" üzerinden type-only import yapmalı.

const GRAPH_API_VERSION = "v21.0";
const MEDIA_FIELDS =
  "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url,thumbnail_url}";
// Instagram API'ye her sayfa açılışında istek atmamak için birkaç saatlik revalidation.
const REVALIDATE_SECONDS = 60 * 60 * 6;

export type InstagramFeedState =
  | { status: "ok"; posts: InstagramPost[] }
  | { status: "not_configured" }
  | { status: "error" };

interface GraphMediaChild {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
}

interface GraphMediaItem {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
  children?: { data?: GraphMediaChild[] };
}

interface GraphMediaResponse {
  data?: GraphMediaItem[];
  error?: { message?: string };
}

function resolveDisplayImage(item: GraphMediaItem): string | null {
  if (item.media_type === "CAROUSEL_ALBUM") {
    const firstChild = item.children?.data?.[0];
    if (firstChild) {
      return firstChild.media_type === "VIDEO"
        ? firstChild.thumbnail_url ?? firstChild.media_url ?? null
        : firstChild.media_url ?? null;
    }
    return item.thumbnail_url ?? item.media_url ?? null;
  }
  if (item.media_type === "VIDEO") {
    return item.thumbnail_url ?? item.media_url ?? null;
  }
  return item.media_url ?? null;
}

export async function getInstagramFeed(limit = 6): Promise<InstagramFeedState> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !userId) {
    return { status: "not_configured" };
  }

  const url = new URL(`https://graph.instagram.com/${GRAPH_API_VERSION}/${userId}/media`);
  url.searchParams.set("fields", MEDIA_FIELDS);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", accessToken);

  let response: Response;
  try {
    response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  } catch (err) {
    console.error("Instagram gönderileri alınamadı:", err instanceof Error ? err.message : err);
    return { status: "error" };
  }

  if (!response.ok) {
    console.error(`Instagram Graph API HTTP ${response.status} döndürdü.`);
    return { status: "error" };
  }

  let json: GraphMediaResponse;
  try {
    json = await response.json();
  } catch {
    console.error("Instagram Graph API yanıtı ayrıştırılamadı.");
    return { status: "error" };
  }

  if (json.error || !json.data) {
    console.error("Instagram Graph API hata döndürdü:", json.error?.message ?? "bilinmeyen hata");
    return { status: "error" };
  }

  const posts: InstagramPost[] = json.data.slice(0, limit).flatMap((item) => {
    const displayImageUrl = resolveDisplayImage(item);
    if (!displayImageUrl || !item.permalink) return [];
    return [
      {
        id: item.id,
        caption: item.caption,
        permalink: item.permalink,
        timestamp: item.timestamp,
        mediaType: (item.media_type as InstagramMediaType) ?? "IMAGE",
        displayImageUrl,
      },
    ];
  });

  if (posts.length === 0) {
    return { status: "error" };
  }

  return { status: "ok", posts };
}
