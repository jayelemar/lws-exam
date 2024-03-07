import React from 'react'
import TrendingItem from './TrendingItem';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll'
import { videos } from '../../data/TrendingData';

const TrendingCarousel = () => {
  const carouselVideos = [...videos, ...videos, ...videos];
  return (
    <div className="overflow-hidden">
        <Carousel
          opts={{ align: 'start', loop: true, containScroll: "keepSnaps"}}
          plugins={[
            AutoScroll({ 
              speed: 0.3,
              startDelay: 100,
              playOnInit: true,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="gap-4"
        >
          <CarouselContent className='min-w-[500px] max-w-[500px] gap-4'>
            {carouselVideos.map((video, index) => {
              return (
                <CarouselItem key={index}>
                  <TrendingItem  video={video}/>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
  )
}

export default TrendingCarousel