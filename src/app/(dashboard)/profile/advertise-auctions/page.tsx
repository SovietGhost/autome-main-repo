import ProfileBanner from "@/components/profile/banner"
import Container from "../../../components/app/container"
import Navigation from "../../../components/app/navigation"
import Sidebar from "../../../components/profile/sidebar"

function AdvertiseAuctions() {
    return (
        <section className="mt-[90px]">
            <Navigation page="Aktiv hərraclar" />
            <ProfileBanner/>

            <div className="bg-[#FAFAFA] py-10 md:py-[50px]">
                <Container>
                    <div className="flex flex-wrap items-start gap-8">
                        <Sidebar />
                        <div className="w-full lg:w-[calc(75%-2rem)] rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AdvertiseAuctions