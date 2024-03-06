import * as React from "react";
import SignUpBtn from "../auth/signUp/SignUpBtn";
import LoginBtn from "../auth/login/LoginBtn";

export type LinkType = { 
  path: string;
  name: string | React.ReactNode;
};

export const links: LinkType[] = [
  { 
    path: '/',
    name: 'Home',
  },  
  { 
    path: '/discover',
    name: 'Discover',
  }, 
  { 
    path: '/about',
    name: 'About Us',
  },  
];
