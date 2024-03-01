'use client';
import React from 'react'
import HeroBackgroundImage from './HeroBackgroundImage';
import HeroText from './HeroText';

const Hero = () => {
  return (
        <section className="flex flex-col  justify-center items-center w-full">
          <div className="h-[1052px] w-full relative">
            <HeroBackgroundImage />
            <HeroText />
          </div>
        </section>

  )
}

export default Hero