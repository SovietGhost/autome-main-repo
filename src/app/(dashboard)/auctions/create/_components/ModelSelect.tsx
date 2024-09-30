"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";

export default function ModelSelect({
  setModel,
  make,
  id
}: {
  setModel: (model: string) => void;
  make: string;
  id: string;
}) {
  const { data, isLoading, isError } = api.make.models.useQuery({
    make,
  });

  return (
    <Select onValueChange={setModel} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Model seç" />
      </SelectTrigger>
      <SelectContent>
        {!isLoading &&
          data?.map((model) => (
            <SelectItem key={model} value={model}>
              {model}
            </SelectItem>
          ))}
        {(isLoading || isError) && (
          <SelectItem value={" "} disabled>
            No models found
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}
