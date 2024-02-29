import React from 'react'

import { videos } from './TrendingData';
import TrendingItem from './TrendingItem';

const Trending = () => {
  return (
    <section className='w-full flex justify-center'>
    <div className="flex flex-col container mx-auto xl:mx-0">
      {/* Header */}
      <h2 className='text-2xl font-bold mb-4'>
        <span className="text-white-700">Trending </span>
        <span className="text-amber-300">this week</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {videos.map((video) => {
          return (
            <TrendingItem key={video.id} video={video}/>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Trending