import { appRouter } from "@/server/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "@/server/context";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };
