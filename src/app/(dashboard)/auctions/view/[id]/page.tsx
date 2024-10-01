import { notFound } from "next/navigation";
import Banner from "~/app/_components/common/Banner";
import { api } from "~/trpc/server";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import AuctionViewCountdown from "~/app/_components/common/AuctionViewCountdown";
import CreateBidPopover from "./_components/CreateBidPopover";
import OldBidders from "./_components/OldBidders";
import AuctionMetadata from "./_components/Metadata";
import { Auction } from "@prisma/client";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    notFound();
  }

  let auction: Auction & {
    bids: {
      amount: number;
      user_id: string;
    }[];
  };

  try {
    auction = await api.auction.get(id);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <Banner />
      <main className="container mx-auto grid w-full grid-cols-1 px-4 py-8 md:grid-cols-2">
        <Carousel
          className="w-[320px]"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {auction.image_urls.map((image, key) => (
              <CarouselItem key={key}>
                <img src={image} alt={`image-${id}-${image}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{auction.name}</h1>
          <p className="text-gray-500">{auction.description}</p>
          <AuctionViewCountdown auction={auction} />
          <div className="flex gap-2">
            <div className="w-max rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
              ₼
              {auction.bids.length
                ? auction.bids[0]?.amount
                : auction.start_price}
            </div>
            <div className="w-full">
              <CreateBidPopover auctionId={auction.id} />
            </div>
          </div>
        </div>

        <div className="col-span-full mt-4 flex flex-col text-xl font-semibold text-red-600">
          <OldBidders id={auction.id} />
        </div>

        <div className="col-span-full mt-8 flex flex-col">
          <AuctionMetadata auction={auction} />
        </div>
      </main>
    </>
  );
}
