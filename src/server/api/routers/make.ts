import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Manufacturers } from "~/app/consts/manufacturers";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const makeRouter = createTRPCRouter({
  make: publicProcedure.query(() => {
    return Manufacturers.map((manufacturer) => manufacturer.brand);
  }),

  models: publicProcedure
    .input(
      z.object({
        make: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const make = Manufacturers.find(
        (manufacturer) => manufacturer.brand === input.make,
      );

      if (!make) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return make.models;
    }),
});
