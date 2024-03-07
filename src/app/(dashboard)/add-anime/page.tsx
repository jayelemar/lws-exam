"use client"
import DashboardLayout from '@/components/layout/DashboardLayout'
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useCreateAnime } from '@/services/animeServices'
import { useRouter } from 'next/navigation'
import { categories } from '@/data/CategoriesData'
import { FormSchema } from '@/components/form/FormSchema'


const AddAnime = () => {
  const {mutateAsync:CreateAnimeMutation} = useCreateAnime()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      desc: "",
      categories: [],
    },
  });
 
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await CreateAnimeMutation(data);
      toast({
        title: "Anime created successfully.",
      })
      router.push('/dashboard')
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed", 
        description: `${error}`,
      })
    }
  }

  return (
    <DashboardLayout>
        <div className="container flex justify-center items-center min-h-[100vh] flex-col">
        <Label className='text-3xl text-primary mb-2'>Add Anime</Label>
        <Card className='p-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex flex-col xl:flex-row gap-y-4 gap-x-8 mb-6 justify-center items-start">
                <div className="basis-1/2 space-y-5">
                  
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className='relative'>
                      <FormLabel className='text-black'>Name</FormLabel>
                      <FormControl>
                        <Input {...field} className='w-full'/>
                      </FormControl>
                      <FormMessage className='absolute -bottom-4 left-0 text-[10px] whitespace-nowrap' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="desc"
                  render={({ field }) => (
                    <FormItem className='relative flex flex-col w-full'>
                      <FormLabel className='text-black'>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Anime Description"
                          className="resize-none w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='absolute -bottom-4 left-0 text-[10px]'/>
                    </FormItem>
                  )}
                />
                </div>
                <div className="">
                <FormField
                  control={form.control}
                  name="categories"
                  render={() => (
                    <FormItem className='relative'>
                      <div className="mb-4">
                        <FormLabel className="text-base">Categories</FormLabel>
                        <FormDescription className='text-[10px] mt-3'>
                          Please select the categories you want to display in your created anime.
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                      {categories.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="categories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      </div>
                      <FormMessage className='absolute -bottom-7 left-0 text-[10px]'/>
                    </FormItem>
                  )}
                />
                </div>
              </div>
              <Button type="submit" className='w-full xl:w-1/2 mx-auto flex xl:justify-center xl:items-center'>Submit</Button>
            </form>
          </Form>
        </Card>

      </div>
    </DashboardLayout>
  )
}

export default AddAnime