import * as React from "react";

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
