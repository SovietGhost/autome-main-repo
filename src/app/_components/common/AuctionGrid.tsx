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
import FilterAccordion from "./FilterAccordion";
import { useState } from "react";
import { ArrowDownWideNarrow, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function AuctionGrid({
  initialData,
  cursor,
  isHome
}: {
  initialData: (Auction & {
    bids: {
      amount: number;
    }[];
  })[];
  cursor: number;
  isHome: boolean
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

  const [isOpen, setisOpen] = useState(false)

  const handleOpen = function () {
    setisOpen(!isOpen)
  }

  const handleClose = function () {
    setisOpen(false)
  }

  return (
    <>
      {isLoading && <CarAuctionGridSkeleton />}
      <div className='flex flex-wrap gap-8 relative'>
        {!isHome && <div className={`${isOpen ? "block md:hidden absolute -top-56" : "hidden md:block"} w-full md:w-[calc(30%-2rem)] bg-white rounded`}>
          <FilterAccordion onClose={handleClose} open={isOpen} />
        </div>}
        <div className='w-full md:w-[calc(70%)]'>
          {!isHome && <div className='py-9 px-6 mb-5 bg-white rounded-lg flex justify-between items-center'>
            <span className='text-secondaryApp'>{data.pages[0]?.items.length} Hərrac </span>
            <div className='border border-[#0500FF40] p-1 rounded-sm block md:hidden'>
              <ArrowDownWideNarrow onClick={handleOpen} className='text-3xl' />
            </div>
          </div>}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.pages.map((page) =>
              page.items.map((auction, i) => (
                <AuctionCard key={i} auction={auction} />
              )),
            )}
          </div>
          {
            !isHome && <div className="flex justify-center gap-4 mt-[50px] items-center">
              <button onClick={() => fetchPreviousPage()} className="border border-[#C1BFC8] p-1 rounded-lg">
                <ChevronsLeft className="w-5" />
              </button>
              <ul className="flex gap-4">
                <li className="border border-black text-sm px-3 py-[6px] rounded-lg">1</li>
                <li className="border border-[#C1BFC8] text-sm px-3 py-[6px] rounded-lg">2</li>
              </ul>
              <button onClick={() => fetchNextPage()} className="border border-[#C1BFC8] p-1 rounded-lg">
                <ChevronsRight className="w-5" />
              </button>
            </div>
          }
        </div>
      </div>
    </>
  );
}
