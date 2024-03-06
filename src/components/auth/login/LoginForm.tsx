

import { Eye, EyeOff, Loader2 } from 'lucide-react'
import React from 'react'


import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLoginUser, useRegisterUser } from '@/services/authServices'
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useLoginModalStore } from '@/store/LoginModalStore';



const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "required" })
    .email("This is not a valid email."),
  password: z
  .string()
  .min(6, { message: "required" }),
});

const LoginForm = () => {
  const { setIsLoginModalOpen } = useLoginModalStore()

  const [showPassword, setShowPassword] = useState(false);

  const {mutateAsync:LoginMutation, isPending } = useLoginUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter()
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await LoginMutation(data);
      console.log("User Login Successfully")
      console.log(data)
      setIsLoginModalOpen(false)
      router.push('/dashboard')
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return (
    <div className="w-full h-300px max-h-[500px]">
      <Card className='p-6 pb-8'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col' >
            <div className='mb-24'>
            <FormLabel className='text-black text-3xl flex items-center justify-center mb-12'>Login</FormLabel>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center items-start relative mb-6'>
                  <FormLabel className='absolute -top-2 left-2 bg-white px-1 text-base'>Email:</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className='absolute -bottom-5 left-3 text-[10px]'  />
                </FormItem>
              )}
            />
  
            <div className="relative gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center items-start relative mb-6 mt-8'>
                  <FormLabel className='absolute -top-2 left-2 bg-white px-1 text-base'>Password:</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      type={showPassword ? 'text' : 'password'} 
                      {...field}
                    />            
                  </FormControl>
                  <FormMessage className='absolute -bottom-5 left-3 text-[10px]' />
                </FormItem>
              )}
            />
            {showPassword ? (
                <EyeOff
                  className='absolute top-4 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className='absolute top-4 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            </div>
            <Button type="submit" className='w-full text-lg'>
            { isPending ? <Loader2 className='animate-spin' />
              : 'Login' }
            </Button>
          </form>
        </Form>
      </Card>
  </div>
  )
}

export default LoginForm