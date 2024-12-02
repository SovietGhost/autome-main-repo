"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMoveBack } from "~/hooks/useMoveBack";
import AuthSidebar from "~/app/_components/common/AuthSidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import GoogleSvg from "public/svgs/googleSvg";
import Image from "next/image";
import { authClient } from "~/server/auth/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Inputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const router = useRouter();
  const moveBack = useMoveBack();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password, rememberMe } = data;

    authClient.signIn.email(
      {
        email,
        password,
        rememberMe,
      },
      {
        onSuccess() {
          router.push("/");
        },
        onError(message) {
          toast.error(message.error.message);
        },
      },
    );
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:hidden md:w-[35%] lg:flex">
        <AuthSidebar />
      </div>
      <div className="w-full p-4 md:p-20 lg:w-[65%]">
        <div
          className="flex cursor-pointer items-center gap-1"
          onClick={moveBack}
        >
          <div className="rotate-180">
            <ArrowRight />
          </div>
          Geri
        </div>
        <div className="mx-auto flex w-full items-center justify-center py-5 md:hidden">
          <Image
            width={500}
            height={500}
            className="w-28 md:w-[140px]"
            src="/Logo.png"
            alt=""
          />
        </div>
        <h2 className="mt-[50px] text-2xl font-semibold">Daxil ol</h2>

        <form>
          <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2">
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
              <div className="hidden items-center justify-between md:flex">
                <div>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm hover:underline"
                  >
                    Şifrəni unutmusunuz?
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Şifrə</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className={`${errors.password && "bg-[#FFF3F3] outline-[#FE6666]"} h-[40px] rounded-lg border px-3`}
              />
              {errors.password && (
                <p className="text-sm text-primaryApp">Password tələb edilir</p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <input type="checkbox" {...register("rememberMe")} />
                  <span>Məni xatırla</span>
                </div>
                <div>
                  <Link href="/auth/forgot-password" className="text-sm">
                    Şifrəni unutmusunuz?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10">
            <div className="flex w-full items-center justify-center rounded-lg bg-black text-white">
              <button
                onClick={handleSubmit(onSubmit)}
                className="flex w-full cursor-pointer justify-center py-2"
              >
                Daxil ol
              </button>
            </div>
            <div className="flex w-full items-center justify-center gap-1 rounded-lg bg-[#E6E6E9]">
              <button className="flex w-full justify-center gap-1 rounded-lg py-2 font-semibold duration-300 hover:bg-gray-300">
                <GoogleSvg /> Google
              </button>
            </div>
          </div>
          <div className="py-5 text-center">
            Hesabınız yoxdur?{" "}
            <Link
              href="/auth/register"
              className="text-primaryApp hover:underline"
            >
              {" "}
              Qeydiyyatdan keçin
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
