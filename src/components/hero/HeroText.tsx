import Image from 'next/image'
import React from 'react'

const HeroText = () => {
  return (
    <div className="container mx-auto flex flex-col items-start justify-center  h-full left-0 bottom-0 right-0 top-0 m-auto absolute">

      <h1 className="mt-64 font-bold text-[80px]">
        Kimetsu no Yaiba
      </h1>
      <div className="flex flex-row justify-start items-end ml-1.5">
        <Image 
          src="/images/img_frame.svg" 
          alt="image_one" 
          width={20}
          height={19}
          className="h-[21px] w-[21px] mb-px" />
        <h2 className="ml-1 text-[12px]">
          5.0
        </h2>
        <p className="ml-[19px] text-[12px]">
          Category: Adventure fiction, Dark fantasy, Martial Arts
        </p>
      </div>
      <p className="w-1/2 mt-[22px] ml-1.5">
        Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge.
        It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was
        slaughtered and his younger sister Nezuko turned into a demon.
      </p>
      <div className="flex flex-row justify-start mt-2.5 ml-1.5 gap-[17px]">
        <div className="min-w-[142px] flex flex-row justify-start items-center gap-1 bg-[#106580]  rounded-[5px] w-full h-11 ">
          <Image src="/images/img_frame_white_a700.svg" alt="Frame" width={29} height={29} />
          Watch Now!
        </div>
        <div className='flex justify-center items-center rounded-[5px] w-full h-11 border border-solid  min-w-[48px]'>
          <Image src="/images/img_frame_white_a700_44x48.svg" alt="" width={27} height={27}/>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-[312px] ml-[5px]">
        <div className="flex flex-row justify-center w-[18%]">
          <div className="flex flex-col items-start justify-start w-full gap-0.5">
            <div className="flex flex-row justify-between w-full">
              <h3>
                Overview
              </h3>
              <p>
                Episodes
              </p>
              <p>
                Details
              </p>
            </div>
            <div className="h-[3px] w-[24%] ml-1.5 bg-cyan-900_01" />
          </div>
        </div>
        <div className="flex w-[185px] h-px" />
      </div>
    </div>
  ) 
}

export default HeroText