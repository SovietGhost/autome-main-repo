"use client";

import { Auction } from "@prisma/client";
import AuctionCard from "./AuctionCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationNext,
// } from "~/components/ui/pagination";
import { api } from "~/trpc/react";
import CarAuctionGridSkeleton from "./AuctionSkeleton";
import { Button } from "~/components/ui/button";

export default function AuctionGrid({
  initialData,
  cursor,
}: {
  initialData: (Auction & {
    bids: {
      amount: number;
    }[];
  })[];
  cursor: number;
}) {
  const { data, isLoading, fetchNextPage, fetchPreviousPage } =
    api.auction.list.useInfiniteQuery(
      {
        limit: 12,
      },
      {
        initialData: {
          pageParams: [undefined],
          pages: [
            {
              items: initialData,
              nextCursor: cursor,
            },
          ],
        },
        refetchInterval: 8000,
        refetchOnWindowFocus: true,
        getNextPageParam: (lastPage) => lastPage.nextCursor && lastPage.nextCursor,
      },
    );

  console.log(data)

  return (
    <>
      <Button onClick={() => fetchPreviousPage()}>Prev</Button>
      <Button onClick={() => fetchNextPage()}>Next</Button>
      {isLoading && <CarAuctionGridSkeleton />}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.pages.map((page) =>
          page.items.map((auction, i) => (
            <AuctionCard key={i} auction={auction} />
          )),
        )}
      </div>
    </>
  );
}
