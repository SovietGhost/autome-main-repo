import { Auction } from "@prisma/client";
export default function AuctionMetadata({ auction }: { auction: Auction }) {
  const {
    name,
    brake_system,
    brand,
    car_year,
    category,
    color,
    description,
    end_date,
    start_date,
    start_price,
    segment,
    engine,
    engine_vol,
    fuel_type,
    km,
    leading,
    trailing,
    model,
    vin,
    location,
  } = auction;
  return (
    <>
      <div className="flex flex-col gap-4 shadow-sm rounded border p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">General Information</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <span className="font-bold">Name:</span>
                <span>{name}</span>
              </div>
              <div>
                <span className="font-bold">Category:</span>
                <span>{category}</span>
              </div>
              <div>
                <span className="font-bold">Brand:</span>
                <span>{brand}</span>
              </div>
              <div>
                <span className="font-bold">Model:</span>
                <span>{model}</span>
              </div>
              <div>
                <span className="font-bold">Year:</span>
                <span>{car_year}</span>
              </div>
              <div>
                <span className="font-bold">Color:</span>
                <span>{color}</span>
              </div>
              <div>
                <span className="font-bold">VIN:</span>
                <span>{vin}</span>
              </div>
              <div>
                <span className="font-bold">Location:</span>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">Technical Information</span>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-bold">Engine:</span>
                <span>{engine}</span>
              </div>
              <div>
                <span className="font-bold">Engine Volume:</span>
                <span>{engine_vol}</span>
              </div>
              <div>
                <span className="font-bold">Fuel Type:</span>
                <span>{fuel_type}</span>
              </div>
              <div>
                <span className="font-bold">Kilometers:</span>
                <span>{km}</span>
              </div>
              <div>
                <span className="font-bold">Brake System:</span>
                <span>{brake_system}</span>
              </div>
              <div>
                <span className="font-bold text-red-500">Leading:</span>
                <span>{leading}</span>
              </div>
              <div>
                <span className="font-bold text-red-500">Trailing:</span>
                <span>{trailing}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Description</span>
          <span>{description}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold col-span-full">Auction Information</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <span className="font-bold">Start Date:</span>
              <span>{start_date.toLocaleString()}</span>
            </div>
            <div>
              <span className="font-bold">End Date:</span>
              <span>{end_date.toLocaleString()}</span>
            </div>
            <div>
              <span className="font-bold">Start Price:</span>
              <span>{start_price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
