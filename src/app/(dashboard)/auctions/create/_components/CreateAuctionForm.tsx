"use client";

import { useFormState } from "react-dom";
import { createAuction } from "~/app/actions/create_auction";
import BrandSelect from "./BrandSelect";
import { useEffect, useState } from "react";
import ModelSelect from "./ModelSelect";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import FuelSelect from "./FuelSelect";
import { Button } from "~/components/ui/button";
import { DateTimePicker } from "~/components/ui/datetime-local";
import ColorSelect from "./ColorSelect";
import SegmentSelect from "./SegmentSelect";
import LeadingSelect from "./LeadingSelect";
import TrailingSelect from "./TrailingSelect";
import { Textarea } from "~/components/ui/textarea";
import { toast } from "sonner";

export default function CreateAuctionForm() {
  const [state, action] = useFormState(createAuction, undefined);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [fuel, setFuel] = useState("");
  const [location, setLocation] = useState("");
  const [brakeSystem, setBrakeSystem] = useState("");
  const [engineVol, setEngineVol] = useState("");
  const [color, setColor] = useState("");
  const [segment, setSegment] = useState("");
  const [leading, setLeading] = useState("");
  const [trailing, setTrailing] = useState("");
  const [km, setKm] = useState("");
  const [vin, setVin] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [insurancePaper, setInsurancePaper] = useState<File | null>(null);
  const [techinalInspectionPaper, setTechinalInspectionPaper] =
    useState<File | null>(null);
  // const [images, setImages] = useState<File[]>([]);
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [sideImage, setSideImage] = useState<File | null>(null);
  const [otherImage, setOtherImage] = useState<File | null>(null);

  useEffect(() => {
    if (state?.error) {
      toast(state.error.message);
    }
  }, [state]);

  return (
    <form
      action={async () => {
        console.log(startDate, endDate);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("brand", make);
        formData.append("model", model);
        formData.append("carYear", year);
        formData.append("engine", engine);
        formData.append("engineVol", engineVol);
        formData.append("fuelType", fuel);
        formData.append("location", location);
        formData.append("brakeSystem", brakeSystem);
        formData.append("startPrice", startPrice);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("segment", segment);
        formData.append("leading", leading);
        formData.append("trailing", trailing);
        formData.append("color", color);
        formData.append("km", km);
        formData.append("vin", vin);
        formData.append("description", description);
        insurancePaper && formData.append("insurancePaper", insurancePaper);
        techinalInspectionPaper &&
          formData.append("techinalInspectionPaper", techinalInspectionPaper);
        // images.forEach((image) => formData.append("images", image, image.name));
        frontImage && formData.append("frontImage", frontImage);
        backImage && formData.append("backImage", backImage);
        sideImage && formData.append("sideImage", sideImage);
        otherImage && formData.append("otherImage", otherImage);

        console.log(formData);

        await action(formData);
      }}
      className="container mx-auto grid grid-cols-1 gap-4 px-4 pt-6 md:grid-cols-2"
    >
      <div>
        <Label htmlFor="name"> Hərrac adı </Label>
        <Input
          required
          id="name"
          type="text"
          placeholder="Qeyd Edin"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="brand"> Marka </Label>
        <BrandSelect id="brand" setMake={setMake} />
      </div>
      <div>
        <Label htmlFor="model"> Model </Label>
        <ModelSelect id="model" setModel={setModel} make={make} />
      </div>
      <div>
        <Label htmlFor="year"> İl </Label>
        <Input
          required
          id="year"
          type="number"
          placeholder="Qeyd edin"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="engine">Mühərrikin həcmi (sm3)</Label>
        <Input
          required
          id="engine"
          type="number"
          placeholder="Qeyd Edin"
          value={engineVol}
          onChange={(e) => setEngineVol(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="fuel">Yanacaq</Label>
        <FuelSelect id="fuel" setFuel={setFuel} />
      </div>
      <div>
        <Label htmlFor="engine">Mühərrik</Label>
        <Input
          required
          id="engine"
          type="text"
          placeholder="Qeyd Edin"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="location"> Ünvan </Label>
        <Input
          required
          id="location"
          type="text"
          placeholder="Qeyd Edin"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="brake"> Əyləc sistemi </Label>
        <Input
          required
          id="brake"
          type="text"
          placeholder="Qeyd Edin"
          value={brakeSystem}
          onChange={(e) => setBrakeSystem(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="segment"> Segment </Label>
        <SegmentSelect id="segment" setSegment={setSegment} />
      </div>
      <div>
        <Label htmlFor="leading"> Aparıcı tərəf </Label>
        <LeadingSelect id="leading" setLeading={setLeading} />
      </div>
      <div>
        <Label htmlFor="trailing"> Ötürücü növü </Label>
        <TrailingSelect id="trailing" setTrailing={setTrailing} />
      </div>
      <div>
        <Label htmlFor="color">Rəng</Label>
        <ColorSelect id="color" setColor={setColor} />
      </div>
      <div>
        <Label htmlFor="km">Kilometraj</Label>
        <Input
          required
          id="km"
          type="number"
          placeholder="Qeyd Edin"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="vin">VIN</Label>
        <Input
          required
          id="vin"
          type="text"
          placeholder="Qeyd Edin"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="insurance">Sığorta sənədi</Label>
        <Input
          required
          id="insurance"
          type="file"
          onChange={(e) => setInsurancePaper(e.target.files?.[0] ?? null)}
        />
      </div>
      <div>
        <Label htmlFor="techinal">Texniki baxış sənədi</Label>
        <Input
          required
          id="techinal"
          type="file"
          onChange={(e) =>
            setTechinalInspectionPaper(e.target.files?.[0] ?? null)
          }
        />
      </div>

      <div>
        <Label htmlFor="front-images">Ön</Label>
        <Input
          required
          id="front-images"
          type="file"
          onChange={(e) => setFrontImage(e.target.files?.[0] ?? null)}
        />
      </div>
      <div>
        <Label htmlFor="back-images">Arxa</Label>
        <Input
          required
          id="back-images"
          type="file"
          onChange={(e) => setBackImage(e.target.files?.[0] ?? null)}
        />
      </div>
      <div>
        <Label htmlFor="side-images">Yan</Label>
        <Input
          required
          id="side-images"
          type="file"
          onChange={(e) => setSideImage(e.target.files?.[0] ?? null)}
        />
      </div>
      <div>
        <Label htmlFor="other-images">Digər</Label>
        <Input
          id="other-images"
          type="file"
          onChange={(e) => setOtherImage(e.target.files?.[0] ?? null)}
        />
      </div>
      <div>
        <Label htmlFor="start-price">Başlanğıc qiymət</Label>
        <Input
          required
          id="start-price"
          type="number"
          placeholder="Qeyd Edin"
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
        />
      </div>
      <div>
        <DateTimePicker
          placeholder="Başlanğıc tarixi"
          value={startDate ? new Date(startDate) : undefined}
          onChange={(e) => setStartDate(e?.toISOString() ?? "")}
        />
      </div>
      <div>
        <DateTimePicker
          placeholder="Bitiş tarixi"
          value={endDate ? new Date(endDate) : undefined}
          onChange={(e) => setEndDate(e?.toISOString() ?? "")}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="description">Haqqında</Label>
        <Textarea
          required
          id="description"
          placeholder="Qeyd Edin"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button className="col-span-full"> Gonder </Button>
    </form>
  );
}
