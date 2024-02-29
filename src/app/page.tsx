import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="flex flex-col items-center justify-start w-full pb-14 gap-[59px] bg-gray-900 ">
        <div className="flex flex-col items-center justify-start w-full">
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
        </div>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[94%] mt-[59px] gap-14 overflow-auto">
            <div className="flex flex-row justify-start w-full mx-auto max-w-[1581px]">
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
            </div>
            <div className="flex flex-row justify-start w-full mx-auto max-w-[1261px]">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
