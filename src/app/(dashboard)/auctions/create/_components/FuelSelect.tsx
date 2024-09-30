"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const data = ["Benzin", "Dizel", "Qaz", "Elektro", "Hibrid", "Plug-in Hibrid"];

export default function FuelSelect({
  id,
  setFuel,
}: {
  id: string;
  setFuel: (fuel: string) => void;
}) {
  return (
    <Select onValueChange={setFuel} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Yanacaq" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((make) => (
          <SelectItem key={make} value={make}>
            {make}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}