'use client';

import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';

const CommentForm: FC = () => {
  const { user } = useAuthStore((state) => state);

  return (
    <div className="flex w-full justify-between gap-x-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={user?.imageUrl || DEFAULT_AVATAR_IMAGE}
          alt="Avatar"
          className="object-cover"
        />
        <AvatarFallback>F</AvatarFallback>
      </Avatar>

      <Input
        className="flex-1"
        placeholder="Type something interesting..."
      />
    </div>
  );
};

export default CommentForm;
