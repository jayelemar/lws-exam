import { FC } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutPage: FC = () => {
  return (
    <section className="bg-[#191919]/80">
      <div className="container flex justify-center items-center min-h-[100vh] flex-col">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl">About Page</h2>
            <p>This is the About Page</p>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur quae magni nostrum, earum alias illo adipisci atque numquam animi repellat expedita aliquam consequatur odio quidem ipsam provident voluptates ad!</p>
            <Link href='/'><Button className="mt-10 px-4 py-2 w-full bg-[#106580]">Back to Home</Button></Link>
          </div>
      </div>
    </section>
  )
}
export default AboutPage