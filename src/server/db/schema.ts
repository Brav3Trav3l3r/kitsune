import { pgEnum, pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

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
    status: statusEnum("status").default("watchlist"),
  },
  (table) => {
    return {
      pkCustom: primaryKey({
        name: "mediaByUser",
        columns: [table.media_id, table.user_id],
      }),
    };
  }
);
