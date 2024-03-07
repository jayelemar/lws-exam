import { FC } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const DiscoverPage: FC = () => {
  return (
    <section className="bg-[#191919]/80">
      <div className="container flex justify-center items-center min-h-[100vh] flex-col">
          <div className="flex flex-col justify-center items-center gap-2 mx-auto">
            <h2 className="text-4xl mb-12">Discover Page</h2>

            <p className="text-sm w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur quae magni nostrum, earum alias illo adipisci atque numquam animi repellat expedita aliquam consequatur odio quidem ipsam provident voluptates ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos in maiores minus vero ea molestiae molestias, qui culpa blanditiis obcaecati repellendus autem tempore aliquid minima earum ratione voluptatem accusantium! Lorem ipsum dolor sit amet, consectetur adip</p>
            <Link href='/'><Button className="mt-10 px-4 py-2 w-full bg-[#106580]">Back to Home</Button></Link>
          </div>
      </div>
    </section>
  )
}
export default DiscoverPage