import { z } from 'zod';

import { User } from '@/interfaces/user';

export type AccountFormValues = z.infer<typeof accountFormSchema>;

export const accountFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(30, { message: 'First name must not be longer than 30 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(30, { message: 'Last name must not be longer than 30 characters.' }),
  age: z
    .number()
    .min(0, { message: 'Age must be a positive number.' })
    .max(120, { message: 'Age must be less than 120.' })
    .optional(),
  city: z.string().optional(),
  dateOfBirth: z
    .string()
    .refine(
      (val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
      },
      {
        message: 'Invalid date format.',
      }
    )
    .transform((val) => new Date(val).toISOString())
    .optional(),
  imageUrl: z.string().optional(),
  backgroundUrl: z.string().optional(),
  description: z.string().optional(),
  street: z.string().optional(),
  country: z.string().optional(),
  gender: z.enum(['male', 'female']).optional(),
  email: z.string().email({ message: 'Invalid email address.' }),
});

export const accountFormDefaultValues = (user: User | null) => {
  return {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || 0,
    city: user?.city || '',
    dateOfBirth: user?.dateOfBirth || '',
    imageUrl: user?.imageUrl || '',
    backgroundUrl: user?.backgroundUrl || '',
    description: user?.description || '',
    street: user?.street || '',
    country: user?.country || '',
    gender: user?.gender || 'male',
    email: user?.email || '',
  };
};
