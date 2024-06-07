import { ThumbsUp } from 'lucide-react';
import { FC } from 'react';

import { Comment as IComment } from '@/data/user/comments';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommentProps {
  comment: IComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex w-full gap-x-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={comment.userImage}
          alt="Avatar"
          className="object-cover"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <div className="max-w-max">
        <div className="rounded-xl bg-muted px-3 py-2 text-xs">
          <p>{comment.content}</p>
        </div>

        <div className="ml-2 mt-1.5 flex items-start gap-x-3 text-xs text-muted-foreground">
          <p className="text-xs text-muted-foreground">58m ago</p>
          <div className="flex items-center gap-x-1">
            <ThumbsUp className="h-3.5 w-3.5" /> {comment.likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
