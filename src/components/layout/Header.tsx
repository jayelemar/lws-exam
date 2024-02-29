
import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center w-full top-[68px] left-0 z-50 fixed ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center relative">
          <h1 className='text-2xl font-bold'>
            AnimeBinge
          </h1>
          <div className="flex flex-row justify-between items-center">
            <div className=" flex-row justify-between w-auto gap-[53px] absolute top-2 left-1/2 hidden xl:flex">
              <Link href='/'>
              Home</Link>
              <Link href='/'>
                  Discover
              </Link>
            </div>
            <div className="hidden xl:flex flex-row justify-center items-center gap-x-8 w-[400px]">
              <Link href='/' className='w-full h-11 flex justify-center items-center'>
                About Us
              </Link>
 
                <Link href="#" className='border-white-700 border border-solid rounded-[5px] w-full h-11 flex justify-center items-center' >
                    Sign Up
                </Link>
                <Link href="#" className='bg-[#106580] border border-solid border-[#106580] rounded-[5px] w-full h-11 flex justify-center items-center' >
                    Log In
                </Link>

            </div>
            {/* Mobile Nav */}
            <AlignRight  className='flex xl:hidden cur'/>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header