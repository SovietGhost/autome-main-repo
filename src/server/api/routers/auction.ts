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
      });

      return bids;
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

      const auction = await ctx.db.auction.findUniqueOrThrow({
        where: {
          id: input.auctionId,
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
            take: 1,
            select: {
              amount: true,
              user_id: true,
            },
          },
        },
      });

      if (auction.owner_id === auth.userId) {
        throw new TRPCError({
          message: "Öz elanınıza təklif verə bilməzsiniz",
          code: "FORBIDDEN",
        });
      }

      // if the last bid was made by the same user, we don't allow them to bid again

      if (auction.bids[0] && auction.bids[0].user_id === auth.userId) {
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

      const bid = await ctx.db.bid.create({
        data: {
          amount: input.amount,
          user_id: auth.userId,
          auction_id: auction.id,
          enabled: true,
        },
      });

      console.log(`auction-${auction.id}`, "new-bid", {});
      try {
        await pusher.trigger(`auction-${auction.id}`, "new-bid", {});
      } catch (error) {
        console.error(error);
      }

      return bid;
    }),
});
