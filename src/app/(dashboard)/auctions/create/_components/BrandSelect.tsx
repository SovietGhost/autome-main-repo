"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";

export default function BrandSelect({
  setMake,
  id
}: {
  id: string;
  setMake: (make: string) => void;
}) {
  const { data, isLoading } = api.make.make.useQuery();

  return (
    <Select onValueChange={setMake} required>
      <SelectTrigger id={id}>
        <SelectValue placeholder="Brend seç" />
      </SelectTrigger>
      <SelectContent>
        {!isLoading ? (
          data?.map((make) => (
            <SelectItem key={make} value={make}>
              {make}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={" "} disabled>
            No models found
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}

/*
 <div>
          <Label htmlFor="manufacturer">Manufacturer</Label>
          <Select value={manufacturer} onValueChange={setManufacturer}>
            <SelectTrigger id="manufacturer">
              <SelectValue placeholder="Select manufacturer" />
            </SelectTrigger>
            <SelectContent>
              {makeData?.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
              </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="model">Model</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {modelData?.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                  {(!modelData || modelData?.length === 0) && (
                    <SelectItem value={" "} disabled>
                      No models found
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
*/
