import { z } from 'zod';

import { User } from '@/interfaces/user';

export type DisplayFormValues = z.infer<typeof displayFormSchema>;

export const displayFormSchema = z.object({
  isStickyHeader: z.boolean().optional(),
  isActiveFriendsVisible: z.boolean().optional(),
});

export const displayFormDefaultValues = (user: User | null) => {
  return {
    isStickyHeader: user?.settings.isStickyHeader || true,
    isActiveFriendsVisible: user?.settings.isActiveFriendsVisible || true,
  };
};
