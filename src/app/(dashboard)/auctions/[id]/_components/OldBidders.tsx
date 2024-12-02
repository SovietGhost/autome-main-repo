"use client";

import { Channel } from "pusher-js";
import { useEffect, useState } from "react";
import { client } from "~/server/pusher/client";
import { api } from "~/trpc/react";

export default function OldBidders({ id }: { id: number }) {
  const [audio] = useState(new Audio("/bid-notification.mp3"))
  const [channel, setChannel] = useState<Channel | null>(null);

  useEffect(() => {
    const channel = client.subscribe(`auction-${id}`);
    setChannel(channel);
  }, []);

  const {
    data: bidders,
    refetch,
    isLoading,
  } = api.auction.getLastFiveBids.useQuery(id);

  useEffect(() => {
    if (channel) {
      channel.bind("new-bid", () => {
        audio.play();
        refetch();
      });
    }
  }, [channel]);

  if (isLoading) {
    return <div className="mx-auto text-black">Loading...</div>;
  }

  if (!bidders || bidders.length === 0) {
    return <div className="mx-auto text-black">Təklif verən yoxdur</div>;
  }

  return (
    <div className="shadow-sm border p-4 rounded">
      <h2 className="mx-auto text-xl font-bold text-black">Son 5 təklif</h2>
      <ul>
        {bidders.map((bid, index) => (
          <li key={index}>
            {bid.amount} - {bid.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
