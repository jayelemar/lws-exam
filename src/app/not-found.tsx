import { FC } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFound: FC = () => {
  return (
    <section className="bg-[#191919]">
      <div className="container flex justify-center items-center min-h-[100vh] flex-col">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl">Oops! Page Not Found</h2>
            <p className="text-sm">Sorry, the page you were looking doesn&apos;t exist.</p>
            <Link href='/'><Button className="mt-10 px-4 py-2 w-full bg-[#106580]">Back to Home</Button></Link>
          </div>
      </div>
    </section>
  )
}
export default NotFound
