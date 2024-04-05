import { getCollection } from "astro:content";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context: { site: string }) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map(
      (post) =>
        ({
          ...post.data,
          description: post.data.summary,
          pubDate: post.data.created,
          link: `/blog/${post.slug}/`,
        }) satisfies RSSFeedItem,
    ),
  });
}
