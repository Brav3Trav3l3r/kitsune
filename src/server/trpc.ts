import { TRPCError, initTRPC } from "@trpc/server";
import { createContext } from "./context";

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});

export const { router, procedure: publicProcedure, createCallerFactory } = t;
export const protectedProcedure = t.procedure.use(isAuthed);
