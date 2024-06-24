import { z } from 'zod';

export type AddEventFormValues = z.infer<typeof addEventFormSchema>;

export const addEventFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(30, { message: 'Name must not be longer than 30 characters.' }),
  description: z
    .string()
    .min(2, { message: 'Description must be at least 2 characters.' })
    .max(1000, {
      message: 'Description must not be longer than 1000 characters.',
    }),
  street: z
    .string()
    .min(2, { message: 'Street must be at least 2 characters.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters.' }),
  imageUrl: z.string().url({ message: 'Invalid URL.' }).optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format.',
  }),
});

export const addEventFormDefaultValues: Partial<AddEventFormValues> = {
  name: '',
  description: '',
  street: '',
  city: '',
  country: '',
  imageUrl: '',
  date: '',
};
