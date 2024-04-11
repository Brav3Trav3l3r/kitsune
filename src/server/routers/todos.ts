import db from "../db/drizzle";
import { z } from "zod";
import { todo } from "../db/schema";
import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: publicProcedure.query(async () => {
    const todos = await db.select().from(todo);
    return todos;
  }),
  add: publicProcedure
    .input(z.object({ text: z.string(), id: z.number() }))
    .mutation(async ({ input }) => {
      await db.insert(todo).values({ text: input.text, id: input.id });
      return true;
    }),
});
