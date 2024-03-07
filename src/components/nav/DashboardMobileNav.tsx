'use client';
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import SidebarList from '../sidebar/SidebarList';
import { useDashboardNavStore } from '@/store/DashboardNavStore';
import { AlignLeft } from 'lucide-react';

const DashboardMobileNav = () => {
  const { isOpen, setIsOpen } = useDashboardNavStore();

  const handleNavClick = () => {
    console.log('Before state change - isOpen:', isOpen);
    setIsOpen(!isOpen);
    console.log('After state change - isOpen:', !isOpen);
  };
  return (
    <div className='z-50'>
      <Sheet>
      <SheetTrigger asChild>
        <AlignLeft className='cursor-pointer z-[100] size-10 text-white/50' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <h1 className='text-2xl font-bold text-slate-700 py-6'>
            AnimeBinge
          </h1>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SidebarList/>
        </div>
      </SheetContent>
    </Sheet>
    </div>
    )
}

export default DashboardMobileNav