

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


const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "required" })
    .email("This is not a valid email."),
  password: z
  .string()
  .min(1, { message: "required" }),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {mutateAsync:LoginMutation, isPending } = useLoginUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await LoginMutation(data);
      console.log("User Registrated Successfully")
      console.log(data)

    } catch (error) {
      console.error("Registration failed", error);
    }
  }

  return (
    <div className="w-full h-[90vh]">
      <Card className='p-6 pb-8'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col' >
            <div className='mb-48'>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center items-start relative mb-6'>
                  <FormLabel className='mt-2 mr-10'>Email:</FormLabel>
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
                <FormItem className='flex flex-col justify-center items-start relative mb-6'>
                  <FormLabel className='mr-4'>Password:</FormLabel>
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
                  className='absolute top-8 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className='absolute top-8 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            </div>
            <Button type="submit" className='w-full'>
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