import { z } from 'zod';

export type AddCommentFormValues = z.infer<typeof addCommentFormSchema>;

export const addCommentFormSchema = z.object({
  content: z
    .string()
    .min(2, { message: 'Content must be at least 2 characters.' })
    .max(1000, {
      message: 'Content must not be longer than 1000 characters.',
    }),
});

export const addCommentFormDefaultValues: Partial<AddCommentFormValues> = {
  content: '',
};
