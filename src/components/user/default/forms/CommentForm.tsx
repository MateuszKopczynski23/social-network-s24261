'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import merge from 'lodash/merge';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { User } from '@/interfaces/user';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';
import {
  addCommentFormDefaultValues,
  addCommentFormSchema,
  AddCommentFormValues,
} from '@/validations/user/posts/addCommentValidation';

interface CommentFormProps {
  postId: string;
}

const CommentForm: FC<CommentFormProps> = ({ postId }) => {
  const { user } = useAuthStore((state) => state);
  const { addComment } = usePostsStore((state) => state);

  const form = useForm<AddCommentFormValues>({
    resolver: zodResolver(addCommentFormSchema),
    defaultValues: addCommentFormDefaultValues,
    mode: 'onChange',
  });

  if (!user) return null;

  const handleAdd = async (data: AddCommentFormValues) => {
    try {
      if (!user) return;

      const comment = merge({}, data, {
        id: uuidv4(),
        user: user as User,
        createdAt: Date.now().toString(),
      });

      addComment(postId, comment);
      form.reset();

      toast.success('Comment added successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (data: AddCommentFormValues) => handleAdd(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5"
      >
        <div className="flex w-full justify-between gap-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user?.imageUrl || DEFAULT_AVATAR_IMAGE}
              alt="Avatar"
              className="object-cover"
            />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="flex-1"
                    placeholder="Type something interesting..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default CommentForm;
