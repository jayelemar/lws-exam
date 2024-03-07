import { FC } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroBackgroundImage from "@/components/hero/HeroBackgroundImage"


const DiscoverPage: FC = () => {
  return (
    <section className="bg-[#191919]/80">
      <div className="container flex justify-center items-center min-h-[100vh] flex-col">
        <HeroBackgroundImage />
          <div className="flex flex-col justify-center items-center gap-2 mx-auto z-50 bg-slate-200/30 rounded-xl py-6 max-w-[700px]">
            <h2 className="text-4xl mb-12">Discover Page</h2>
            <p className="text-lg w-1/2">Li atque numquam animi repellat expedita aliquam consequatur odio quidem ipsam provident voluptates ad! Lorem ione voluptatem accusantium! Lorem ipsum dolor sit amet, consectetur adip</p>
            <Link href='/'><Button className="mt-10 px-4 py-2 w-full bg-[#106580] text-lg">Back to Home</Button></Link>
          </div>
      </div>
    </section>
  )
}
export default DiscoverPage