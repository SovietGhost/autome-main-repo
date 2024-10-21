import AboutSite from "../_components/common/AboutSite";

import HomeBanner from "../_components/common/HomeBanner";
import VehicleSearchForm from "../_components/common/VehicleSearchForm";

export default async function Home() {
  return (
    <main className="relative min-h-max w-full">
      <HomeBanner />
      <div className="rounded-md md:px-32 md:container md:mx-auto">
        <VehicleSearchForm />
      </div>
      <AboutSite />
    </main>
  );
}
