import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import org from "@orgajs/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://blorg.labry.site",
  integrations: [mdx(), sitemap(), solid(), org({})],
});
