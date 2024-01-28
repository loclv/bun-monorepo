import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/products.ts',
  out: './drizzle',
} satisfies Config;
