import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    preview: z.string().optional(),
  }),
});

export const collections = { posts };
