"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMoveBack } from "~/hooks/useMoveBack"
import AuthSidebar from "~/app/_components/common/AuthSidebar"
import { SubmitHandler, useForm } from "react-hook-form"
import GoogleSvg from "public/svgs/googleSvg"
import Image from "next/image"

interface Inputs {
    email: string
    password: string
}

const Login = () => {
    const moveBack = useMoveBack()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        console.log(data)
    }

    return (
        <div className="flex md:flex-row flex-col h-screen">
            <div className="md:w-[35%] hidden lg:flex md:hidden ">
                <AuthSidebar />
            </div>
            <div className="lg:w-[65%] w-full md:p-20 p-4">
                <div className="cursor-pointer flex items-center gap-1" onClick={moveBack} >
                    <div className="rotate-180">
                        <ArrowRight />
                    </div>
                    Geri
                </div>
                <div className="md:hidden  py-5 w-full mx-auto flex items-center justify-center">
                    <Image width={500} height={500} className="w-28 md:w-[140px]" src="/Logo.png" alt="" />
                </div>
                <h2 className="text-2xl font-semibold mt-[50px]">Daxil ol</h2>

                <form>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">E-poçt</label>
                            <input {...register("email", { required: true })} type="email" className={`${errors.email && "bg-[#FFF3F3] outline-[#FE6666]"} border px-3 h-[40px] rounded-lg`} />
                            {errors.email && <p className="text-primaryApp text-sm">Email tələb edilir</p>}
                            <div className="md:flex hidden items-center justify-between">
                                <div>
                                    <Link href='/auth/forgot-password' className="text-sm hover:underline">Şifrəni unutmusunuz?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Şifrə</label>
                            <input {...register("password", { required: true })} type="password" className={`${errors.password && "bg-[#FFF3F3] outline-[#FE6666]"} border px-3 h-[40px] rounded-lg`} />
                            {errors.password && <p className="text-primaryApp text-sm">Password tələb edilir</p>}
                            <div className="md:hidden flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" />
                                    <span>Məni xatırla</span>
                                </div>
                                <div>
                                    <Link href='/auth/forgot-password' className="text-sm">Şifrəni unutmusunuz?</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col items-center justify-between mt-10 md:gap-10 gap-5">
                        <div className="w-full flex items-center justify-center bg-black text-white rounded-lg">
                            <button onClick={handleSubmit(onSubmit)} className="py-2 w-full flex justify-center cursor-pointer">Daxil ol</button>
                        </div>
                        <div className="w-full flex items-center justify-center gap-1 bg-[#E6E6E9] rounded-lg">
                            <button className="py-2 flex justify-center gap-1 w-full hover:bg-gray-300 duration-300 rounded-lg font-semibold"><GoogleSvg/> Google</button>
                            
                        </div>
                    </div>
                    <div className="text-center py-5">
                        Hesabınız yoxdur? <Link href='/auth/register' className="text-primaryApp hover:underline"> Qeydiyyatdan keçin</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login