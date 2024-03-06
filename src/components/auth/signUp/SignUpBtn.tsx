import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Link from 'next/link'
import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpBtn = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
      <Link href="#" className=' px-4 xl:px-0 border-white-700 xl:border xl:border-solid xl:rounded-[5px] w-full h-11 flex justify-center items-center' >
        Sign Up
      </Link>
      </DialogTrigger>
      <DialogContent className="w-full xl:w-[400px]">
        <SignUpForm/>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpBtn