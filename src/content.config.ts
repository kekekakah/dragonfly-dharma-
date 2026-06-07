import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const treasurySchema = z.object({
  title: z.string(),
  titleZh: z.string(),
  season: z.enum(['spring', 'summer', 'late-summer', 'autumn', 'winter', 'all']),
  food: z.array(z.string()),
  topic: z.array(z.string()),
  organ: z.array(z.string()).optional(),
  classicalQuote: z.string(),
  classicalQuoteSource: z.string(),
  classicalQuoteZh: z.string().optional(),
  summary: z.string(),
  summaryZh: z.string(),
  publishDate: z.coerce.date(),
  draft: z.boolean().optional().default(false),
});

const treasury = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/treasury' }),
  schema: treasurySchema,
});

export const collections = { treasury };
