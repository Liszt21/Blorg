import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    labels: z.array(z.string()).optional(),
    summary: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date().optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
