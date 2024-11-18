"use client";

import { disableAuction, enableAuction } from "../action";

export default function ToggleAuctionButton({
  id,
  status,
}: {
  id: number;
  status: boolean;
}) {
  return status ? (
    <button onClick={() => enableAuction(id)}>Activate</button>
  ) : (
    <button onClick={() => disableAuction(id)}>Disactivate</button>
  );
}
