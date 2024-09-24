import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="flex h-[50vh] w-full items-center bg-[url(/HomeBanner.png)] bg-cover bg-center bg-no-repeat lg:min-h-[90vh]">
      <div className="h-full w-full pt-32 text-white lg:flex lg:items-center lg:justify-between lg:gap-24 lg:pt-0">
        <div className="w-full rounded-2xl px-5 lg:w-[55%] lg:py-10 lg:pl-20">
          <div className="w-full">
            <span className="text-[24px] font-semibold uppercase text-[#00FF66]">
              Hərracın favori mərkəzi
            </span>
            <h1 className="mb-1 mt-2 text-xl font-semibold leading-[1.4] md:text-[40px] lg:text-[60px]">
              Qoşulun və ən yaxşı təklifləri əldə edin!
            </h1>
            <p className="text-xs opacity-90 md:text-[18px]">
              Onlayn auksionlarla dolu maraqlı dünyaya addım atın!
            </p>
            <div className="mt-10 flex flex-col gap-8 md:mb-10 md:mt-[70px] md:flex-row md:gap-12 lg:mb-0">
              <Link
                href="/automobiles"
                className="flex w-full items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-center text-sm duration-300 hover:bg-[#D00B0B] md:w-fit"
              >
                İndi başla
              </Link>

              <Link
                className="w-full rounded-xl bg-white px-10 py-4 text-center text-sm text-black duration-300 hover:bg-[#ffffffd8] md:w-fit"
                href="/auction/add"
              >
                Elan et
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:block lg:w-[40%]">
          {/* <SearchForm /> */}
        </div>
      </div>
    </div>
  );
}
