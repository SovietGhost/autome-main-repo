"use client";

import { enableAuction } from "../action";

export default function EnableAuctionButton({ id }: { id: number }) {
  return <button onClick={() => enableAuction(id)}>Activate</button>;
}
