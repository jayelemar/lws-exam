'use client';
import React from 'react'
import Link from 'next/link'
import { Home, LogOut, PlusCircle } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { useLogoutUser } from '@/services/authServices';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

const SidebarList = () => {
  const router = useRouter()
  const { toast } = useToast()
  const { mutateAsync:LogoutMutation } = useLogoutUser();
  const handleLogout = async () => {
    try {
      await LogoutMutation();
      toast({
        title: "User Logout Successfully",
      })
      router.push('/')
    } catch (error) {
      toast({
        title: "User Logout Failed",
      })
    }

  };
  return (
    <Command className="border-none lg:border shadow-none lg:shadow-md ">
      <CommandList>
        <CommandGroup className='text-slate-500 flex flex-col justify-center mb-20'>
          <CommandItem className='w-full'>
            <Link href='/dashboard' className='flex justify-center items-center text-lg py-2'>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </Link>
          </CommandItem>
          <CommandItem>
            <Link href='/add-anime' className='flex justify-center items-center text-lg py-2'>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Add Anime</span>
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandGroup className='text-slate-500 absolute bottom-1 '>
          <CommandItem className='w-[295px]'>
            <div 
              className='flex justify-center items-center text-lg py-2 cursor-pointer'
              onClick={handleLogout}  
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default SidebarList