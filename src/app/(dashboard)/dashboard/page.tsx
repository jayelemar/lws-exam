'use client';
import { FC, useEffect } from "react"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { useGetAnimes } from "@/services/animeServices"
import AnimeList from "@/components/anime/AnimeList"
import HeroBackgroundImage from "@/components/hero/HeroBackgroundImage";

const DashboardPage: FC = () => {

  const { data: animesData, refetch } = useGetAnimes();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <DashboardLayout>
      
    <section >
      <div className="container flex justify-center items-center min-h-[100vh] flex-col">
      <HeroBackgroundImage />
        <div className="flex flex-col justify-center items-center gap-2 mx-auto z-50">
        <h2 className="text-3xl text-white flex mt-16 sm:mt-0 md:absolute top-16">Anime List</h2>
          <div className="w-full px-4">
            <AnimeList animes={animesData ?? []} /> 
          </div>
        </div>
      </div>
    </section>
    </DashboardLayout>
  )
}
export default DashboardPage