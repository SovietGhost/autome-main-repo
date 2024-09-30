/*
  Warnings:

  - Added the required column `brake_system` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_year` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engine` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engine_vol` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel_type` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insurance_paper_url` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `km` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `techinal_inspection_paper_url` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vin` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wheel_drive` to the `Auction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auction" ADD COLUMN     "brake_system" TEXT NOT NULL,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "car_year" INTEGER NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "engine" TEXT NOT NULL,
ADD COLUMN     "engine_vol" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fuel_type" TEXT NOT NULL,
ADD COLUMN     "insurance_paper_url" TEXT NOT NULL,
ADD COLUMN     "km" BIGINT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "techinal_inspection_paper_url" TEXT NOT NULL,
ADD COLUMN     "vin" TEXT NOT NULL,
ADD COLUMN     "wheel_drive" TEXT NOT NULL;
