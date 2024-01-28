import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

if (!process.env.DATABASE_URL) {
  throw new Error('Please specify a DATABASE_URL environment variable! 🚧')
}

/**
 * for query purposes
 */
const queryClient = postgres(process.env.DATABASE_URL)
export const db = drizzle(queryClient)
