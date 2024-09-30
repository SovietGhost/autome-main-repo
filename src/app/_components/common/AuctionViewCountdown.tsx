"use client";

import { Auction } from "@prisma/client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = dynamic(() => import("./Countdown"), { ssr: false });

function getCountdownFromDate(date: Date): CountdownProps {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function AuctionViewCountdown({
  auction,
}: {
  auction: Auction;
}) {
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
    <div className="!text-black">
      <CountdownTimer {...countdown} black />
    </div>
  );
}
