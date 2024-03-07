'use client';
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const handleLogout = () => {
    
  }
  return (
    <aside className=' min-w-[300px] h-full bg-[#191919] flex justify-center start'>

      <nav className='h-full flex flex-col justify-center items-stretch py-20 max-h-screen'>
        <ul className='flex  flex-col gap-y-12 flex-grow'>
          <li className='cursor-pointer'>
            <Link href='/dashboard'>Home</Link>
          </li>
          <li className='cursor-pointer'>
            <Link href='/view-anime'>View</Link>
          </li>          
          <li className='cursor-pointer'>
            <Link href='/add-anime'>Add Anime</Link>
          </li>
        </ul>

        <div className='cursor-pointer '>
          <Link 
            href='/'
            onClick={handleLogout}
          >
            Log out
          </Link>
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar