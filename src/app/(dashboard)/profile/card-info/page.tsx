import { Button } from "~/components/ui/button";
import ProfileBanner from "../_components/ProfileBanner";
import Sidebar from "../_components/ProfileSidebar";
import { Pencil, Plus, Trash2 } from "lucide-react";
import CardPosSvg from "public/svgs/cardPos";

function CardInfo() {
    const data: Array<{ id: number; img: React.ReactNode; cardNum: string; money: number; date: string }> = [
    ]

    return (
        <section>
            <ProfileBanner />

            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap gap-8">
                        <Sidebar />
                        <div className="w-full px-[30px] py-6 lg:w-[calc(75%-2rem)] rounded-lg bg-white">
                            <h1 className="text-xl font-medium mb-8 block lg:hidden text-center">Kart məlumatları</h1>
                            <div className="flex flex-col items-start justify-between gap-4">
                                {
                                    data.length ? (data.map(item => {
                                        return (<>
                                            <div key={item.id} className="px-5 w-full py-4 border rounded-lg flex items-center justify-between">
                                                <div className="flex items-center gap-[100px]">
                                                    <div className="flex items-center gap-4">
                                                        {item.img}
                                                        <p>{item.cardNum}</p>
                                                    </div>
                                                    <p>{item.money} ₼</p>
                                                </div>
                                                <div className="flex items-center gap-[100px]">
                                                    <p>Bitmə vaxtı: {item.date}</p>
                                                    <div className="flex gap-5">
                                                        <button>
                                                            <Pencil />
                                                        </button>
                                                        <button>
                                                            <Trash2 />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                        )
                                    })) : (
                                        <div className="py-[62px] md:py-[73px] flex items-center flex-col w-full">
                                            <div className="flex flex-col items-center">
                                                <div className="p-6 md:p-10 bg-[#F8F8F9] rounded-2xl">
                                                    <CardPosSvg />
                                                </div>
                                                <h2 className="font-medium mt-6 md:mt-8 text-sm md:text-xl">Kartlar haqqında məlumat tapılmadı</h2>
                                                <div className="flex gap-8 mt-6">
                                                    <Button className="flex text-sm text-white items-center bg-secondaryApp hover:bg-green-600 py-[10px] px-3 gap-1 rounded mt-4">
                                                        Hərraca başla
                                                    </Button>
                                                    <Button className="flex text-sm items-center border border-secondary py-[10px] px-3 gap-1 rounded mt-4">
                                                        <Plus />Kart əlavə et
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {data.length ? <div className="flex justify-between w-full items-center">
                                    <Button className="flex text-sm items-center border border-secondary py-[10px] px-3 gap-1 rounded mt-4">
                                        <Plus />Kart əlavə et
                                    </Button>
                                    <p className="text-xs md:text-lg"><span className="text-[#828091]">Toplam balans:</span> 15000 ₼</p>
                                </div> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardInfo