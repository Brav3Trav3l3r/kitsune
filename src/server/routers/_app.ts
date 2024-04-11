import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { todoRouter } from "./todos";

export const appRouter = router({
  greet: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}!`;
    }),
  hi: publicProcedure.query(() => "hi"),
  todos: todoRouter,
});

export type AppRouter = typeof appRouter;
