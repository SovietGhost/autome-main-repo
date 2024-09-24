import Banner from "~/app/_components/common/Banner";

export default function Page() {
  return (
    <>
      <Banner />
      <div className="bg-[#F8F8F8] py-6 md:py-[50px]">
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <div className="flex flex-col gap-1 text-center">
                <h1 className="text-xl md:text-[32px]">Qaydalar</h1>
                <p className="mt-1 text-sm text-[#05012380] md:text-base">
                  Maraqlı hərraclar üçün əsas ünvanınız olan AUTOME.AZ-a xoş
                  gəlmisiniz!{" "}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-8 md:mt-[50px]">
                <div className="rounded-xl bg-white p-5 md:w-[calc(50%-2rem)]">
                  <span className="text-red-600">1.</span>
                  <h2 className="mb-5 mt-2 text-lg">Ümumi qaydalar </h2>
                  <ul className="list-disc pl-5 text-[#44415A]">
                    <li>
                      Hərrac elanı dərc edildikdən sonra 72 saat ərzində heçbir
                      artırma təklifi gəlməzsə elan avtomatik bitəcəkdir.{" "}
                    </li>
                    <li>
                      Son təklifdən sonra 48 saat ərzində heçbir artırma təklifi
                      gəlməzsə elan avtomatik bitəcəkdir.{" "}
                    </li>
                    <li>
                      Heç bir təklif almadan bitən elanların hərrac elan etmə
                      haqqı ödənişsiz bərpa ediləcəkdir. (Hər şəxs üçün sadəcə 2
                      dəfə){" "}
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-5 md:w-[calc(50%-2rem)]">
                  <span className="text-red-600">1.</span>
                  <h2 className="mb-5 mt-2 text-lg">Ümumi qaydalar </h2>
                  <ul className="list-disc pl-5 text-[#44415A]">
                    <li>
                      Hərrac elanı dərc edildikdən sonra 72 saat ərzində heçbir
                      artırma təklifi gəlməzsə elan avtomatik bitəcəkdir.{" "}
                    </li>
                    <li>
                      Son təklifdən sonra 48 saat ərzində heçbir artırma təklifi
                      gəlməzsə elan avtomatik bitəcəkdir.{" "}
                    </li>
                    <li>
                      Heç bir təklif almadan bitən elanların hərrac elan etmə
                      haqqı ödənişsiz bərpa ediləcəkdir. (Hər şəxs üçün sadəcə 2
                      dəfə){" "}
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-5 md:w-[calc(50%-2rem)]">
                  <span className="text-red-600">2.</span>
                  <h2 className="mb-5 mt-2 text-lg">Alıcılar</h2>
                  <ul className="list-disc pl-5 text-[#44415A]">
                    <li>
                      Hərracda iştirak edən şəxs 2 dəfə ardıcıl hərracda qalib
                      olub lakin ödənişdən imtina edərsə, hərracdan məhrum
                      edilir və cərimə məbləği (10 manat) təyin olunacaqdır .
                      Əgər şəxs ilk dəfə bunu edirsə, növbəti belə hal cərimə
                      ediləcəyinə dair xəbərdar edilir.{" "}
                    </li>
                    <li>
                      {" "}
                      Şəxs qalib gəlib lakin hərrac sahibi nəqliyyat vasitəsinin
                      satışından imtina edərsə, qalib gələn şəxsin hərracda
                      iştirak və təklif etmə haqqı ödənişsiz şəkildə bərpa
                      olunur.
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-5 md:w-[calc(50%-2rem)]">
                  <span className="text-red-600">2.</span>
                  <h2 className="mb-5 mt-2 text-lg">Alıcılar</h2>
                  <ul className="list-disc pl-5 text-[#44415A]">
                    <li>
                      Hərracda iştirak edən şəxs 2 dəfə ardıcıl hərracda qalib
                      olub lakin ödənişdən imtina edərsə, hərracdan məhrum
                      edilir və cərimə məbləği (10 manat) təyin olunacaqdır .
                      Əgər şəxs ilk dəfə bunu edirsə, növbəti belə hal cərimə
                      ediləcəyinə dair xəbərdar edilir.{" "}
                    </li>
                    <li>
                      {" "}
                      Şəxs qalib gəlib lakin hərrac sahibi nəqliyyat vasitəsinin
                      satışından imtina edərsə, qalib gələn şəxsin hərracda
                      iştirak və təklif etmə haqqı ödənişsiz şəkildə bərpa
                      olunur.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
