'use client';
import React from 'react'
import SidebarList from './SidebarList';
import Link from 'next/link';


const Sidebar = () => {

  return (
    <aside className='flex flex-col w-[300px] z-50 bg-white'>
      <Link href='/' className='flex justify-center items-center'>
        <h1 className='text-2xl font-bold text-slate-700 py-6'>
          AnimeBinge
        </h1>
      </Link>
      <SidebarList/>
    </aside>
  )
}
export default Sidebar