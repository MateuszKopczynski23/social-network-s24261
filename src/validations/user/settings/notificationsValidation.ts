import { z } from 'zod';

import { User } from '@/interfaces/user';

export type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

export const notificationsFormSchema = z.object({
  isNotificationsEnabled: z.boolean().optional(),
});

export const notificationsFormDefaultValues = (user: User | null) => {
  return {
    isNotificationsEnabled: user?.settings.isNotificationsEnabled,
  };
};
