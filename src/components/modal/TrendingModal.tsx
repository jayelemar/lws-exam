'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import TrendingItem, { Video } from "../trending/TrendingItem";
import { FC } from "react";
import Image from "next/image";

interface TrendingModalProps {
  video: Video
}

const TrendingModal:FC<TrendingModalProps> = ({ video }) => {
  const { id, title, category, rating, imageSrc } = video
  return (
    <Dialog key={id}>
      <DialogTrigger asChild>
        <div><TrendingItem video={video}/></div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col justify-between items-center text-slate-700">
          {/* Image */}
          <div className="">
            <Image width={1548} height={873} src={imageSrc} alt={title} />
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

export default TrendingModal