import Banner from "~/app/_components/common/Banner";
import VinForm from "./_components/VinForm";

export default function Page() {
  return (
    <main>
      <Banner text="VIN-in yoxlanılması" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <VinForm />
      </div>
    </main>
  );
}
