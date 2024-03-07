'use client';
import React, { FC } from 'react'
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import animeImg from '../../../public/anime-image.png';
import { Label } from '../ui/label';
import { useDeleteAnime, useGetAnimes } from '@/services/animeServices';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { useAnimeStore } from '@/store/AnimeStore';

interface AnimeListItemProps {
  _id: string; 
  name: string;
  desc: string;
  categories: string[];
}

const AnimeListItem = ({ anime }: {anime: AnimeListItemProps}) => {
  const { mutateAsync: DeleteAnimeMutation  } = useDeleteAnime();
  const { refetch } = useGetAnimes()
  const { toast } = useToast()
  const router = useRouter();
  const {_id, name, desc, categories} = anime
  const {setID, setName, setDesc, setCategories} = useAnimeStore()

  const handleDelete = async (animeId: string) => {
    try {
      await DeleteAnimeMutation(animeId);
      toast({
        title: "Anime deleted successfully.",
      })
      refetch();
    } catch (error) {
      console.error('Error deleting anime:', error);
      toast({
        variant: "destructive",
        title: "Anime deletion failed", 
        description: `${error}`,
      })
    }
  };

  const handleUpdate = async (_id: string) => {
    setName(name)
    setID(_id)
    setDesc(desc)
    setCategories(categories)

    router.push(`/animes/${_id}}`)
  };

  return (
    <div className='flex flex-col w-full p-4 border-2 border-slate-300 shadow-lg relative' key={_id}>
      <div className="w-30 min-h-30 flex-1 p-1">
        <Image src={animeImg} alt='anime-image' loading='lazy'/>
      </div>
      <div className="border-t-2 border-slate-300 min-h-32 max-h-32 ">
        <h5 className='text-lg text-center text-slate-700'>{name}</h5>
        <div className="flex flex-col xs:flex-row w-full">
          <div className="flex flex-col w-full">
            <Label className='text-slate-700'>Description: </Label>
            <p className='text-[10px] text-slate-700'>{desc}</p>
          </div>
          <div className="flex flex-row justify-between mt-1 xs:flex-col xs:gap-2 xs:absolute xs:right-0 xs:bottom-0">
            <div className='absolute bottom-4 text-center flex flex-row gap-2 justify-center items-center'>
              <Pencil 
                size={25} 
                onClick={() => handleUpdate(_id)} 
                className='bg-green-600 text-yellow-100 rounded cursor-pointer p-1'
              />
              <Trash2 
                size={25} 
                onClick={
                  () => handleDelete(_id) 
                } 
                className='bg-red-700 text-yellow-100 rounded cursor-pointer p-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeListItem