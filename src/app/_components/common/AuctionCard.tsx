"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Heart, Share2 } from "lucide-react";
import { Auction } from "@prisma/client";
import dynamic from "next/dynamic";
import Link from "next/link";

const CountdownTimer = dynamic(() => import("./Countdown"), { ssr: false });

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdownFromDate(date: Date): CountdownProps {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function AuctionCard({
  auction,
}: {
  auction: Auction & {
    bids: {
      amount: number;
    }[];
  };
}) {
  // Replace this with your actual target date

  const [countdown, setCountdown] = useState<CountdownProps>(
    getCountdownFromDate(auction.end_date),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownFromDate(auction.end_date));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full overflow-hidden rounded-lg border border-gray-200">
      <CardHeader className="relative p-0">
        <img
          src={auction.image_urls[0]}
          alt="Red sports car in a parking garage"
          className="h-[200px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <CountdownTimer {...countdown} />
        </div>
        <button className="absolute right-2 top-2 text-white">
          <Heart className="h-6 w-6" />
        </button>
      </CardHeader>
      <CardFooter className="flex items-center justify-between bg-white p-4">
        <div>
          <h3 className="mb-1 text-lg font-semibold">{auction.name}</h3>
          <div>₼{auction.bids[0]?.amount ?? auction.start_price}</div>
        </div>
        <div className="flex space-x-2">
          <Link href={`/auctions/view/${auction.id}`}>
          <Button variant="destructive">Daxil ol →</Button>
          </Link>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
