import { z } from 'zod';

import { User } from '@/interfaces/user';

export type PrivacyFormValues = z.infer<typeof privacyFormSchema>;

export const privacyFormSchema = z.object({
  isPrivate: z.boolean().optional(),
});

export const privacyFormDefaultValues = (user: User | null) => {
  return {
    isPrivate: user?.settings.isPrivate,
  };
};
