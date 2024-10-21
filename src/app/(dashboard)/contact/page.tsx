import Banner from "~/app/_components/common/Banner";

export default function Page() {
  return (
    <main>
      <Banner />
      <div className="">
        <div className="bg-[#F8F8F8] py-6 md:py-[50px]">
          <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
            <div>
              <div>
                <div className="flex flex-col gap-1 text-center">
                  <h1 className="text-xl md:text-[32px]">Əlaqə</h1>
                  <p className="mt-1 text-sm text-[#05012380] md:text-base">
                    {" "}
                    Söhbətə qoşulun, sual verin, təklif və iradlarınızı
                    bildirin. Əlaqə həmişə xoşdur, belə ki, bizimlə əlaqə
                    saxlamaqdan çekinmeyin.{" "}
                  </p>
                </div>
                <div className="mt-8 flex flex-col justify-between gap-8 md:mt-[50px] md:flex-row">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-[3px] bg-red-600"></div>
                      <div>
                        <span className="mb-4 block text-sm font-medium md:text-lg">
                          Əlaqə
                        </span>
                        <img
                          className="w-28 md:w-[130px]"
                          src="/Logo.png"
                          alt=""
                        />
                        <p className="mt-[10px] md:text-lg">
                          Qeydiyyatdan keç, hərraca başla!
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] md:mt-[50px]">
                      <h3 className="font-medium md:text-xl">
                        Ümumi məlumat üçün bizə müraciət et:
                      </h3>
                      <div className="mt-4 flex flex-col gap-2">
                        <p>
                          <span className="font-medium">Ünvan:</span> Bakı
                          şəhəri, Ü.Hacıbəyli 80
                        </p>
                        <p>
                          <span className="font-medium">Tel:</span> (+994) 997429000
                        </p>
                        <p>
                          <span className="font-medium">E-mail:</span>{" "}
                          huseynzeynalli.info@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6015.747837659131!2d49.852519962344395!3d40.37980995856691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1725017670548!5m2!1saz!2saz"
                    className="w-full max-w-[600px] rounded-xl border-none"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
