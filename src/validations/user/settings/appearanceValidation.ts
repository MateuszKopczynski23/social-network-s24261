import { z } from 'zod';

export type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

export const appearanceFormSchema = z.object({
  font: z.enum(['inter', 'manrope', 'system']).optional(),
  theme: z.enum(['light', 'dark', 'none']).optional(),
});

export const appearanceFormDefaultValues: Partial<AppearanceFormValues> = {
  theme: 'none',
};
