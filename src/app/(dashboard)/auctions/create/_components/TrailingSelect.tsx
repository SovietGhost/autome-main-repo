"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const data = ["Avtomatik", "Mexanik", "Robotlaşdırılmış", "Manual"];

export default function TrailingSelect({
  id,
  setTrailing,
}: {
  id: string;
  setTrailing: (trailing: string) => void;
}) {
  return (
    <Select onValueChange={setTrailing} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Ötürücü" />
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
