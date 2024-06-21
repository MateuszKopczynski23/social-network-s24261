'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import {
  accountFormDefaultValues,
  accountFormSchema,
  AccountFormValues,
} from '@/validations/user/settings/accountValidation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

const AccountForm: FC = () => {
  const { user } = useAuthStore((state) => state);
  const defaultValues = accountFormDefaultValues(user);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const handleUpdate = async (data: AccountFormValues) => {
    console.log(data);
  };

  const onSubmit = (data: AccountFormValues) => handleUpdate(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="none"
                  disabled
                  {...field}
                />
              </FormControl>
              <FormDescription>The email field is read-only.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input
                    placeholder="none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="None"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-4">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Gender</FormLabel>
                <div className="relative md:w-max">
                  <FormControl>
                    <select
                      className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'w-full appearance-none font-normal md:w-[200px]'
                      )}
                      {...field}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </FormControl>
                  <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'pl-3 text-left font-normal md:w-[240px]',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(new Date(field.value), 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) =>
                        field.onChange(date ? date.toISOString() : '')
                      }
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Avatar image</FormLabel>
              <FormControl>
                <Input
                  placeholder="none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backgroundUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background image</FormLabel>
              <FormControl>
                <Input
                  placeholder="none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
};

export default AccountForm;
