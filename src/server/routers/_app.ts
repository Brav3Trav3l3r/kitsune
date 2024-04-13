import { createCallerFactory, publicProcedure, router } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  greet: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}!`;
    }),
  hi: publicProcedure.query(({ ctx }) => `${ctx.message} user!`),
});

const createCaller = createCallerFactory(appRouter);
export const serverCaller = createCaller({ message: "Hello from server" });

export type AppRouter = typeof appRouter;
