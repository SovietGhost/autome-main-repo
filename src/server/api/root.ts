import { vinRouter } from "~/server/api/routers/vin";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { makeRouter } from "./routers/make";
import { emailRouter } from "./routers/email";
import { auctionRouter } from "./routers/auction";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  vin: vinRouter,
  make: makeRouter,
  email: emailRouter,
  auction: auctionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
