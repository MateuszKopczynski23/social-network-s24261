import { z } from 'zod';

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string(),
});

export const loginFormDefaultValues: LoginFormValues = {
  email: '',
  password: '',
};
