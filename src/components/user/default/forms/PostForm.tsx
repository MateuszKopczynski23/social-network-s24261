'use client';

import { AtSign, Image as Photo, Send } from 'lucide-react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import merge from 'lodash/merge';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { User } from '@/interfaces/user';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';
import {
  addPostFormDefaultValues,
  addPostFormSchema,
  AddPostFormValues,
} from '@/validations/user/posts/addPostValidation';
import { useUsersStore } from '@/providers/store/UsersStoreProvider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PostForm: FC = () => {
  const { user } = useAuthStore((state) => state);
  const { addPost } = usePostsStore((state) => state);
  const { getUserFriends } = useUsersStore((state) => state);

  const [isImageInputVisible, setIsImageInputVisible] = useState(false);
  const [isMentionInputVisible, setIsMentionInputVisible] = useState(false);

  const form = useForm<AddPostFormValues>({
    resolver: zodResolver(addPostFormSchema),
    defaultValues: addPostFormDefaultValues,
    mode: 'onChange',
  });

  if (!user) return null;

  const users = getUserFriends(user);

  const handleAdd = async (data: AddPostFormValues) => {
    try {
      if (!user) return;

      const post = merge({}, data, {
        id: uuidv4(),
        user: user as User,
        createdAt: new Date().toISOString(),
      });

      addPost(post);
      form.reset();

      setIsImageInputVisible(false);
      setIsMentionInputVisible(false);

      toast.success('Post created successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (data: AddPostFormValues) => handleAdd(data);

  return (
    <Card>
      <CardContent className="p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="flex w-full justify-between gap-x-3">
              <Avatar className="hidden h-10 w-10 lg:flex">
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
                        className="min-h-20 flex-1 resize-none rounded-sm border-none pl-1 pt-0.5 lg:min-h-0"
                        placeholder="Type something interesting..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="lg:hidden"
                type="submit"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {isImageInputVisible && (
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className="flex-1">
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
            )}

            {isMentionInputVisible && user && (
              <FormField
                control={form.control}
                name="mentionedUser"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select friend..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {users.map((user) => (
                          <SelectItem
                            key={user.id}
                            value={user.id}
                          >
                            {user.firstName} {user.lastName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-start pb-4">
        <Separator className="mb-3 mt-1 px-3" />
        <div className="grid w-full grid-cols-2">
          <div
            onClick={() => setIsImageInputVisible(!isImageInputVisible)}
            className="flex items-center justify-center gap-x-2 text-sm"
          >
            <Photo className="h-5 w-5 text-primary/60" /> Photo/video
          </div>
          <div
            onClick={() => setIsMentionInputVisible(!isMentionInputVisible)}
            className="flex items-center justify-center gap-x-2 text-sm"
          >
            <AtSign className="h-5 w-5 text-primary/60" /> Mention
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
