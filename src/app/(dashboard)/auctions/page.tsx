import AuctionGrid from "~/app/_components/common/AuctionGrid";
import Banner from "~/app/_components/common/Banner";
import { api } from "~/trpc/server";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    c: string;
  };
}) {
  const pagePreParsed = parseInt(searchParams.c, 10);
  const page = isNaN(pagePreParsed) ? 0 : pagePreParsed;

  const auctions = await api.auction.list({ cursor: page * 12, limit: 12 });

  return (
    <>
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Hərracları kəşf et
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Növbəti hərracı hara etməyi istədiyinizə qərar verin!
        </p>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Avtomobillər</h2>
          <a href="#" className="text-red-500 hover:underline">
            Hamısı
          </a>
        </div>

        <AuctionGrid initialData={auctions.items} cursor={auctions.nextCursor ?? 0} />
      </main>
    </>
  );
}
