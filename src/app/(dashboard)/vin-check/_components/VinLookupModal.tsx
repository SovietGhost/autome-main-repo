import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

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

function vinDataToAzerbaijani(payload: VinLookupOutput) {
  return {
    "VIN": payload.vin,
    "Ölkə": payload.country,
    "İstehsalçı": payload.manufacturer,
    "Model": payload.model,
    "Sinif": payload.class,
    "Region": payload.region,
    "WMI": payload.wmi,
    "VDS": payload.vds,
    "VIS": payload.vis,
    "İl": payload.year,
  };
}

interface VinLookupModalProps {
  vinData: VinLookupOutput;
}

export default function VinLookupModal({ vinData }: VinLookupModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">VİN nəticəsini gözləmlə</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>VIN Lookup nəticəsi</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-4">
            {Object.entries(vinDataToAzerbaijani(vinData)).map(([key, value]) => (
              <div key={key} className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <span className="text-lg font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
