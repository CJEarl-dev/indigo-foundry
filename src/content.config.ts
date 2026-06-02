import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      image: image(),
      imageAlt: z.string(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      category: z.enum(['Web', 'Branding', 'SEO', 'UI/UX', 'E-commerce']),
      date: z.coerce.date(),
      description: z.string(),
      image: image(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      results: z
        .array(
          z.object({
            metric: z.string(),
            value: z.string(),
          })
        )
        .default([]),
      website: z.url().optional(),
      stack: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { blog, projects };
