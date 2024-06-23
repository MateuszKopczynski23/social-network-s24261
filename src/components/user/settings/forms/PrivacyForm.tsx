'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import merge from 'lodash/merge';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import {
  privacyFormDefaultValues,
  privacyFormSchema,
  PrivacyFormValues,
} from '@/validations/user/settings/privacyValidation';

const PrivacyForm: FC = () => {
  const { user, update } = useAuthStore((state) => state);
  const defaultValues = privacyFormDefaultValues(user);

  const form = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacyFormSchema),
    defaultValues,
  });

  const handleUpdate = async (data: PrivacyFormValues) => {
    try {
      if (!user) return;

      const updatedUser = merge({}, user, { settings: data });

      await update(updatedUser);
      toast.success('User updated successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (data: PrivacyFormValues) => handleUpdate(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="isPrivate"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Private profile</FormLabel>
                  <FormDescription>
                    Set your profile to private to hide your posts
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Update privacy</Button>
      </form>
    </Form>
  );
};

export default PrivacyForm;
