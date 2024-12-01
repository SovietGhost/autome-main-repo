"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { useMoveBack } from "~/hooks/useMoveBack"
import AuthSidebar from "~/app/_components/common/AuthSidebar"
import { ArrowRight } from "lucide-react"

interface Inputs {
    email: string
}

const ForgotPassword = () => {
    const moveBack = useMoveBack()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex md:flex-row flex-col h-screen">
            <div className="md:w-[35%] hidden lg:flex md:hidden ">
                <AuthSidebar />
            </div>
            <div className="lg:w-[65%] w-full md:p-20 p-4  ">

                <div className="cursor-pointer flex items-center gap-1" onClick={moveBack} >
                    <div className="rotate-180">
                        <ArrowRight />
                    </div>
                    Geri
                </div>
                <div className="md:hidden  py-5 w-full mx-auto flex items-center justify-center">
                    <img className="w-28 md:w-[140px]" src="/logo.png" alt="" />
                </div>
                <h2 className="mt-6">Şifrəni bərpa et</h2>
                <div className=" md:w-[50%] w-full mx-auto  py-10">
                    <div className="  text-center  ">
                        <h3 className="font-bold md:text-2xl text-xl">Şifrənin bərpası</h3>
                        <div className="text-sm mt-2">Şifrəni sıfırlamaq üçün e-poçtunuzu daxil edin</div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                        <div className="flex flex-col w-full">
                            <label htmlFor="">E-poçt</label>
                            <input {...register("email", { required: true })} type="text" id="email" className="mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-14" placeholder="" />
                            {errors.email && <p className="text-primaryApp text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="w-full flex mt-7 items-center justify-center bg-black text-white rounded-lg">
                            <button className="py-2 w-full flex justify-center">
                                Parolu sıfırla
                            </button>
                        </div>
                        <div className="text-center my-3 cursor-pointer text-[#0684F8] hover:underline" onClick={moveBack}>
                            Geri qayıdın
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword