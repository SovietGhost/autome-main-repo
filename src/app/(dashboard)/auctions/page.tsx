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
      <div className="bg-[#FAFAFA]">
        <main className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-center text-3xl font-bold">
            Hərracları kəşf et
          </h1>
          <AuctionGrid
            isHome={false}
            initialData={auctions.items}
            cursor={auctions.nextCursor ?? 0}
          />
        </main>
      </div>
    </>
  );
}
