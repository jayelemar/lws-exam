'use client';
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios"

export interface CreateAnimeFormProps {
  name: string,
  desc: string,
  categories: string[],
}

const BACKEND_URL: string = process.env.NEXT_BACKEND_URL || 'http://localhost:8000'

// Create a new Leave Request
export const useCreateAnime = () => {
  const createLeave = async (data: CreateAnimeFormProps) => {
      const response = await axios.post(`${BACKEND_URL}/api/animes`, data)
        console.log(response.data);
  };

  return useMutation({
    mutationKey:['createAnime'],
    mutationFn: createLeave
  })
}

// Get Animes
export const useGetAnimes = () => {
  const getAnimes = async () => {
    const response =await axios.get(`${BACKEND_URL}/api/animes`)
    const animesData = response.data
    return animesData
  };

  return useQuery({
    queryKey:['getAnimes'],
    queryFn: getAnimes,
    
  })
}

// Get Single Anime
export const useGetSingleAnime = (id: string) => {
  const getSingleAnime = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/animes/${id}`);
    return response.data;
  };

  return useQuery({
    queryKey:['getSingleAnime', id],
    queryFn: getSingleAnime,
  });
};


// Delete Anime
export const useDeleteAnime = () => {
  const deleteAnime = async (id: string) => {
    const response = await axios.delete(`${BACKEND_URL}/api/animes/${id}`);
    return response.data;
  };

  return useMutation({
    mutationKey: ['deleteAnime'],
    mutationFn: deleteAnime,
  });
};

// Update Anime
export const useUpdateAnime = () => {
  const updateAnime = async ({ id, data }: { id: string; data: CreateAnimeFormProps }) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/api/animes/${id}`, data);
      return response.data;
    } catch (error: any) {
      console.error("Update Anime Error:", error.response?.data || error.message);
      throw error; 
    }
  };
  return useMutation({
    mutationKey: ['updateAnime'],
    mutationFn: updateAnime,
  });
}



