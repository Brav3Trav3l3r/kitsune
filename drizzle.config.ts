import type { Config } from "drizzle-kit";
import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEON_DATABASE_URL!,
  },
} satisfies Config;
