"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import ProfileBanner from "../_components/ProfileBanner";
import Sidebar from "../_components/ProfileSidebar";
import { Button } from "~/components/ui/button";

interface Inputs {
    oldPassword: string
    newPassword: string
    confirm_password: string
}

const ChangePassword = function() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReNewPassword, setShowReNewPassword] = useState(false);

    const toggleShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword);
    const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
    const toggleShowReNewPassword = () => setShowReNewPassword(!showReNewPassword);

    return (
        <section>
            <ProfileBanner />

            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap gap-8">
                        <Sidebar />
                        <div className="w-full bg-white lg:w-[calc(75%-2rem)] rounded-lg px-5 py-6 md:px-[30px] md:py-7">
                            <h1 className="text-xl font-medium mb-8 block lg:hidden text-center">Şifrə dəyişikliyi</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-8">
                                <div className="w-full">
                                    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900">Cari şifrə</label>
                                    <div className="flex items-center">
                                        <input
                                            {...register("oldPassword", { required: true })}
                                            type={showCurrentPassword ? "text" : "password"}
                                            id="oldPassword"
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                            placeholder="*****"
                                        />
                                        <button type="button" onClick={toggleShowCurrentPassword} className="-ml-8">
                                            {showCurrentPassword ? <EyeClosed /> : <Eye />}
                                        </button>
                                    </div>
                                    {errors.oldPassword && <p className="text-primaryApp text-sm mt-2">Password tələb edilir</p>}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">Yeni şifrə</label>
                                    <div className="flex items-center">
                                        <input
                                            {...register("newPassword", { required: true })}
                                            type={showNewPassword ? "text" : "password"}
                                            id="newPassword"
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                            placeholder="Yeni şifrəni daxil edin"
                                        />
                                        <button type="button" onClick={toggleShowNewPassword} className="-ml-8">
                                            {showNewPassword ? <EyeClosed /> : <Eye />}
                                        </button>
                                    </div>
                                    {errors.newPassword && <p className="text-primaryApp text-sm mt-2">Password tələb edilir</p>}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="reNewPassword" className="block mb-2 text-sm font-medium text-gray-900">Yeni şifrəni təsdiqlə</label>
                                    <div className="flex items-center">
                                        <input
                                            type={showReNewPassword ? "text" : "password"}
                                            id="reNewPassword"
                                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                            placeholder="Yeni şifrəni təsdiqləyin"
                                            {...register("confirm_password", {
                                                required: true,
                                                validate: (val: string) => {
                                                    if (watch('newPassword') != val) {
                                                        return "Your passwords do no match";
                                                    }
                                                },
                                            })}
                                        />
                                        <button type="button" onClick={toggleShowReNewPassword} className="-ml-8">
                                            {showReNewPassword ? <EyeClosed /> : <Eye />}
                                        </button>
                                    </div>
                                    {errors.confirm_password && <p className="text-primaryApp text-sm mt-2">Password tələb edilir</p>}
                                </div>
                                <Button className="bg-secondaryApp hover:bg-hoverSecondary duration-300 whitespace-nowrap py-[11px] text-white px-4 rounded-lg">
                                    Yadda saxla
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChangePassword;