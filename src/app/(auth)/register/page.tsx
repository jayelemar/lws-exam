'use client';
import { useRegisterUser } from "@/services/authServices"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FormSchema = z.object({
name: z
.string()
.min(1, { message: "required" }),
email: z
  .string()
  .min(1, { message: "required" })
  .email("This is not a valid email."),
password: z
.string()
.min(6, { message: "required" }),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {mutateAsync:RegisterMutation, isPending, isSuccess } = useRegisterUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  })

  const router = useRouter()
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await RegisterMutation(data);
      console.log("User Registrated Successfully")
      router.push('/dashboard')

    } catch (error) {
      console.error("Registration failed", error);
    }
  }
  return (
    <section className="w-full sm:bg-[#191919]/80 ">
      <div className="container mx-auto h-screen flex justify-center items-center">
      <Card className='animate-slide-up flex justify-center items-center mx-4 w-full md:w-[400px] mb-4 h-[500px] md:h-[500px] shadow-none md:shadow-lg border-none '>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
              <Label className='flex items-center justify-center text-2xl'>Register</Label>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mt-2 mr-10'>Name:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mt-2 mr-10'>Email:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
    
              <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mr-4'>Password:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        type={showPassword ? 'text' : 'password'} 
                        {...field}
                      />            
                    </FormControl>
                    <FormMessage />
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
                
              <Button type="submit" className='w-full'>Register</Button>
              <div className=" flex justify-between items-center">
                <Link
                    href="/login"
                    className="text-base font-normal flex text-slate-500 relative bottom-0"
                >
                    Login
                </Link>
                <Link href='/' className='text-base font-normal flex text-slate-500'>
 
                  Home
                </Link>
              </div>
            </form>
          </Form>
        </Card>
      </div>

    </section>
  )
}

export default Register