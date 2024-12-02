"use client";

import { Label } from "~/components/ui/label";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

export default function CreateBidPopover({ auctionId, refetch }: { auctionId: number, refetch: Function }) {
  const router = useRouter();
  const [amount, setAmount] = useState("0");
  const [open, setOpen] = useState(false);
  const mutation = api.auction.createBid.useMutation({
    onSuccess: () => {
      setOpen(false);
      refetch();
    },
    onError(error, variables, context) {
      toast(error.message[0] === "[" ? "Xəta baş verdi" : error.message);
      setOpen(false);
    },
  });

  return (
    <Popover open={open}>
      <PopoverTrigger className="w-full" onClick={() => setOpen((r) => !r)}>
        <div className="flex w-full items-center justify-center rounded-lg border bg-card bg-red-600 p-3 text-card-foreground text-white shadow-sm">
          Təklif et
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="amount"> Məbləğ </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button
            className="w-full"
            onClick={() => {
              mutation.mutate({
                auctionId,
                amount: parseInt(amount, 10),
              });
            }}
          >
            Təklif etmək
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
