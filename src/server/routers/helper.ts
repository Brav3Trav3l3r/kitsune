import { TRPCError } from "@trpc/server";

export const takeUniqueOrThrow = <T extends any[]>(values: T): T[number] => {
  if (values.length !== 1)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Found non unique or inexistent value",
    });
  return values[0]!;
};
