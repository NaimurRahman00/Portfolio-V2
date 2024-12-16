import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-5">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <a href="#">
          <h1 className="text-white text-4xl">Naimur</h1>
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-[600]">Hi,</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Naimur, <br /> Frontend developer.
          </h2>
        </div>
      </div>
      {/* HERO IMAGE */}
      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image src="/naimur.png" width={800} height={1200} alt="Naimur" className="w-full max-h-screen object-contain object-left grayscale transform scale-x-[-1] opacity-80" />
      </div>
      <div></div>
    </div>
  );
}
