import { z } from 'zod';

export type AddGroupFormValues = z.infer<typeof addGroupFormSchema>;

export const addGroupFormSchema = z.object({
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
  imageUrl: z.string().optional(),
  isPrivate: z.boolean().default(false),
});

export const addGroupFormDefaultValues: Partial<AddGroupFormValues> = {
  name: '',
  description: '',
  imageUrl: '',
  isPrivate: false,
};
