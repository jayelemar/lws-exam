import { z } from "zod"

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  desc: z
  .string()
  .min(10, {
    message: "Description must be at least 10 characters.",
  })
  .max(30, {
    message: "Description must not be longer than 30 characters.",
  }),
  categories: z.array(z.string()).refine((value) => value.some((category) => category), {
    message: "You have to select at least one item.",
  }),
});