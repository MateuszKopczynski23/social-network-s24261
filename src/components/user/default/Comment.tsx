import { ThumbsUp } from 'lucide-react';
import { FC } from 'react';

import { Comment as IComment } from '@/interfaces/comment';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { cn } from '@/lib/utils';
import CommentSettings from '@/components/user/default/CommentSettings';
import { timeAgo } from '@/utils/timeAgo';

interface CommentProps {
  comment: IComment;
  postId: string;
  likesCount: number;
}

const Comment: FC<CommentProps> = ({ comment, postId, likesCount }) => {
  const { user } = useAuthStore((state) => state);
  const { likeComment, unlikeComment, isCommentLikedByUser } = usePostsStore(
    (state) => state
  );

  if (!user) return null;

  const handleLikeComment = () => {
    isCommentLikedByUser(postId, comment.id, user)
      ? unlikeComment(postId, comment.id, user)
      : likeComment(postId, comment.id, user);
  };

  return (
    <div className="flex w-full gap-x-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={comment.user.imageUrl || DEFAULT_AVATAR_IMAGE}
          alt="Avatar"
          className="object-cover"
        />
        <AvatarFallback>F</AvatarFallback>
      </Avatar>

      <div className="max-w-max">
        <div className="flex items-center gap-x-1">
          <div className="flex-1 rounded-xl bg-muted px-3 py-2 text-xs">
            <p className="mb-0.5 font-semibold text-primary/90">
              {comment.user.firstName} {comment.user.lastName}
            </p>
            <p>{comment.content}</p>
          </div>

          <CommentSettings
            postId={postId}
            commentId={comment.id}
          />
        </div>

        <div className="ml-2 mt-1.5 flex items-start gap-x-3 text-xs text-muted-foreground">
          <p className="text-xs text-muted-foreground">
            {timeAgo(comment.createdAt)}
          </p>
          <div
            onClick={handleLikeComment}
            className={cn(
              'flex items-center gap-x-1',
              isCommentLikedByUser(postId, comment.id, user) && 'text-primary'
            )}
          >
            <ThumbsUp className="h-3.5 w-3.5" /> {likesCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
