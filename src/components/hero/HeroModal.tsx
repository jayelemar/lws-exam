'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import imageSrc from '../../../public/images/img_image_1.png'

interface Video {
  title: string;
  category: string;
  rating: string;
}

interface HeroModalProps {
  video: Video;
}



const video = {
  title: 'Kimetsu no Yaiba',
  category: 'Adventure fiction, Dark fantasy, Martial Arts',
  rating: '5.0',

}

const HeroModal = () => {
  const { title, category, rating } = video;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button className="cursor-pointer min-w-[142px] flex flex-row justify-center items-center gap-1 bg-[#106580] rounded-[5px] w-full h-11 text-base">
            <Image src="/images/img_frame_white_a700.svg" alt="Frame" width={29} height={29} />
            Watch Now!
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col justify-between items-center text-slate-700">
          {/* Image */}
          <div className="">
            <Image width={1920} height={1080} src={imageSrc} alt={title} className="rounded-2xl" />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-2xl">{title}</h2>
            <div className="flex justify-between items-center flex-row w-full gap-4">
              <p>{category}</p>
              <p>{rating}</p>
            </div>

          </div>

        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default HeroModal