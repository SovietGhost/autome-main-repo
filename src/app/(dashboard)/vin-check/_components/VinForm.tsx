"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import VinLookupModal from "./VinLookupModal";

import { Loader2 } from "lucide-react";

type VinLookupOutput = {
  vin: string;
  country: string;
  manufacturer: string;
  model: string;
  class: string;
  region: string;
  wmi: string;
  vds: string;
  vis: string;
  year: number;
};

export default function VinForm() {
  const { mutate, isPending } = api.vin.lookup.useMutation();
  const [data, setData] = useState<VinLookupOutput | undefined>(undefined);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setData(undefined);
        const formData = new FormData(e.currentTarget);
        const vin = formData.get("vin");
        mutate(
          { vin: String(vin) },
          {
            onSuccess(data) {
              setData(data);
            },
          },
        );
      }}
    >
      <div className="w-full">
        <label
          htmlFor="vin_code"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          VİN
        </label>
        <div className="flex items-baseline">
          <Input
            id="vin_code"
            className="block w-full rounded-l-lg rounded-r-none border-r-0 focus-visible:ring-offset-0 focus:outline-none"
            placeholder="Avtomobilin təfərrüatlarını yoxlamaq üçün VIN kodunu daxil edin"
            required
            name="vin"
          />
          <Button className="rounded-l-none">Müraciət et</Button>
        </div>
        {isPending && (
          <div className="mx-auto w-max py-4">
            <Loader2 
              size={32} 
              className="text-red-600 animate-spin"
            />
          </div>
        )}
        {data && (
          <div className="mx-auto w-max py-4">
            <VinLookupModal vinData={data} />
          </div>
        )}
      </div>
    </form>
  );
}
