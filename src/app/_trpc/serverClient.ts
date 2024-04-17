import { createCaller } from "@/server/routers/_app";
import { auth } from "@clerk/nextjs";

export const serverClient = createCaller({ auth: auth() });
