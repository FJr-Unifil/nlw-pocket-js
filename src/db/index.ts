import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'

export const client = postgres(
  `postgresql://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@localhost:${env.DATABASE_PORT}/${env.DATABASE_NAME}`
)
export const db = drizzle(client, { schema, logger: true })
