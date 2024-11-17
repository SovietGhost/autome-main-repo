-- CreateTable
CREATE TABLE "Auction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "car_year" INTEGER NOT NULL,
    "engine_vol" DOUBLE PRECISION NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "segment" TEXT NOT NULL,
    "leading" TEXT NOT NULL,
    "trailing" TEXT NOT NULL,
    "brake_system" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "km" BIGINT NOT NULL,
    "vin" TEXT NOT NULL,
    "insurance_paper_url" TEXT NOT NULL,
    "techinal_inspection_paper_url" TEXT NOT NULL,
    "start_price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image_urls" TEXT[],
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Auction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bid" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,
    "auction_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Bid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auction_name_key" ON "Auction"("name");

-- AddForeignKey
ALTER TABLE "Bid" ADD CONSTRAINT "Bid_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "Auction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
