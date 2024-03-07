import { Eye, Pencil, Trash2 } from 'lucide-react';
import React, { FC } from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import animeImg from '../../../public/anime-image.png'
import { Label } from '../ui/label';


export interface Anime {
  name: string;
  desc: string;
  categories: string[];
}

export interface AnimeListProps {
  animes: {
    animes: Anime[];
  };
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {
  console.log("Animes:", animes); // Log the value of 'animes'

  if (!animes.animes || animes.animes.length === 0) {
    return <p>No Anime</p>;
  } else {
    return (
      <div className='grid grid-cols-4 gap-4'>
        {animes.animes.map((anime, index) => (
          <Card className='flex flex-col w-full p-4 border-2 border-slate-300 shadow-lg' key={index}>
            <div className="w-30 min-h-30 flex-1 p-1">
              <Image src={animeImg} alt='anime-image'/>
            </div>
            <div className="border-t-2 border-slate-300 ">
            <h5 className='text-lg text-center'>{anime.name}</h5>
            <div className="flex flex-col xs:flex-row w-full relative">
              
              <div className="flex flex-col w-full">
                <Label className=''>Description: </Label>
                <p className='text-sm'>{anime.desc}</p>
              </div>
              <div className="flex flex-row justify-between mt-1 xs:flex-col xs:gap-2 xs:absolute xs: right-0 xs:bottom-0">
                <div className='text-center flex flex-row gap-2 justify-center items-center'> 
                  <Pencil size={25} className='bg-green-600 text-yellow-100 rounded cursor-pointer p-1'/>
                  <Trash2 size={25} className='bg-red-700 text-yellow-100 rounded cursor-pointer p-1'/>
                </div>
              </div>
            </div>
            </div>
      
          </Card>
        ))}
      </div>
    );
  }
};

export default AnimeList;
