import { createCallerFactory, protectedProcedure, router } from "../trpc";
import { libraryRouter } from "./library-router";

export const appRouter = router({
  hi: protectedProcedure.query(({ ctx }) => {
    return { user: ctx.auth.userId };
  }),
  library: libraryRouter,
});

export const createCaller = createCallerFactory(appRouter);
// export const serverCaller = createCaller();

export type AppRouter = typeof appRouter;
