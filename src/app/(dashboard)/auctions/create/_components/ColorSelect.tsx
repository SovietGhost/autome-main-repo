"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const data = [
  "Qara",
  "Yaş Asfalt",
  "Boz",
  "Gümüşü",
  "Tünd qırmızı",
  "Qırmızı",
  "Çəhrayı",
  "Narıncı",
  "Qızılı",
  "Sarı",
  "Yaşıl",
  "Açıq yaşıl",
  "Mavi",
  "Göy",
  "Bənövşəyi",
  "Qəhvəyi",
];

export default function ColorSelect({
  id,
  setColor,
}: {
  id: string;
  setColor: (color: string) => void;
}) {
  return (
    <Select onValueChange={setColor} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Rəng" />
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
