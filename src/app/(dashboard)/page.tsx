import AboutSite from "../_components/common/AboutSite";

import HomeBanner from "../_components/common/HomeBanner";
import VehicleSearchForm from "../_components/common/VehicleSearchForm";

export default async function Home() {
  return (
    <>
      <div className="relative min-h-max w-full">
        <HomeBanner />
        <div className="rounded-md p-4">
          <VehicleSearchForm />
        </div>
        <AboutSite />
      </div>
    </>
  );
}
