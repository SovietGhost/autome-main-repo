"use client";

import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Heart, Share2 } from "lucide-react";
import { Auction } from "@prisma/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { env } from "~/env";

import Countdown from "react-countdown";

const CountdownTimer = dynamic(() => import("./CountdownCard"), { ssr: false });

export default function AuctionCard({
  auction,
}: {
  auction: Auction & {
    bids: {
      amount: number;
    }[];
  };
}) {
  const handleShare = async () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        window.location.origin + "/auctions/" + auction.id,
      );
    }
  };

  return (
    <Card className="w-full overflow-hidden rounded-lg border border-gray-200">
      <CardHeader className="relative p-0">
        <img
          src={env.NEXT_PUBLIC_CLOUDFRONT_URL + auction.image_urls[0]}
          alt="Red sports car in a parking garage"
          className="h-[200px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <Countdown
            date={auction.end_date}
            renderer={({ completed, days, hours, minutes, seconds }) => {
              return completed ? null : (
                <CountdownTimer
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                />
              );
            }}
          />
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col items-start bg-white p-4">
        <div>
          <h3 className="mb-1 text-lg font-semibold">{auction.name}</h3>
          <div>₼{auction.bids[0]?.amount ?? auction.start_price}</div>
        </div>
        <div className="mt-2 flex space-x-2">
          <Link href={`/auctions/${auction.id}`}>
            <Button variant="destructive">Daxil ol →</Button>
          </Link>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
