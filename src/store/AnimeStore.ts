import { create } from 'zustand';

interface AnimeStore {
  _id: string; 
  name: string;
  desc: string;
  categories: string[];
  setID: (_id: string) => void;
  setName: (name: string) => void;
  setDesc: (desc: string) => void;
  setCategories: (categories: string[]) => void;
}

export const useAnimeStore = create<AnimeStore>((set) => ({
  _id: "", 
  name: "",
  desc: "",
  categories: [],
  setID: (_id) => set({ _id }),
  setName: (name) => set({ name }),
  setDesc: (desc) => set({ desc }),
  setCategories: (categories) => set({ categories }),
}))