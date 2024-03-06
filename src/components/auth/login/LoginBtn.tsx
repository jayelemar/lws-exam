import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm'

const LoginBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href="#" className='bg-[#106580] border border-solid border-[#106580] rounded-[5px] w-full h-11 flex justify-center items-center px-4 xl:px-0 text-white/80 xl:text-foreground' >
          Log In
        </Link>
      </DialogTrigger>
      <DialogContent className="w-full xl:w-[400px]">
        <LoginForm/>
      </DialogContent>
    </Dialog>














  )
}

export default LoginBtn