'use client';

import { FC, useState } from 'react';
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import Comment from '@/components/user/default/Comment';
import CommentForm from '@/components/user/default/forms/CommentForm';
import { Post as IPost } from '@/interfaces/post';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import PostSettings from '@/components/user/default/PostSettings';
import { useUsersStore } from '@/providers/store/UsersStoreProvider';
import { cn } from '@/lib/utils';
import { timeAgo } from '@/utils/timeAgo';
import { useNotificationsStore } from '@/providers/store/NotificationsStoreProvider';

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  const { user } = useAuthStore((state) => state);
  const {
    getPostLikesCount,
    getPostCommentsCount,
    getPostComments,
    getCommentLikesCount,
    isUserPost,
    likePost,
    unlikePost,
    isPostLikedByUser,
  } = usePostsStore((state) => state);
  const { getUserById } = useUsersStore((state) => state);
  const { addNotification } = useNotificationsStore((state) => state);

  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const commentsCount = getPostCommentsCount(post.id);
  const mentionedUser = getUserById(post.mentionedUser || '');

  if (!user) return null;

  const handleLikePost = () => {
    const isLike = isPostLikedByUser(post.id, user);
    const action = isLike ? 'unliked' : 'liked';

    const notification = {
      id: uuidv4(),
      user: post.user,
      sender: user,
      description: `${action} your post`,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    isLike ? unlikePost(post.id, user) : likePost(post.id, user);

    addNotification(notification);
  };

  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={post.user.imageUrl || DEFAULT_AVATAR_IMAGE}
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div>
              <p className="font-bold">
                {post.user.firstName} {post.user.lastName}
              </p>
              <p className="text-xs text-muted-foreground">
                {timeAgo(post.createdAt)}
              </p>
            </div>
          </div>

          {user && isUserPost(post.id, user) && (
            <PostSettings postId={post.id} />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-sm">{post.content}</p>

          {post.imageUrl && (
            <div className="relative mt-4 h-60 w-full 2xl:h-96">
              <Image
                src={post.imageUrl}
                alt="post"
                className="rounded-bl-2xl rounded-tr-2xl object-cover"
                fill
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex w-full justify-between">
          <div className="flex items-start gap-x-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-x-1">
              <ThumbsUp className="h-3.5 w-3.5" /> {getPostLikesCount(post.id)}
            </div>
            <div className="flex items-center gap-x-1">
              <MessageCircle className="h-3.5 w-3.5" /> {commentsCount}
            </div>
          </div>
          {mentionedUser && (
            <Link
              href={`/user/friends/${mentionedUser?.id}`}
              className="text-xs text-primary/80"
            >
              @{mentionedUser?.firstName} {mentionedUser?.lastName}
            </Link>
          )}
        </div>
        <Separator className="my-3 px-3" />
        <div className="grid w-full grid-cols-3">
          <div
            onClick={handleLikePost}
            className={cn(
              'flex items-center justify-center gap-x-2 text-sm',
              isPostLikedByUser(post.id, user) && 'text-primary'
            )}
          >
            <ThumbsUp className="h-5 w-5" /> Like
          </div>
          <div
            className="flex items-center justify-center gap-x-2 text-sm"
            onClick={() => setIsCommentsVisible(!isCommentsVisible)}
          >
            <MessageCircle className="h-5 w-5" /> Comment
          </div>
          <div className="flex items-center justify-center gap-x-2 text-sm">
            <Share2 className="h-5 w-5" /> Share
          </div>
        </div>
        <Separator className="mb-5 mt-3 px-3" />

        {isCommentsVisible && (
          <div className="mb-6 flex flex-col gap-y-4">
            {getPostComments(post.id).map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                postId={post.id}
                likesCount={getCommentLikesCount(post.id, comment.id)}
              />
            ))}
          </div>
        )}

        <CommentForm postId={post.id} />
      </CardFooter>
    </Card>
  );
};

export default Post;
