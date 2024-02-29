'use client';
import React from 'react'



import TrendingCarousel from './TrendingCarousel';

const Trending = () => {

  return (
    <section className='w-full flex justify-center'>
    <div className="flex flex-col container mx-auto xl:mx-0">
      {/* Header */}
      <h2 className='text-2xl font-bold mb-4'>
        <span className="text-white-700">Trending </span>
        <span className="text-amber-300">this week</span>
      </h2>
      <TrendingCarousel />
    </div>
  </section>
  )
}

export default Trending