"use server";

import { auth } from "@clerk/nextjs/server";
import { Auction } from "@prisma/client";
import { z } from "zod";
import { LocalUploader } from "~/lib/upload/local_uploader";

import { db } from "~/server/db";

const createAuctionSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    startPrice: z.string().transform(Number),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    model: z.string(),
    brand: z.string(),
    category: z.string().default("Car"),
    fuelType: z.string(),
    segment: z.string(),
    trailing: z.string(),
    leading: z.string(),
    engine: z.string(),
    brakeSystem: z.string(),
    color: z.string(),
    vin: z.string(),
    carYear: z.string().transform(Number),
    engineVol: z.string().transform(Number),
    km: z.string().transform(BigInt),
    insurancePaper: z.custom<File>((file) => file instanceof File),
    techinalInspectionPaper: z.custom<File>((file) => file instanceof File),
    frontImage: z.custom<File>((file) => file instanceof File),
    backImage: z.custom<File>((file) => file instanceof File),
    sideImage: z.custom<File>((file) => file instanceof File),
    otherImage: z.custom<File>((file) => file instanceof File).optional(),
  })
  .refine((input) => {
    console.log(
      new Date(input.startDate),
      new Date(input.endDate),
      input.startDate,
      input.endDate,
    );
    return (
      new Date(input.startDate).getTime() < new Date(input.endDate).getTime()
    );
  }, "Start date must be before end date");

const uploader = new LocalUploader();

export async function createAuction(
  _prev: unknown,
  formData: FormData,
): Promise<{
  data?: Auction;
  error?: {
    message: string;
    errors: string[];
  };
}> {
  const authState = auth().protect();
  console.log(Object.fromEntries(formData));
  const input = await createAuctionSchema.safeParseAsync(
    Object.fromEntries(formData),
  );

  if (!input.success) {
    console.log(input.error.flatten());
    return {
      error: {
        message: "Invalid input",
        errors: input.error.issues.map((issue) => issue.toString()),
      },
    };
  }

  const {
    name,
    description,
    startPrice,
    location,
    startDate,
    endDate,
    model,
    brand,
    category,
    fuelType,
    engine,
    brakeSystem,
    color,
    leading,
    segment,
    trailing,
    vin,
    carYear,
    engineVol,
    km,
    insurancePaper,
    techinalInspectionPaper,
    backImage,
    frontImage,
    sideImage,
    otherImage,
  } = input.data;

  const images = [backImage, frontImage, sideImage, otherImage].filter(
    (i) => !!i,
  );

  try {
    const [insurancePaperUrl, techinalInspectionPaperUrl, ...imageUrls] =
      await Promise.all([
        uploader.upload(insurancePaper),
        uploader.upload(techinalInspectionPaper),
        ...images.map((image) => uploader.upload(image)),
      ]);

    const auctionResult = await db.auction.create({
      data: {
        owner_id: authState.userId,
        name,
        description,
        start_price: startPrice,
        location,
        image_urls: imageUrls,
        start_date: startDate,
        end_date: endDate,
        model,
        brand,
        category,
        fuel_type: fuelType,
        engine,
        brake_system: brakeSystem,
        color,
        vin,
        car_year: carYear,
        engine_vol: engineVol,
        km,
        insurance_paper_url: insurancePaperUrl,
        techinal_inspection_paper_url: techinalInspectionPaperUrl,
        leading,
        segment,
        trailing,
      },
    });

    return {
      data: auctionResult,
    };
  } catch (error: unknown) {
    return {
      error: {
        message: "Failed to create auction",
        errors: [(error as { message: string }).message],
      },
    };
  }
}