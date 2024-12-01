import ProfileBanner from "../_components/ProfileBanner"
import Sidebar from "../_components/ProfileSidebar"

function DealAuctions() {
    return (
        <section>
            <ProfileBanner/>
            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap items-start gap-8">
                        <Sidebar />
                        <div className="w-full lg:w-[calc(75%-2rem)] rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DealAuctions