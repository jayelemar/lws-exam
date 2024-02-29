import React from 'react'
import Image from "next/image";

const Throwback = () => {
  return (
    <section className="flex flex-row justify-start w-full mx-auto max-w-[1261px]">
    <div className="flex flex-col items-start justify-start w-full gap-[35px]">
      <h2>
        Throwback Anime!
      </h2>
      <div className="flex flex-row justify-start w-full gap-4">
        <Image
          src="/images/img_rectangle_24.png"
          alt="image_four"
          className="w-[33%] object-cover rounded-[30px]"
          width={1227}
          height={1281}
        />
        <div className="flex flex-col items-center justify-start w-[33%]">
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
        />
      </div>
    </div>
  </section>
  )
}

export default Throwback