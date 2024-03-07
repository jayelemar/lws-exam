'use client';
import React, { FC } from 'react';
import AnimeListItem from './AnimeListItem';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"



export interface Anime {
  _id: string; 
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

  if (!animes.animes || animes.animes.length === 0) {
    return (
      <section className='h-full flex flex-col justify-center items-center gap-4'>
        <div className="flex flex-col justify-center items-center gap-12">
          <h3 className='text-primary'>- No Anime listed -</h3>
          <Link href='/add-anime' className={buttonVariants()}> Add Anime </Link>
        </div>

      </section>
    )
    

  } else {
    return (
      <div className='grid grid-cols-4 gap-4'>
        {animes.animes.map((anime) => (
          <AnimeListItem key={anime._id} anime={anime}/>
        ))}
      </div>
    );
  }


};

export default AnimeList;
