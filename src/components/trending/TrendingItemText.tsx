import Image from 'next/image'
import React, { FC } from 'react'

interface TrendingItemTextProps {
  title: string,
  category: string,
  rating: string,
}

const TrendingItemText:FC<TrendingItemTextProps> = ({title, category, rating}) => {
  return (
    <div className="w-[94%] mt-[204px] mx-3.5">
      <div className="flex flex-col items-start justify-start w-full">
        <h3 className="z-[1]">
          {title}
        </h3>
        <div className="flex flex-row justify-between items-start w-full mt-[-2px]">
          <p className="mt-[5px] !text-gray-600">
            Category: {category}
          </p>
          <div className="flex flex-row justify-start items-center gap-1">
            <Image 
              src="/images/img_frame.svg" 
              alt="image_three" 
              className="h-[21px] w-[21px]"
              width={20}
              height={19}
            />
            <h4>{rating}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingItemText