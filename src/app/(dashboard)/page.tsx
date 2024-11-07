import { api } from "~/trpc/server";
import AboutSite from "../_components/common/AboutSite";
import AuctionGrid from "../_components/common/AuctionGrid";

import HomeBanner from "../_components/common/HomeBanner";
import VehicleSearchForm from "../_components/common/VehicleSearchForm";
import Link from "next/link";

export default async function Home({
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
    <main className="relative min-h-max w-full">
      <HomeBanner />
      <div className="rounded-md md:px-32 md:container md:mx-auto">
        <VehicleSearchForm />
      </div>
      <AboutSite />
      <main className="container mx-auto px-4 py-8 md:my-10">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Hərracları kəşf et
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Növbəti hərracı hara etməyi istədiyinizə qərar verin!
        </p>
        <div className="flex justify-between my-8 items-center">
          <p className="text-2xl font-medium">Avtomobillər</p>
          <Link className="text-primaryApp font-medium" href="/auctions">Hamısı</Link>
        </div>
        <AuctionGrid
          isHome={true}
          initialData={auctions.items}
          cursor={auctions.nextCursor ?? 0}
        />
      </main>
    </main>
  );
}
