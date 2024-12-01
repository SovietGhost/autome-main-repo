import { ArrowDownNarrowWide } from "lucide-react"
import ProfileBanner from "../_components/ProfileBanner"
import Sidebar from "../_components/ProfileSidebar"

function MyAuctions() {
    return (
        <section>
            <ProfileBanner />
            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap items-start gap-8">
                        <Sidebar />
                        <div className="w-full lg:w-[calc(75%-2rem)] rounded-lg">
                            <div className="mb-10 md:mb-[50px] flex items-center justify-between">
                                <div className="flex gap-[10px] md:gap-8 items-center">
                                    <ArrowDownNarrowWide />
                                    {/* <CgSortAz className="rounded-lg bg-white border text-[42px]" /> */}
                                </div>
                                <span className="text-secondaryApp">0 Hərrac</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAuctions