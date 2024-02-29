import Image from 'next/image'
import React from 'react'

const HeroBackgroundImage = () => {
  return (
    <>
      {/* Hero Background Image */}
      <Image
        src="/images/img_image_1.png"
        alt="imageone_one"
        width={1920}
        height={1080}
        className="justify-center h-[1052px] w-screen left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
      {/* Hero Shadow */}
      <Image
        src="/images/img_group_1.png"
        alt="image"
        width={4320}
        height={3156}
        className="justify-center h-[1052px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
    </>
  )
}

export default HeroBackgroundImage