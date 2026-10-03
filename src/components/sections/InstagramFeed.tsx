import { getInstagramFeed } from "@/lib/instagram";
import InstagramFeedClient from "@/components/sections/InstagramFeedClient";

export default async function InstagramFeed() {
  const feed = await getInstagramFeed(6);
  return <InstagramFeedClient feed={feed} />;
}
