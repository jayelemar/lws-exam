'use client';
import React, { FC } from 'react';
import AnimeListItem from './AnimeListItem';


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
    return <p>No Anime</p>;
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
