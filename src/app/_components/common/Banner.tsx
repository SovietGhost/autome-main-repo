import Image from "next/image";

export default function Banner({ text }: { text?: string }) {
  return (
    <div className="h-full w-full relative">
      <Image
        src={"/Banner.png"}
        alt="banner"
        width={350}
        height={120}
        className="h-full w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="text-3xl font-bold text-white">{text}</h1>
      </div>
    </div>
  );
}
