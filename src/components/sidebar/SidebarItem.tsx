'use client';
import { FC } from 'react'
import { ItemProps } from './SidebarData'


import Link from 'next/link'


type SidebarItemProps = {
  item:ItemProps,
}

const SidebarItem:FC<SidebarItemProps> = ({ item}) => {

  return (
    <li key={item.path} className=''>
        <Link href='/'>
          {item.icon}
          {item.title}
        </Link>
    </li>
  )
}

export default SidebarItem
