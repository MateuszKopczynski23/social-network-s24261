'use client';

import { FC } from 'react';

import PostForm from '@/components/user/default/forms/PostForm';
import Post from '@/components/user/default/Post';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const Feed: FC = () => {
  const { user } = useAuthStore((state) => state);
  const { getPosts } = usePostsStore((state) => state);

  if (!user) return null;

  return (
    <div className="grid items-start gap-6 lg:gap-8 xl:col-span-2">
      <PostForm />

      {getPosts(user).map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Feed;
