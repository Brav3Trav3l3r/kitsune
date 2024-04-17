import {
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "completed",
  "watchlist",
  "watching",
]);

export const library = pgTable(
  "library",
  {
    user_id: text("user_id").notNull(),
    media_id: text("media_id").notNull(),
    type: text("type"),
    image: text("image")
      .notNull()
      .default(
        "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png"
      ),
    title_engish: text("title_engish"),
    title_native: text("title_native"),
    title_romaji: text("title_romaji"),
    media_status: statusEnum("media_status").default("watchlist").notNull(),
    added_at: timestamp("added_at").defaultNow().notNull(),
  },
  (table) => {
    return {
      pkCustom: primaryKey({
        columns: [table.media_id, table.user_id],
      }),
    };
  }
);
