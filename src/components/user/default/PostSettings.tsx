'use client';

import { Edit, Settings, Trash } from 'lucide-react';
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

interface PostSettings {
  postId: string;
}

const PostSettings: FC<PostSettings> = ({ postId }) => {
  const { deletePost } = usePostsStore((state) => state);

  const handleDelete = () => {
    deletePost(postId);

    toast.success('Post deleted successfully!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="mt-2 h-5 w-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Update</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostSettings;
