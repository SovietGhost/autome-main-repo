import { Card } from "~/components/ui/card"
import type { Auction } from "@prisma/client"

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
    engine,
    engine_vol,
    fuel_type,
    km,
    leading,
    trailing,
    model,
    vin,
    location,
  } = auction

  return (
    <Card className="p-6 space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Avtomobil məlumatı</h2>
        <div className="grid grid-cols-2 gap-y-2">
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">İstehsalçı:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{brand}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">Model:</span>
          </div>
          <div className="px-4 py-2">
            <span>{model}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Kateqoriya:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{category}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">İl:</span>
          </div>
          <div className="px-4 py-2">
            <span>{car_year}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Mühərrikin Həcmi:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{engine_vol}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">Yanacaq növü:</span>
          </div>
          <div className="px-4 py-2">
            <span>{fuel_type}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Rəng:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{color}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">Kilometr:</span>
          </div>
          <div className="px-4 py-2">
            <span>{km}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">VİN kod:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{vin}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">At gücü:</span>
          </div>
          <div className="px-4 py-2">
            <span>{engine}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Şəhər:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{location}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">Ötürücü növü:</span>
          </div>
          <div className="px-4 py-2">
            <span>{brake_system}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Aparıcı tərəf:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{leading}</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-semibold">Sükan yeri:</span>
          </div>
          <div className="px-4 py-2">
            <span>{trailing}</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span className="font-semibold">Hərracın başlama tarixi:</span>
          </div>
          <div className="bg-muted px-4 py-2">
            <span>{start_date.toLocaleString()}</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Təfərrüatlar</h2>
        <p className="text-muted-foreground">{description}</p>
      </section>
    </Card>
  )
}