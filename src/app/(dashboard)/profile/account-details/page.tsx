"use client"
import { useForm } from "react-hook-form";
import ProfileBanner from "../_components/ProfileBanner";
import { Button } from "~/components/ui/button";
import Sidebar from "../_components/ProfileSidebar";

interface Inputs {
    firstName: string;
    lastName: string;
    location: string;
    email: string;
}

function AccountDetails() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return (
        <section>
            <ProfileBanner />

            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap gap-8">
                        <Sidebar />
                        <div className="w-full bg-white lg:w-[calc(75%-2rem)] rounded-lg px-5 py-6 md:px-[30px] md:py-7">
                            <h1 className="text-xl font-medium mb-8 block lg:hidden text-center">Hesab təfərrüatları</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-8">
                                <div className="flex justify-between flex-wrap flex-col md:flex-row gap-4 w-full">
                                    <div className='md:w-[calc(50%-1rem)]'>
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Ad</label>
                                        <input {...register("firstName")} type="text" id="firstName" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Ad" />
                                    </div>
                                    <div className='md:w-[calc(50%-1rem)]'>
                                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Soyad</label>
                                        <input {...register("lastName")} type="text" id="lastName" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Soyad" />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Ünvan</label>
                                    <input {...register("location")} type="text" id="address" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Ünvan" />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-poçt ünvanı</label>
                                    <input {...register("email")} type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Email" />
                                </div>
                                <Button className="bg-secondaryApp hover:bg-green-600 duration-300 whitespace-nowrap py-[11px] text-white px-4 rounded-lg">
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

export default AccountDetails;