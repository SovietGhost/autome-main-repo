"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const data = [
  "A Seqmenti (Mini avtomobillər)",
  "B Seqmenti (Kompakt avtomobillər)",
  "C Seqmenti (Orta ölçülü avtomobillər)",
  "D Seqmenti (Böyük ölçülü avtomobillər)",
  "E Seqmenti (İcra avtomobilləri)",
  "F Seqmenti (Lüks avtomobillər)",
  "SUV Seqmenti (İdman Yolsuzluq Avtomobilləri)",
  "MPV Seqmenti (Miniven avtomobillər)",
  "Crossover Seqmenti",
  "Pikap Seqmenti",
];

export default function SegmentSelect({
  id,
  setSegment,
}: {
  id: string;
  setSegment: (segment: string) => void;
}) {
  return (
    <Select onValueChange={setSegment} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Segment" />
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
