import { api } from "~/trpc/server";
import ProfileBanner from "../_components/ProfileBanner";
import Sidebar from "../_components/ProfileSidebar";
import AuctionCard from "~/app/_components/common/AuctionCard";

export default async function Page() {
  const auctions = await api.auction.userWonAuctions();
  return (
    <section>
      <ProfileBanner />
      <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-start gap-8">
            <Sidebar />
            <div className="w-full rounded-lg lg:w-[calc(75%-2rem)]">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {auctions.map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
