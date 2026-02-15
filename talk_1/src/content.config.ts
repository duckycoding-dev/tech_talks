import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ships = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ships' }),
  schema: z.object({
    name: z.string(),
    class: z.enum(['Explorer', 'Warship', 'Freighter', 'Science', 'Colony']),
    status: z.enum([
      'Active',
      'Decommissioned',
      'Missing',
      'Under Construction',
    ]),
    crew: z.number().int().positive(),
    commissioned: z.coerce.date(),
    topSpeed: z.string(),
    armament: z.array(z.string()).default([]),
    homePort: z.string().optional(),
    captain: z.string().default('Unassigned'),
  }),
});

export const collections = { ships };
