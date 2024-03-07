
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Throwback from "@/components/throwback/Throwback";
import Trending from "@/components/trending/Trending";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-start w-full pb-14 gap-[59px] bg-[#191919] ">
        <Header />
        <Hero />
        <Trending />
        <Throwback />
      </div>
    </main>
  );
}
