import React from 'react'
import Image from "next/image";
import { videos } from '@/data/ThrowBackData';

const Throwback = () => {
  return (
    <section className="w-full flex justify-center">
    <div className="flex flex-col container mx-auto xl:mx-0">
      <h2 className='text-2xl font-bold mb-4'>
        Throwback Anime!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
        {videos.map((video) => {
          const {id, imageSrc, text} = video
          return (
            <Image key={id}
            src={imageSrc}
            alt={text}
            className="w-full object-cover rounded-[30px]"
            width={1227}
            height={1281}
          />
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Throwback