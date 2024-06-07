import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const CommentForm: FC = () => {
  return (
    <div className="flex w-full justify-between gap-x-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar"
          className="object-cover"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <Input
        className="flex-1"
        placeholder="Type something interesting..."
      />
    </div>
  );
};

export default CommentForm;
