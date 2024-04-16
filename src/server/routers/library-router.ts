import { z } from "zod";
import { protectedProcedure, router } from "../trpc";
import db from "../db/drizzle";
import { library } from "../db/schema";
import { and, eq } from "drizzle-orm";
import { takeUniqueOrThrow } from "./helper";

export const libraryRouter = router({
  get: protectedProcedure
    .input(z.object({ media_id: z.string() }))
    .query(async (opts) => {
      const { input } = opts;

      const row = await db
        .select()
        .from(library)
        .where(
          and(
            eq(library.media_id, input.media_id),
            eq(library.user_id, opts.ctx.auth.userId)
          )
        ).then(takeUniqueOrThrow)

      return row;
    }),
  add: protectedProcedure
    .input(
      z.object({
        media_id: z.string(),
        type: z.string(),
        image: z.string(),
        title_english: z.string(),
        title_native: z.string(),
        status: z.enum(["completed", "watchlist", "watching"]),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await db.insert(library).values({
        user_id: opts.ctx.auth.userId,
        image: input.image,
        media_id: input.media_id,
        type: input.type,
        title_engish: input.title_english,
        title_native: input.title_native,
        status: input.status,
      });
    }),
  remove: protectedProcedure
    .input(z.object({ media_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const deletedMedia = await db
        .delete(library)
        .where(
          and(
            eq(library.user_id, ctx.auth.userId),
            eq(library.media_id, input.media_id)
          )
        )
        .returning({ deletedMedia: library.media_id });

      return { deletedMedia };
    }),
});
