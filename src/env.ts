import z from 'zod'

const envSchema = z.object({
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PORT: z.string(),
})

export const env = envSchema.parse(process.env)
