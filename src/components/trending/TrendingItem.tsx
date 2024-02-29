import Image from 'next/image'
import React, { FC } from 'react'
import TrendingItemText from './TrendingItemText'

interface Video {
  id: number,
  imageSrc: string,
  title: string,
  category: string,
  rating: string,
}

type TrendingItemProps = {
  video: Video,
}

const TrendingItem:FC<TrendingItemProps> = ({ video }) => {
  const {id, imageSrc, title, category, rating} = video

  return (
    <div key={id} className="h-[291px] relative w-full cursor-pointer">
      <Image
        src={imageSrc}
        alt="image_two"
        width={1548}
        height={873}
        className="justify-center h-[291px] w-full left-0  object-cover rounded-[21px]"
      />
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black rounded-[21px]" />
      <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-gradient absolute rounded-[21px]">
        {/* Item Text */}
        <TrendingItemText title={title} category={category} rating={rating}/>

      </div>
    </div>
  )
}

export default TrendingItem