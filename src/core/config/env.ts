import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default('AVENZON Global Marketplace'),
  NEXT_PUBLIC_APP_URL: z.string().default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.string().default('http://localhost:3000/api'),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  NEXT_PUBLIC_ENABLE_AI_SEARCH: z.string().transform((val) => val === 'true').default('true'),
  NEXT_PUBLIC_ENABLE_WEBGL_HERO: z.string().transform((val) => val === 'true').default('true'),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_ENABLE_AI_SEARCH: process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH,
  NEXT_PUBLIC_ENABLE_WEBGL_HERO: process.env.NEXT_PUBLIC_ENABLE_WEBGL_HERO,
});
