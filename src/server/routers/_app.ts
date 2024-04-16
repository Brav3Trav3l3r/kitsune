import { protectedProcedure, publicProcedure, router } from "../trpc";
import { libraryRouter } from "./library-router";

export const appRouter = router({
  hi: protectedProcedure.query(({ ctx }) => {
    return { user: ctx.auth.userId };
  }),
  library: libraryRouter,
});

// const createCaller = createCallerFactory(appRouter);
// export const serverCaller = createCaller({ auth: getAuth(req) });

export type AppRouter = typeof appRouter;
