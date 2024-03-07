'use client';
import React, { ReactNode } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { AlignRight } from 'lucide-react'
import { useDashboardNavStore } from '@/store/DashboardNavStore';
import DashboardMobileNav from '../nav/DashboardMobileNav';

const DashboardLayout = ({children} : {children: ReactNode}) => {
  const { setIsOpen } = useDashboardNavStore()
  const handleClick = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true)
  };

  
  return (
    <section className='h-full w-full flex'>
      <div className="hidden lg:flex">
        <Sidebar/> 
      </div>

      <div className="absolute top-4 right-4 flex lg:hidden text-primary">
        <DashboardMobileNav />
      </div>
      
      <main className='flex-1 bg-none sm:bg-[#191919]/10'>
        {children}
      </main>
    </section>
  )
}

export default DashboardLayout