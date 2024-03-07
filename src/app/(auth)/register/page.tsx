'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegisterUser } from "@/services/authServices"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// UI Imports
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileNavStore } from "@/store/MobileNavStore";
import HeroBackgroundImage from "@/components/hero/HeroBackgroundImage";


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
  const { toast } = useToast()
  const {mutateAsync:RegisterMutation, } = useRegisterUser();
  const setIsOpen = useMobileNavStore().setIsOpen
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await RegisterMutation(data);
      console.log("User Registrated Successfully")
      toast({
        title: "User Registrated Successfully",
      })
      router.push('/dashboard')
      setIsOpen(false)

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed", 
        description: `${error}`,
      })
    }
  }
  return (
    <section className="w-full sm:bg-[#191919]/80 ">
      <div className="container mx-auto h-screen flex justify-center items-center">
      <HeroBackgroundImage />
      <Card className='animate-slide-up flex justify-center items-center mx-4 w-full md:w-[400px] mb-4 h-[500px] md:h-[500px] shadow-none md:shadow-lg border-none z-50'>
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
              <Button type="submit" className='w-full text-lg'>Register</Button>
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