import { env } from "~/env";

import Banner from "~/app/_components/common/Banner";
import CreateAuctionForm from "./_components/CreateAuctionForm";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: env.AWS_REGION,

  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

const command = (Key: string) =>
  new PutObjectCommand({
    Bucket: env.AWS_BUCKET_NAME,
    Key,
  });

export default async function Page() {
  const uuids = [
    crypto.randomUUID(),
    crypto.randomUUID(),
    crypto.randomUUID(),
    crypto.randomUUID(),
    crypto.randomUUID(),
    crypto.randomUUID(),
  ] as const;

  const [
    firstImageURL,
    secondImageURL,
    thirdImageURL,
    fourthImageURL,
    fifthImageURL,
    sixthImageURL,
  ]: [string, string, string, string, string, string] = (await Promise.all(
    uuids.map((uuid) => getSignedUrl(s3, command(uuid), { expiresIn: 3600 })),
  )) as [string, string, string, string, string, string];

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
            İştirak et, al-sat, fürsətlərdən yararlan. Hərraclar bir məkanda
            əlinin altında buyur başla.
          </p>
        </div>
        <CreateAuctionForm
          firstImageURL={{
            url: firstImageURL,
            uuid: uuids[0],
          }}
          secondImageURL={{
            url: secondImageURL,
            uuid: uuids[1],
          }}
          thirdImageURL={{
            url: thirdImageURL,
            uuid: uuids[2],
          }}
          fourthImageURL={{
            url: fourthImageURL,
            uuid: uuids[3],
          }}
          fifthImageURL={{
            url: fifthImageURL,
            uuid: uuids[4],
          }}
          sixthImageURL={{
            url: sixthImageURL,
            uuid: uuids[5],
          }}
        />
      </main>
    </>
  );
}
