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
      <section className='h-full flex flex-col justify-center items-center gap-4 bg-slate-300/50 rounded-lg py-12 px-44 z-50'>
        <div className="flex flex-col justify-center items-center gap-12">
          <h3 className='text-primary text-xl'>- No Anime listed -</h3>
          <Link href='/add-anime' className={`${buttonVariants()} text-white text-xl px-8 font-light`}>
            Add Anime
          </Link>
        </div>
      </section>
    )
  } else {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {animes.animes.map((anime) => (
          <AnimeListItem key={anime._id} anime={anime}/>
        ))}
      </div>
    );
  }
};

export default AnimeList;
