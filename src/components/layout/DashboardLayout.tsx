'use client';
import React, { ReactNode } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { AlignRight } from 'lucide-react'

const DashboardLayout = ({children} : {children: ReactNode}) => {
  return (
    <section className='h-full w-full flex'>
    <div className="hidden sm:flex">
      <Sidebar/>
    </div>
    <div className="absolute top-4 right-4 flex sm:hidden text-primary"><AlignRight /></div>
    <main className='flex-1 bg-none sm:bg-[#191919]/10'>
      {children}
    </main>
    </section>

  )
}

export default DashboardLayout