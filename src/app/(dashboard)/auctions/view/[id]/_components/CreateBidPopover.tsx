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

export default function CreateBidPopover({ auctionId }: { auctionId: number }) {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const mutation = api.auction.createBid.useMutation({
    onSuccess: () => {
      setOpen(false);
      router.refresh();
    },
    onError(error, variables, context) {
      toast(error.message);
      setOpen(false);
    },
  });

  return (
    <Popover open={open}>
      <PopoverTrigger className="w-full" onClick={() => setOpen((r) => !r)}>
        <div className="flex w-full items-center justify-center rounded-lg border bg-card bg-red-600 p-4 text-card-foreground text-white shadow-sm">
          Təklif et
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="amount"> Məbləğ </Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <Button
            className="w-full"
            onClick={() => {
              mutation.mutate({
                auctionId,
                amount,
              });
            }}
          >
            {" "}
            Təklif etmək{" "}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
