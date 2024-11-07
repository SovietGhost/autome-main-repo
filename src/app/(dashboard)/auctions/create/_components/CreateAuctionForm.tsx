"use client";

import BrandSelect from "./BrandSelect";
import { useState } from "react";
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
import { api } from "~/trpc/react";

export default function CreateAuctionForm({
  firstImageURL,
  secondImageURL,
  thirdImageURL,
  fourthImageURL,
  fifthImageURL,
  sixthImageURL,
}: {
  firstImageURL: { url: string; uuid: string };
  secondImageURL: { url: string; uuid: string };
  thirdImageURL: { url: string; uuid: string };
  fourthImageURL: { url: string; uuid: string };
  fifthImageURL: { url: string; uuid: string };
  sixthImageURL: { url: string; uuid: string };
}) {
  const mutation = api.auction.createAuction.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Auction created successfully");
    },
  });

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

  const [insurancePaper, setInsurancePaper] = useState<string>("");
  const [techinalInspectionPaper, setTechinalInspectionPaper] =
    useState<string>("");
  const [frontImage, setFrontImage] = useState<string>("");
  const [backImage, setBackImage] = useState<string>("");
  const [sideImage, setSideImage] = useState<string>("");
  const [otherImage, setOtherImage] = useState<string>("");

  return (
    <form
      action={async () => {
        console.log(startDate, endDate);
        mutation.mutate({
          backImageUrl: backImage,
          brakeSystem,
          brand: make,
          carYear: year,
          category: "car",
          color,
          segment,
          description,
          endDate,
          engine,
          engineVol,
          frontImageUrl: frontImage,
          fuelType: fuel,
          insurancePaperUrl: insurancePaper,
          km,
          leading,
          location,
          model,
          name,
          sideImageUrl: sideImage,
          startPrice,
          startDate,
          techinalInspectionPaperUrl: techinalInspectionPaper,
          trailing,
          vin,
          otherImageUrl: otherImage,
        });
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
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(firstImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setInsurancePaper(firstImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="techinal">Texniki baxış sənədi</Label>
        <Input
          required
          id="techinal"
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(secondImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setTechinalInspectionPaper(secondImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="front-images">Ön</Label>
        <Input
          required
          id="front-images"
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(thirdImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setFrontImage(thirdImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="back-images">Arxa</Label>
        <Input
          required
          id="back-images"
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(fourthImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setBackImage(fourthImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="side-images">Yan</Label>
        <Input
          required
          id="side-images"
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(fifthImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setSideImage(fifthImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="other-images">Digər</Label>
        <Input
          id="other-images"
          type="file"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            const upload = await fetch(sixthImageURL.url, {
              method: "PUT",
              body: file,
              headers: { "Content-Type": file?.type ?? "" },
            });

            if (upload.ok) {
              console.log("Uploaded successfully!");
              console.log(await upload.text());
              setOtherImage(sixthImageURL.uuid + "");
            } else {
              console.error("Upload failed.");
            }
          }}
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
