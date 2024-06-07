'use client';

import { FC, useState } from 'react';
import { MessageCircle, Settings, Share2, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

import { comments } from '@/data/user/comments';
import Comment from '@/components/user/default/Comment';
import CommentForm from '@/components/user/default/forms/CommentForm';
import { Post as IPost } from '@/data/user/posts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={post.userImage}
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div>
              <p className="font-bold">{post.userName}</p>
              <p className="text-xs text-muted-foreground">15m ago</p>
            </div>
          </div>

          <Settings className="mt-2 h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-sm">{post.description}</p>

          {post.image && (
            <div className="relative mt-4 h-60 w-full 2xl:h-96">
              <Image
                src={post.image}
                alt="post"
                className="rounded-bl-2xl rounded-tr-2xl object-cover"
                fill
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex items-start gap-x-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-x-1">
            <ThumbsUp className="h-3.5 w-3.5" /> {post.likes}
          </div>
          <div className="flex items-center gap-x-1">
            <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
          </div>
        </div>
        <Separator className="my-3 px-3" />
        <div className="grid w-full grid-cols-3">
          <div className="flex items-center justify-center gap-x-2 text-sm">
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
        <CommentForm />

        {isCommentsVisible && (
          <div className="mt-6 flex flex-col gap-y-4">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                comment={comment}
              />
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Post;
