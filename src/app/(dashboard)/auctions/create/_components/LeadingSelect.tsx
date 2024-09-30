"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const data = [
  "Arxa təkər ötürücülü (RWD)",
  "Ön təkərli (FWD)",
  "Dördtəkərli (4WD)",
  "Tam ötürücülü (AWD)",
];

export default function LeadingSelect({
  id,
  setLeading,
}: {
  id: string;
  setLeading: (leading: string) => void;
}) {
  return (
    <Select onValueChange={setLeading} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Aparıcı" />
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
