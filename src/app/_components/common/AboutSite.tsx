import Image from "next/image";

export default function AboutSite() {
  return (
    <div className="my-[40px] mb-20">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-2xl font-semibold md:mb-[50px] md:text-4xl">
          İşləmə qaydası
        </h1>
        <div className="flex flex-col justify-between gap-[107px] lg:flex-row">
          <div className="relative flex flex-col items-center justify-center text-center">
            <div className="mb-6 rounded-3xl bg-red-600/[0.07] p-[34px]">
              <Image src={"/svgs/home/1.svg"} alt="1" width={32} height={32} />
            </div>
            <img
              className="absolute bottom-[-80px] right-7 w-[105px] rotate-90 lg:right-[-100px] lg:top-2 lg:w-fit lg:rotate-0"
              src="/arrows/arrow.png"
              alt=""
            />
            <h2 className="text-2xl font-medium">Qeydiyyatı tamamla</h2>
            <p className="text-[#828091]">
              Elanların paylaşılması və eləcədə məhsulları almaq üçün ilk öncə
              qeydiyyat etməyiniz gərəkdir.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center text-center">
            <div className="mb-6 rounded-3xl bg-red-600 p-[30px]">
              <Image src={"/svgs/home/2.svg"} alt="1" width={32} height={32} />
            </div>
            <img
              className="absolute bottom-[-100px] left-0 w-[105px] rotate-90 lg:bottom-[-64px] lg:left-[250px] lg:w-fit lg:rotate-0"
              src="/arrows/arrow-opposite.png"
              alt=""
            />
            <h2 className="text-2xl font-medium">Axtarın və avtomobil seçin</h2>
            <p className="text-[#828091]">
              Qeydiyyatdan bitdikdən sonra bir-birindən fərqli maşınlara nəzər
              yetirə və ala bilərsiniz..
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 rounded-3xl bg-red-600/[0.07] p-[30px]">
              <Image src={"/svgs/home/3.svg"} alt="1" width={32} height={32} />
            </div>
            <h2 className="text-2xl font-medium">
              Elan yerləşdirin və izləyin
            </h2>
            <p className="text-[#828091]">
              Həmçinin elan yerləşdirə və onu daimi bütün tüfürrüatları ilə
              izləmə imkanına sahibsiniz.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
