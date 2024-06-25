import { z } from 'zod';

export type AddPostFormValues = z.infer<typeof addPostFormSchema>;

export const addPostFormSchema = z.object({
  content: z
    .string()
    .min(2, { message: 'Content must be at least 2 characters.' })
    .max(1000, {
      message: 'Content must not be longer than 1000 characters.',
    }),
  imageUrl: z.string().optional(),
  mentionedUser: z.string().optional(),
});

export const addPostFormDefaultValues: Partial<AddPostFormValues> = {
  content: '',
  imageUrl: '',
  mentionedUser: '',
};
