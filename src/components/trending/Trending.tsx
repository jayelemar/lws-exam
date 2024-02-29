import React from 'react'
import Image from "next/image";

const Trending = () => {
  return (
    <section className="flex flex-row justify-start w-full mx-auto max-w-[1581px]">
    <div className="flex flex-col items-start justify-start w-[86%] gap-[22px]">
      <h2>
        <span className="text-white-A700">Trending </span>
        <span className="text-amber_300">this week</span>
      </h2>
      <div className="flex flex-row justify-start w-full gap-4">
        <div className="h-[291px] w-[39%] relative">
          <Image
            src="/images/img_rectangle_9.png"
            alt="image_two"
            width={1548}
            height={873}
            className="justify-center h-[291px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[21px]"
          />
          <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-gradient absolute rounded-[21px]">
            <div className="flex flex-row justify-center w-[94%] mt-[204px] mx-3.5">
              <div className="flex flex-col items-start justify-start w-full">
                <h3 className="z-[1]">
                  Attack On Titan
                </h3>
                <div className="flex flex-row justify-between items-start w-full mt-[-2px]">
                  <p className="mt-[5px] !text-gray-600">
                    Category: Adventure fiction, Dark fantasy, Martial Arts
                  </p>
                  <div className="flex flex-row justify-start items-center gap-1">
                    <Image 
                      src="/images/img_frame.svg" 
                      alt="image_three" 
                      className="h-[21px] w-[21px]"
                      width={20}
                      height={19}
                    />
                    <h4>5.0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[78%] gap-4">
          <div className="h-[291px] w-1/2 relative">
            <Image
              src="/images/img_rectangle_10.png"
              alt="image"
              className="justify-center h-[291px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[21px]"
              width={1540}
              height={873}
            />
            <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-gradient absolute rounded-[21px]">
              <div className="flex flex-row justify-center w-[98%] mt-[207px] mx-1">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-px">
                    <h5>
                      Jujutsu Kaisen
                    </h5>
                    <p className="!text-gray-600">
                      Category: Adventure fiction, Martial Arts
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-1">
                    <Image 
                      src="/images/img_frame.svg" 
                      alt="image_one" 
                      className="h-[21px] w-[21px]"
                      width={20}
                      height={19}
                    />
                    <h6>5.0</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[291px] w-1/2 relative">
            <Image
              src="/images/img_rectangle_11.png"
              alt="image"
              className="justify-center h-[291px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[21px]"
              width={1540}
              height={873}
            />
            <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-gradient absolute rounded-[21px]">
              <div className="flex flex-row justify-center w-[98%] mt-[204px] mx-1">
                <div className="flex flex-col items-start justify-start w-full">
                  <h4 className="z-[1]">
                    One Piece
                  </h4>
                  <div className="flex flex-row justify-between items-start w-full mt-[-3px]">
                    <p className="mt-[5px] !text-gray-600">
                      Category: Adventure fiction, Comedy, Family
                    </p>
                    <div className="flex flex-row justify-start items-center gap-1">
                      <Image 
                        src="/images/img_frame.svg" 
                        alt="image_one" 
                        className="h-[21px] w-[21px]"
                        width={20}
                        height={19}
                      />
                      <p>5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Trending