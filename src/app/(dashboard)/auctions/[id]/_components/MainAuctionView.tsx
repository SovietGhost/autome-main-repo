"use client";

import AuctionViewCountdown from "~/app/_components/common/AuctionViewCountdown";
import { api } from "~/trpc/react";
import CreateBidPopover from "./CreateBidPopover";
import { Skeleton } from "~/components/ui/skeleton";

export default function MainAuctionView({ id }: { id: number }) {
  const { data: auction, isLoading, refetch } = api.auction.get.useQuery(id);

  if (isLoading) return <AuctionViewSkeleton />;

  if (!auction) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{auction.name}</h1>
      <p className="text-gray-500">{auction.description}</p>
      <AuctionViewCountdown auctionId={auction.id} date={auction.end_date} />
      <div className="flex gap-2">
        <div className="flex w-max items-center rounded-lg border bg-card p-2 text-center text-card-foreground shadow-sm">
          ₼{auction.bids.length ? auction.bids[0]?.amount : auction.start_price}
        </div>
        {auction.end_date.getTime() - Date.now() > 0 ? (
          <div className="w-full">
            <CreateBidPopover refetch={refetch} auctionId={auction.id} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function AuctionViewSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-full" />
    </div>
  );
}
