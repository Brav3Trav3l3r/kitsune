import { initTRPC } from "@trpc/server";
import { createContext } from "./context";

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const { router, procedure: publicProcedure, createCallerFactory } = t;
