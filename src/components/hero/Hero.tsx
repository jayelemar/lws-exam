import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
        <section className="flex flex-col items-center justify-start w-full">
          <div className="h-[1052px] w-full relative">
            {/* Hero Background Image */}
            <Image
              src="/images/img_image_1.png"
              alt="imageone_one"
              width={1920}
              height={1080}
              className="justify-center h-[1052px] w-screen left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />

            <div className="justify-center h-[1052px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              {/* Hero Shadow */}
              <Image
                src="/images/img_group_1.png"
                alt="image"
                width={4320}
                height={3156}
                className="justify-center h-[1052px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="container flex flex-col items-start justify-center  h-full left-0 bottom-0 right-0 top-0 m-auto absolute mx-24">

                <h1 className="mt-64">
                  Kimetsu no Yaiba
                </h1>
                <div className="flex flex-row justify-start items-end ml-1.5">
                  <Image 
                    src="/images/img_frame.svg" 
                    alt="image_one" 
                    width={20}
                    height={19}
                    className="h-[21px] w-[21px] mb-px" />
                  <h2 className="mb-px ml-1">
                    5.0
                  </h2>
                  <p className="ml-[19px]">
                    Category: Adventure fiction, Dark fantasy, Martial Arts
                  </p>
                </div>
                <p className="w-1/2 mt-[22px] ml-1.5">
                  Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge.
                  It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was
                  slaughtered and his younger sister Nezuko turned into a demon.
                </p>
                <div className="flex flex-row justify-start mt-2.5 ml-1.5 gap-[17px]">
                  <div
                    className="gp-1 font-avenirltstd min-w-[142px]"
                  >
                    <Image src="/images/img_frame_white_a700.svg" alt="Frame" width={29} height={29} />
                    Watch Now!
                  </div>
                  <div>
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
            </div>
          </div>
        </section>

  )
}

export default Hero