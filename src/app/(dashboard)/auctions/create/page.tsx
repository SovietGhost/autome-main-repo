import { env } from "~/env"

import Banner from "~/app/_components/common/Banner";
import CreateAuctionForm from "./_components/CreateAuctionForm";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: env.AWS_REGION,
  endpoint: env.AWS_URL,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

const command = (Key: string) => new PutObjectCommand({
  Bucket: env.AWS_BUCKET_NAME,
  Key,
});

export default async function Page() {

  const [firstImageURL, secondImageURL, thirdImageURL, fourthImageURL, fifthImageURL, sixthImageURL] = await Promise.all([
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
    getSignedUrl(s3, command(crypto.randomUUID()), {expiresIn: 3600}),
  ]);

  return (
    <>
      <Banner />
      <main className="bg-[#F8F8F8] py-6 md:py-[50px]">
        <div className="flex flex-col gap-1 text-center">
          <span className="text-red-600">Vaxt itirmədən indi başla</span>
          <h1 className="text-xl md:text-[32px]">
            Online hərracla fürsətlərdən yararlan və vaxtına qənaət et!{" "}
          </h1>
          <p className="mt-1 text-sm text-[#05012380] md:text-base">
            {" "}
            İştirak et, al-sat, fürsətlərdən yararlan. Hərraclar bir məkanda
            əlinin altında buyur başla.
          </p>
        </div>
        <CreateAuctionForm
          firstImageURL={firstImageURL}
          secondImageURL={secondImageURL}
          thirdImageURL={thirdImageURL}
          fourthImageURL={fourthImageURL}
          fifthImageURL={fifthImageURL}
          sixthImageURL={sixthImageURL}
         />
      </main>
    </>
  );
}
