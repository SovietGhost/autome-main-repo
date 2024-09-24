import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vinRouter = createTRPCRouter({
  lookup: publicProcedure
    .input(
      z.object({
        vin: z.string(),
      }),
    )
    .mutation(async (ctx) => {
      const { vin } = ctx.input;

      return {
        vin,
        country: "Japan",
        manufacturer: "Only available for premium subscribers.",
        model: "Only available for premium subscribers.",
        class: "Only available for premium subscribers.",
        region: "Asia",
        wmi: "JH4",
        vds: "KA7561",
        vis: "PC008269",
        year: 2023,
      };
    }),
});
