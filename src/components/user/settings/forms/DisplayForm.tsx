'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import merge from 'lodash/merge';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  displayFormDefaultValues,
  displayFormSchema,
  DisplayFormValues,
} from '@/validations/user/settings/displayValidation';
import { Switch } from '@/components/ui/switch';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const DisplayForm: FC = () => {
  const { user, update } = useAuthStore((state) => state);
  const defaultValues = displayFormDefaultValues(user);

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  });

  const handleUpdate = async (data: DisplayFormValues) => {
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

  const onSubmit = (data: DisplayFormValues) => handleUpdate(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="isStickyHeader"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Sticky header</FormLabel>
                  <FormDescription>
                    This option will make the page header non-sticky, ensuring
                    it always remains at the top of the page.
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
          <FormField
            control={form.control}
            name="isActiveFriendsVisible"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Active friends in Sidebar
                  </FormLabel>
                  <FormDescription>
                    This option will hide the Active Friends section in the
                    sidebar.
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
        <Button type="submit">Update display</Button>
      </form>
    </Form>
  );
};

export default DisplayForm;
