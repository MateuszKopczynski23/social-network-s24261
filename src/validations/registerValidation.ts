import { z } from 'zod';

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: 'First name must be at least 2 characters.',
      })
      .max(30, {
        message: 'First name must not be longer than 30 characters.',
      }),
    lastName: z
      .string()
      .min(2, {
        message: 'Last name must be at least 2 characters.',
      })
      .max(30, {
        message: 'Last name must not be longer than 30 characters.',
      }),
    email: z.string().email({
      message: 'Invalid email address.',
    }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
    passwordConfirmation: z.string().min(6, {
      message: 'Password confirmation must be at least 6 characters.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match.',
    path: ['passwordConfirmation'],
  });

export const defaultValues: RegisterFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};
