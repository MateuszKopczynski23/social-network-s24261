'use client';

import { EllipsisVertical, Trash } from 'lucide-react';
import { FC } from 'react';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';

interface CommentSettings {
  postId: string;
  commentId: string;
}

const CommentSettings: FC<CommentSettings> = ({ postId, commentId }) => {
  const { deleteComment } = usePostsStore((state) => state);

  const handleDelete = () => {
    deleteComment(postId, commentId);

    toast.success('Comment deleted successfully!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="h-3 w-3 cursor-pointer text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommentSettings;
