import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  greet: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}!`;
    }),
  hi: publicProcedure.query(() => "hi"),
});

export type AppRouter = typeof appRouter;