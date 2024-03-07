
'use client';
import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { useMobileNavStore } from "@/store/MobileNavStore";
import MobileNav from '../nav/MobileNav';
import Nav from '../nav/Nav';
import { useLogoutUser } from '@/services/authServices';
import { useToast } from '../ui/use-toast';
import { useAuthStore } from '@/store/AuthStore';




const Header = () => {
  const {mutate: LogoutMutation } = useLogoutUser()
  const { toast } = useToast()
  const {setIsLoggedIn, isLoggedIn } = useAuthStore()

  // header style event transition
  const [header, setHeader] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })

    // remove event
    return () => window.removeEventListener('scroll', () => scrollYPos )
  }, [])
  
  // Mobile Nav Event
  const { setIsOpen } = useMobileNavStore()
  const handleClick = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true)
  };
  
  const handleLogout = async () => {
    try {
      await LogoutMutation();
      await setIsLoggedIn(false);
      toast({
        title: "User Logout Successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive", 
        title: "Login failed", 
        description: `${error}`,
      })
    }
  };



  return (
    <header className={
      `${
        header 
        ? "py-4 bg-[#191919]/90" 
        : "flex flex-row justify-center items-center  top-[68px] left-0 z-50 bg-transparent"
      } fixed top-0 z-30 transition-all w-full bg-[#191919]/90
      `
    }
  >
    {/* <header className=" "> */}
      <div className="container mx-auto ">
        <div className="flex justify-between items-center relative">
          <h1 className='text-2xl font-bold'>
            AnimeBinge
          </h1>
          <div className="flex flex-row justify-between items-center">
            <div className=" flex-row justify-between w-auto gap-[53px] absolute top-2 left-1/2 hidden xl:flex text-[#191919] xl:text-foreground">
              <Link href='/'>
              Home</Link>
              <Link href='/discover'>
                  Discover
              </Link>
            </div>
            <div className="hidden xl:flex flex-row justify-center items-center gap-x-8 w-[400px] text-[#191919] xl:text-foreground">
              <Link href='/about' className='w-full h-11 flex justify-center items-center'>
                About Us
              </Link>


              <Link href="/register" className=' px-4 xl:px-0 border-white-700 xl:border xl:border-solid xl:rounded-[5px] w-full h-11 flex justify-center items-center' >
                            Sign Up
                  </Link>
                  <Link href="/login" className='bg-[#106580] border border-solid border-[#106580] rounded-[5px] w-full h-11 flex justify-center items-center px-4 xl:px-0 text-white/80 xl:text-foreground' >
                    Log In
                  </Link>



              {/* <Link 
                href="/" 
                onClick={handleLogout}
                className='bg-[#106580] border border-solid border-[#106580] rounded-[5px] w-full h-11 flex justify-center items-center px-4 xl:px-0 text-white/80 xl:text-foreground' >
                  Logout
                </Link> */}



 







 








            </div>
            {/* Mobile Nav */}
            <AlignRight
              className='flex xl:hidden cursor-pointer'
              onClick={handleClick}
            />
            <MobileNav>
              <Nav 
                containerStyles='flex flex-col gap-y-6 items-center' 
                linkStyles='text-2xl text-black' 
                activeLinkStyles=''
              />
            </MobileNav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header