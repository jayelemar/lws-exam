
import Hero from "@/components/hero/Hero";
import Throwback from "@/components/throwback/Throwback";
import Trending from "@/components/trending/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="flex flex-col items-center justify-start w-full pb-14 gap-[59px] bg-[#191919] ">
          <Hero />


        


        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[94%] mt-[59px] gap-14 overflow-auto">
            <Trending />
            <Throwback />
          </div>
        </div>
      </div>
    </main>
  );
}
