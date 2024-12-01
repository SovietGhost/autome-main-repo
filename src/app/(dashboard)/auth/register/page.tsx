"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMoveBack } from "~/hooks/useMoveBack"
import Link from "next/link"
import AuthSidebar from "~/app/_components/common/AuthSidebar"
import GoogleSvg from "public/svgs/googleSvg"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Inputs {
    role: string
    firstName: string
    lastName: string
    email: string
    password: string
    confirm_password: string
}

const SignUp = () => {
    const moveBack = useMoveBack()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        defaultValues: { role: 'user' } // Set default role
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex h-screen">
            <div className="w-[35%] lg:flex hidden">
                <AuthSidebar />
            </div>
            <div className="md:w-[65%] w-full py-5 md:py-11 md:px-20 px-5">
                <div className="cursor-pointer flex items-center gap-1" onClick={moveBack} >
                    <div className="rotate-180">
                        <ArrowRight />
                    </div>
                    Geri
                </div>
                <Link href="/" className="md:hidden py-5 w-full mx-auto flex items-center justify-center">
                    <Image width={500} height={500} className="w-28 md:w-[140px]" src="/logo.png" alt="" />
                </Link>
                <h2 className="text-2xl font-semibold mt-[50px]">
                    Qeydiyyat
                </h2>
                <form>
                    <div className="grid md:grid-cols-2 md:gap-6 gap-5 md:mt-7 mt-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Ad</label>
                            <input {...register("firstName", { required: true })} type="text" className={`${errors.firstName && "bg-[#FFF3F3] outline-[#FE6666] "} border px-3 h-[40px] rounded-lg`} />
                            {errors.firstName && <p className="text-primaryApp text-sm">Ad tələb edilir</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Soyad</label>
                            <input {...register("lastName", { required: true })} type="text" className={`${errors.lastName && "bg-[#FFF3F3] outline-[#FE6666] "} border px-3 h-[40px] rounded-lg`} />
                            {errors.lastName && <p className="text-primaryApp text-sm">Soyad tələb edilir</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">E-poçt</label>
                            <input {...register("email", { required: true })} type="email" className={`${errors.email && "bg-[#FFF3F3] outline-[#FE6666]"} border px-3 h-[40px] rounded-lg`} />
                            {errors.email && <p className="text-primaryApp text-sm">Email tələb edilir</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Telefon nömrəsi</label>
                            <input type="number" className={`${errors.firstName && ""} border px-3 h-[40px] rounded-lg`} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Şifrə</label>
                            <input {...register("password", { required: true })} type="password" className={`${errors.password && "bg-[#FFF3F3] outline-[#FE6666] "} border px-3 h-[40px] rounded-lg`} />
                            {errors.password && <p className="text-primaryApp text-sm">Password tələb edilir</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Şifrə təkrarı</label>
                            <input
                                {...register("confirm_password", {
                                    required: true,
                                    validate: (val: string) => {
                                        if (watch('password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })}
                                type="password" className={`${errors.confirm_password && "bg-[#FFF3F3] outline-[#FE6666] "} border px-3 h-[40px] rounded-lg`} />
                            {errors.confirm_password && <p className="text-primaryApp text-sm">Your passwords do no match</p>}
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-between md:gap-10 gap-2 py-3 text-sm">
                        <div className="flex w-full gap-1 ">
                            <input type="checkbox" />
                            <span className="text-sm ">Mən bütün <a href="" className="text-blue-500 underline">Şərtlər</a> və Məxfilik siyasəti ilə razıyam</span>
                        </div>
                        <div className="w-full flex gap-1">
                            <input type="checkbox" />
                            <span> <a href="" className="text-blue-500 underline">Gizlilik siyasətini</a> qəbul edirəm </span>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-center justify-between mt-10 md:gap-10 gap-5">
                        <button onClick={handleSubmit(onSubmit)} className="w-full flex items-center justify-center h-[44px] bg-black text-white rounded-lg">
                            Qeydiyyat
                        </button>
                        <button className="w-full flex font-semibold items-center justify-center gap-1 h-[44px] bg-[#E6E6E9] hover:bg-gray-300 duration-300 rounded-lg">
                            <GoogleSvg />
                            Google
                        </button>
                    </div>
                    <div className="text-center py-5">
                        Artıq hesabınız var? <Link href='/auth/login' className="text-primaryApp hover:underline"> Daxil ol</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp