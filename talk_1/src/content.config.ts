import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    officer: z.string().default('Anonymous'),
  }),
});

export const collections = { logs };
