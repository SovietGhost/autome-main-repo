"use client";

import Countdown from "react-countdown";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Confetti } from "./Confetti";
import { api } from "~/trpc/react";

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

function getDateFromCountdown(countdown: CountdownProps): Date {
  const now = new Date();
  const { days, hours, minutes, seconds } = countdown;

  const totalMilliseconds =
    days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000;

  return new Date(now.getTime() + totalMilliseconds);
}

export default function AuctionViewCountdown({
  date,
  auctionId,
}: {
  date: Date;
  auctionId: number;
}) {
  const { data: didWon } = api.auction.didUserWonAuction.useQuery({
    auctionId,
  });

  return (
    <Countdown
      date={date}
      renderer={(date) => {
        const { days, hours, minutes, seconds, completed } = date;
        return completed ? (
          didWon ? (
            <Confetti duration={4000} />
          ) : null
        ) : (
          <CountdownTimer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            black
          />
        );
      }}
    />
  );
}
