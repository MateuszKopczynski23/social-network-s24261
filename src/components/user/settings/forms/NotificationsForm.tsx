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
import {
  notificationsFormDefaultValues,
  notificationsFormSchema,
  NotificationsFormValues,
} from '@/validations/user/settings/notificationsValidation';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const NotificationsForm: FC = () => {
  const { user, update } = useAuthStore((state) => state);
  const defaultValues = notificationsFormDefaultValues(user);

  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  const handleUpdate = async (data: NotificationsFormValues) => {
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

  const onSubmit = (data: NotificationsFormValues) => handleUpdate(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="isNotificationsEnabled"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">All notifications</FormLabel>
                  <FormDescription>
                    This option will disable all notifications.
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
        <Button type="submit">Update notifications</Button>
      </form>
    </Form>
  );
};

export default NotificationsForm;
