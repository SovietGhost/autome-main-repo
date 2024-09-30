/*
  Warnings:

  - Added the required column `leading` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `segment` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trailing` to the `Auction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auction" ADD COLUMN     "leading" TEXT NOT NULL,
ADD COLUMN     "segment" TEXT NOT NULL,
ADD COLUMN     "trailing" TEXT NOT NULL;
