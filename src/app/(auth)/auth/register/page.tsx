"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMoveBack } from "~/hooks/useMoveBack";
import Link from "next/link";
import AuthSidebar from "~/app/_components/common/AuthSidebar";
import GoogleSvg from "public/svgs/googleSvg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "~/server/auth/client";

import phoneNumberValidator from "libphonenumber-js";
import { auth } from "~/server/auth";
import { toast } from "sonner";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  tosFlag: boolean;
  ppFlag: boolean;
  phoneNumber: string;
}

const SignUp = () => {
  const router = useRouter();
  const moveBack = useMoveBack();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {
      email,
      confirm_password,
      firstName,
      lastName,
      password,
      ppFlag,
      phoneNumber,
      tosFlag,
    } = data;
    const result = phoneNumberValidator(phoneNumber, "AZ");

    if (!result?.isValid()) {
      toast.error("Telefon nömrə yanlışdır");
      return;
    }

    authClient.signUp.email(
      {
        email,
        name: `${firstName} ${lastName}`,
        password,
        phoneNumber: result.format("INTERNATIONAL"),
      },
      {
        onSuccess() {
          authClient.sendVerificationEmail(
            {
              email: email,
              callbackURL: window.location.origin,
            },
            {
              onSuccess() {
                router.push("/auth/login");
              },
              onError(message) {
                toast.error(message.error.message);
                router.push("/auth/login");
                // router.push("/auth/verification-link");
              },
            },
          );
        },
        onError(message) {
          toast.error(message.error.message);
        },
      },
    );
  };

  return (
    <div className="flex h-screen">
      <div className="hidden w-[35%] lg:flex">
        <AuthSidebar />
      </div>
      <div className="w-full px-5 py-5 md:w-[65%] md:px-20 md:py-11">
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={moveBack}
        >
          <div className="rotate-180">
            <ArrowRight />
          </div>
          Geri
        </div>
        <Link
          href="/"
          className="mx-auto flex w-full items-center justify-center py-5 md:hidden"
        >
          <Image
            width={500}
            height={500}
            className="w-28 md:w-[140px]"
            src="/logo.png"
            alt=""
          />
        </Link>
        <h2 className="mt-[50px] text-2xl font-semibold">Qeydiyyat</h2>
        <form>
          <div className="mt-5 grid gap-5 md:mt-7 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Ad</label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                className={`${errors.firstName && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.firstName && (
                <p className="text-sm text-primaryApp">Ad tələb edilir</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Soyad</label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                className={`${errors.lastName && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.lastName && (
                <p className="text-sm text-primaryApp">Soyad tələb edilir</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">E-poçt</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className={`${errors.email && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.email && (
                <p className="text-sm text-primaryApp">Email tələb edilir</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Telefon nömrəsi</label>
              <input
                type="tel"
                className={`${errors.phoneNumber && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
                {...register("phoneNumber", {
                  required: true,
                })}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-primaryApp">
                  Telefon nömrəni düzgün daxil edin
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Şifrə</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className={`${errors.password && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.password && (
                <p className="text-sm text-primaryApp">Parol tələb edilir</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Şifrə təkrarı</label>
              <input
                {...register("confirm_password", {
                  required: true,
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Parollar fərqlidir";
                    }
                  },
                })}
                type="password"
                className={`${errors.confirm_password && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.confirm_password && (
                <p className="text-sm text-primaryApp">Parollar fərqlidir</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 py-3 text-sm md:flex-row md:gap-10">
            <div className="flex w-full gap-1">
              <input
                type="checkbox"
                {...register("tosFlag", { required: true })}
              />
              <span className="text-sm">
                Mən bütün{" "}
                <a href="" className="text-blue-500 underline">
                  Şərtlər və Məxfilik
                </a>{" "}
                siyasəti ilə razıyam
                {errors.tosFlag && (
                  <p className="text-sm text-primaryApp">
                    Şərtlər və Məxfilik siyasətini qəbul edin.
                  </p>
                )}
              </span>
            </div>
            <div className="flex w-full gap-1">
              <input
                type="checkbox"
                {...register("ppFlag", { required: true })}
              />
              <span>
                {" "}
                <a href="" className="text-blue-500 underline">
                  Gizlilik siyasətini
                </a>{" "}
                qəbul edirəm{" "}
                {errors.ppFlag && (
                  <p className="text-sm text-primaryApp">
                    Şərtlər və Məxfilik siyasətini qəbul edin.
                  </p>
                )}
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10">
            <button
              onClick={handleSubmit(onSubmit)}
              className="flex h-[44px] w-full items-center justify-center rounded-lg bg-black text-white"
            >
              Qeydiyyat
            </button>
            <button className="flex h-[44px] w-full items-center justify-center gap-1 rounded-lg bg-[#E6E6E9] font-semibold duration-300 hover:bg-gray-300">
              <GoogleSvg />
              Google
            </button>
          </div>
          <div className="py-5 text-center">
            Artıq hesabınız var?{" "}
            <Link
              href="/auth/login"
              className="text-primaryApp hover:underline"
            >
              {" "}
              Daxil ol
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
