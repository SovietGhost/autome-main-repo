import Banner from "~/app/_components/common/Banner";
import CreateAuctionForm from "./_components/CreateAuctionForm";

export default function Page() {
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
        <CreateAuctionForm />
      </main>
    </>
  );
}
