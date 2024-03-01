'use client';
import { FC, memo } from "react"
import { useMobileNavStore } from "@/store/MobileNavStore";
import Link from "next/link";
import { links } from "./NavData";
import LoginBtn from "../auth/login/LoginBtn";
import SignUpBtn from "../auth/signUp/SignUpBtn";


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
      <div className="text-black text-2xl flex flex-col gap-4 mt-24 w-full">

        <SignUpBtn />
        <LoginBtn />
      </div>


    </nav>
  );
}
export default memo(Nav);
















