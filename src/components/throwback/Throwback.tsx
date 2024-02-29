import React from 'react'
import Image from "next/image";

const videos = [
  {
    id: 1,
    imageSrc: '/images/img_rectangle_24.png',
    text: 'image_four',
  },
  {
    id: 2,
    imageSrc: '/images/img_rectangle_25.png',
    text: 'image_five',
  },
  {
    id: 3,
    imageSrc: '/images/img_rectangle_26.png',
    text: 'image_six',
  }
]

const Throwback = () => {
  return (
    <section className="w-full flex justify-center">
    <div className="flex flex-col container mx-auto xl:mx-0">
      <h2>
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



        
        {/* <div className="flex flex-col items-center justify-start">
          <Image
            src="/images/img_rectangle_25.png"
            alt="image_five"
            className="w-full object-cover rounded-[30px]"
            width={1227}
            height={1281}
          />
        </div>
        <Image
          src="/images/img_rectangle_26.png"
          alt="image_six"
          className="w-[33%] object-cover rounded-[30px]"
          width={1227}
          height={1281}
        /> */}
      </div>
    </div>
  </section>
  )
}

export default Throwback