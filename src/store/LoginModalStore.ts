'use client';
import { create } from 'zustand';

interface LoginModalStore {
  isLoginModalOpen: boolean,
  setIsLoginModalOpen: (isOpen: boolean) => void,
}
export const useLoginModalStore = create<LoginModalStore>((set) => ({
  isLoginModalOpen:true,
  setIsLoginModalOpen: (isLoginModalOpen) => set({isLoginModalOpen})
}))
