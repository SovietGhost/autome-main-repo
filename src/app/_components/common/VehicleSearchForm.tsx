"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";

export default function VehicleSearchForm() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");

  const { data: makeData } = api.make.make.useQuery();
  const { data: modelData } = api.make.models.useQuery({
    make: manufacturer,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // const formData = { manufacturer, model, minYear, maxYear, minKm, maxKm };
  };

  const handleReset = () => {
    setManufacturer("");
    setModel("");
    setMinYear("");
    setMaxYear("");
    setMinKm("");
    setMaxKm("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[-32px] rounded-lg bg-white p-6 shadow-lg"
    >
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="manufacturer">İstehsalçı</Label>
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
              {/* Add more manufacturers as needed */}
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
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="flex-1">
            <Label htmlFor="minYear">Min Year</Label>
            <Input
              id="minYear"
              type="number"
              placeholder="Min"
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="maxYear">Max Year</Label>
            <Input
              id="maxYear"
              type="number"
              placeholder="Max"
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="flex-1">
            <Label htmlFor="minKm">Min Km</Label>
            <Input
              id="minKm"
              type="number"
              placeholder="Min"
              value={minKm}
              onChange={(e) => setMinKm(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="maxKm">Max Km</Label>
            <Input
              id="maxKm"
              type="number"
              placeholder="Max"
              value={maxKm}
              onChange={(e) => setMaxKm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button type="button" variant="outline" onClick={handleReset}>
          Sıfırla
        </Button>
        <Button type="submit" variant="default">
          Axtar
        </Button>
      </div>
    </form>
  );
}
