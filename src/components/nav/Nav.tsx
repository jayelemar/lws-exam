'use client';
import { FC, memo } from "react"
import { useMobileNavStore } from "@/store/MobileNavStore";
import Link from "next/link";
import { links } from "./NavData";

type NavProps = {
  containerStyles: string,
  linkStyles: string,
  activeLinkStyles:string,
}

const Nav:FC<NavProps> = ({ containerStyles, linkStyles }) => {
  const {isOpen, setIsOpen } = useMobileNavStore()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path} 
          className={linkStyles}
          onClick={() => setIsOpen(false)}
        >
          <span className="capitalize cursor-pointer">{link.name}</span>
        </Link>
      ))}
      <div className="text-[#191919] text-2xl flex flex-col gap-4 mt-24 w-full">
        <Link href="/register" className=' px-4 xl:px-0 border-white-700 xl:border xl:border-solid xl:rounded-[5px] w-full h-11 flex justify-center items-center' >
          Sign Up
        </Link>
        <Link href="/login" className='bg-[#106580] border border-solid border-[#106580] rounded-[5px] w-full h-11 flex justify-center items-center px-4 xl:px-0 text-white/80 xl:text-foreground' >
          Log In
        </Link>
      </div>
    </nav>
  );
}
export default memo(Nav);
















