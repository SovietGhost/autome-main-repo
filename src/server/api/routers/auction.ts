import { Auction, Bid } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { pusher } from "~/server/pusher/server";

export const auctionRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        cursor: z.number().optional(),
        limit: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit = 12 } = input;

      const items = await ctx.db.auction.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          end_date: {
            gte: new Date(),
          },
          enabled: true,
        },
        include: {
          bids: {
            orderBy: {
              amount: "desc",
            },
            take: 1,
            select: {
              amount: true,
            },
          },
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;

      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      return {
        items,
        nextCursor,
      };
    }),

  get: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const auction = await ctx.db.auction.findUniqueOrThrow({
      where: {
        id: input,
        // end_date: {
        //   gte: new Date(),
        // },
        enabled: true,
      },
      include: {
        bids: {
          orderBy: {
            amount: "desc",
          },
          take: 5,
          select: {
            amount: true,
            user_id: true,
          },
        },
      },
    });

    return auction;
  }),

  listUserCreatedAuctions: protectedProcedure
    .input(
      z.object({
        cursor: z.number().optional(),
        limit: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit = 12 } = input;

      const items = await ctx.db.auction.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          owner_id: ctx.auth.user.id,
          enabled: true,
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;

      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      return {
        items,
        nextCursor,
      };
    }),

  listUserCompetedAuctions: protectedProcedure
    .input(
      z.object({
        cursor: z.number().optional(),
        limit: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit = 12 } = input;

      const items = await ctx.db.auction.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          bids: {
            some: {
              user_id: ctx.auth.user.id,
            },
          },
          enabled: true,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;

      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      return {
        items,
        nextCursor,
      };
    }),

  getLastFiveBids: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const bids = await ctx.db.bid.findMany({
        take: 5,
        orderBy: {
          created_at: "desc",
        },
        where: {
          auction_id: input,
          enabled: true,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });

      return bids;
    }),

  createAuction: protectedProcedure
    .input(
      z
        .object({
          name: z.string(),
          description: z.string(),
          startPrice: z.string().transform(Number),
          location: z.string(),
          startDate: z.string(),
          endDate: z.string(),
          model: z.string(),
          brand: z.string(),
          category: z.string().default("Car"),
          fuelType: z.string(),
          segment: z.string(),
          trailing: z.string(),
          leading: z.string(),
          engine: z.string(),
          brakeSystem: z.string(),
          color: z.string(),
          vin: z.string(),
          carYear: z.string().transform(Number),
          engineVol: z.string().transform(Number),
          km: z.string().transform(BigInt),
          insurancePaperUrl: z.string(),
          techinalInspectionPaperUrl: z.string(),
          frontImageUrl: z.string(),
          backImageUrl: z.string(),
          sideImageUrl: z.string(),
          otherImageUrl: z.string().optional(),
        })
        .refine((input) => {
          console.log(
            new Date(input.startDate),
            new Date(input.endDate),
            input.startDate,
            input.endDate,
          );
          return (
            new Date(input.startDate).getTime() <
            new Date(input.endDate).getTime()
          );
        }, "Start date must be before end date"),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        backImageUrl,
        brakeSystem,
        brand,
        carYear,
        category,
        color,
        description,
        endDate,
        engine,
        engineVol,
        frontImageUrl,
        fuelType,
        insurancePaperUrl,
        km,
        leading,
        location,
        model,
        name,
        otherImageUrl,
        segment,
        startPrice,
        startDate,
        techinalInspectionPaperUrl,
        trailing,
        vin,
        sideImageUrl,
      } = input;

      console.log(input);

      const auction = await ctx.db.auction.create({
        data: {
          brake_system: brakeSystem,
          brand,
          car_year: carYear,
          category,
          color,
          description,
          end_date: new Date(endDate),
          engine,
          engine_vol: engineVol,
          fuel_type: fuelType,
          insurance_paper_url: insurancePaperUrl,
          km,
          leading,
          location,
          model,
          name,
          segment,
          start_price: startPrice,
          start_date: new Date(startDate),
          techinal_inspection_paper_url: techinalInspectionPaperUrl,
          trailing,
          vin,
          image_urls: otherImageUrl
            ? [frontImageUrl, backImageUrl, sideImageUrl, otherImageUrl]
            : [frontImageUrl, backImageUrl, sideImageUrl],
          owner_id: ctx.auth.user.id,
          enabled: false,
        },
      });

      return auction;
    }),

  createBid: protectedProcedure
    .input(
      z.object({
        auctionId: z.number(),
        amount: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { auth } = ctx;
      let auction: {
        bids: {
          amount: number;
          user_id: string;
        }[];
      } & Auction;

      return ctx.db.$transaction(async (tx) => {
        try {
          auction = await tx.auction.findUniqueOrThrow({
            where: {
              id: input.auctionId,
              end_date: {
                gte: new Date(),
              },
              enabled: true,
            },
            include: {
              bids: {
                orderBy: {
                  amount: "desc",
                },
                take: 1,
                select: {
                  amount: true,
                  user_id: true,
                },
              },
            },
          });
        } catch (error) {
          throw new TRPCError({
            message: "Təklif yaradarkən xəta baş verdi",
            code: "INTERNAL_SERVER_ERROR",
          });
        }

        if (auction.owner_id === auth.user.id) {
          throw new TRPCError({
            message: "Öz elanınıza təklif verə bilməzsiniz",
            code: "FORBIDDEN",
          });
        }

        // if the last bid was made by the same user, we don't allow them to bid again

        if (auction.bids[0] && auction.bids[0].user_id === auth.user.id) {
          throw new TRPCError({
            message: "Siz artıq ən yüksək təklifi vermisiniz",
            code: "FORBIDDEN",
          });
        }

        if (
          (auction.bids[0] && auction.bids[0].amount >= input.amount) ||
          input.amount < auction.start_price
        ) {
          throw new TRPCError({
            message: "Yeni təklif ən yüksək təklifdən böyük olmalıdır",
            code: "FORBIDDEN",
          });
        }

        if (
          (auction.bids[0] && input.amount - auction.bids[0].amount < 50) ||
          input.amount - auction.start_price < 50
        ) {
          throw new TRPCError({
            message: "Yeni təklif ən yüksək təklifdən 50 AZN-dən çox olmalıdır",
            code: "FORBIDDEN",
          });
        }

        let bid: Bid;

        try {
          bid = await tx.bid.create({
            data: {
              amount: input.amount,
              user_id: auth.user.id,
              auction_id: auction.id,
              enabled: true,
            },
          });
          await tx.auction.update({
            where: {
              id: input.auctionId,
            },
            data: {
              end_date: new Date(auction.end_date.getTime() + 15_000),
            },
          });
        } catch (error) {
          console.error(error);
          throw new TRPCError({
            message: "Təklif verilərkən xəta baş verdi",
            code: "INTERNAL_SERVER_ERROR",
          });
        }

        console.log(`auction-${auction.id}`, "new-bid", {});

        try {
          await pusher.trigger(`auction-${auction.id}`, "new-bid", {});
        } catch (error) {
          console.error(error);
          throw new TRPCError({
            message: "Təklif verilərkən xəta baş verdi",
            code: "INTERNAL_SERVER_ERROR",
          });
        }

        return bid;
      });
    }),

  didUserWonAuction: protectedProcedure
    .input(
      z.object({
        auctionId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const bid = await ctx.db.bid.findFirst({
        where: {
          auction: {
            id: input.auctionId,
            enabled: true,
            end_date: {
              lte: new Date(),
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
        take: 1,
      });

      return !!bid;
    }),

  userWonAuctions: protectedProcedure.query(async ({ ctx }) => {
    const wonAuctions = await ctx.db.auction.findMany({
      where: {
        bids: {
          some: {
            user_id: ctx.auth.user.id,
          },
        },
      },
      include: {
        bids: {
          orderBy: {
            created_at: "desc",
          },
          take: 1,
        },
      },
    });

    const auctionsWon = wonAuctions.filter(
      (auction) => auction.bids[0]?.user_id === ctx.auth.user.id,
    );

    return auctionsWon;
  }),
});
