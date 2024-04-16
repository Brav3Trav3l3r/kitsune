import {
  SignedInAuthObject,
  SignedOutAuthObject,
  getAuth,
} from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ auth }: AuthContext) => {
  return {
    auth,
  };
};

export const createContext = async (opts: { req: NextRequest }) => {
  return await createContextInner({ auth: getAuth(opts.req) });
};

export type Context = Awaited<ReturnType<typeof createContext>>;
