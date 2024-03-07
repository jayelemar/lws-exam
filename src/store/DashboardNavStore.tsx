'use client';
import { create } from 'zustand';

interface DashboardNavStore {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
}
export const useDashboardNavStore = create<DashboardNavStore>((set) => ({
  isOpen:false,
  setIsOpen: (isOpen) => set({isOpen})
}))