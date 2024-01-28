import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

console.log('Start migration! 🍀')

if (!process.env.DATABASE_URL) {
  throw new Error('Please specify a DATABASE_URL environment variable! 🚧')
}

const databaseUrl = drizzle(
  postgres(`${process.env.DATABASE_URL}`, {
    ssl: process.env.ENV === 'PROD' || process.env.ENV === 'STG' ? 'require' : false,
    max: 1,
  }),
)

const main = async () => {
  try {
    await migrate(databaseUrl, { migrationsFolder: 'drizzle' })
    console.log('Migration complete! 🌟')
  } catch (error) {
    console.log('🚫 Err: ', error)
  }

  process.exit(0)
}

main()
