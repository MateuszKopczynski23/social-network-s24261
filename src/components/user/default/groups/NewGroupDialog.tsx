'use client';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'lucide-react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import merge from 'lodash/merge';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useGroupsStore } from '@/providers/store/GroupsStoreProvider';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  addGroupFormDefaultValues,
  addGroupFormSchema,
  AddGroupFormValues,
} from '@/validations/user/groups/addGroupValidation';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { Switch } from '@/components/ui/switch';
import { User } from '@/interfaces/user';
import { Textarea } from '@/components/ui/textarea';

const NewGroupDialog: FC = () => {
  const { user } = useAuthStore((state) => state);
  const { addGroup } = useGroupsStore((state) => state);

  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<AddGroupFormValues>({
    resolver: zodResolver(addGroupFormSchema),
    defaultValues: addGroupFormDefaultValues,
    mode: 'onChange',
  });

  const handleAdd = async (data: AddGroupFormValues) => {
    try {
      if (!user) return;

      const group = merge({}, data, {
        id: uuidv4(),
        userId: user.id,
        user: user as User,
        users: [{ ...user }],
      });

      addGroup(group);
      setIsOpen(false);
      toast.success('User updated successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (data: AddGroupFormValues) => handleAdd(data);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
    >
      <DialogTrigger asChild>
        <div className="ml-auto">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add group
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New group</DialogTitle>
          <DialogDescription>
            Click create group when you are done
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Micheal Jordan fun club"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A group for all Micheal Jordan fans"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://random-image.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPrivate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-sm">Private profile</FormLabel>
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
            <div className="flex justify-end">
              <Button type="submit">Create group</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroupDialog;
