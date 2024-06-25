import { createStore } from 'zustand/vanilla';
import { filter } from 'lodash';
import size from 'lodash/size';
import includes from 'lodash/includes';

import { posts } from '@/data/user/posts';
import { Post } from '@/interfaces/post';
import { User } from '@/interfaces/user';
import { Comment } from '@/interfaces/comment';

export type PostsState = {
  posts: Post[] | [];
};

export type PostsActions = {
  getPosts: (user: User) => Post[];
  getEventPosts: (eventId: string) => Post[];
  getUserPosts: (userId: string) => Post[];
  getGroupPosts: (groupId: string) => Post[];
  getPostLikesCount: (postId: string) => number;
  getPostCommentsCount: (postId: string) => number;
  getPostComments: (postId: string) => Comment[];
  getCommentLikesCount: (postId: string, commentId: string) => number;
};

export type PostsStore = PostsState & PostsActions;

export const defaultInitState: PostsState = {
  posts: [...posts],
};

export const createPostsStore = (initState: PostsState = defaultInitState) => {
  return createStore<PostsStore>()((set, get) => ({
    ...initState,

    getPosts: (user: User) => {
      const { posts } = get();

      if (!user) return [];

      return filter(
        posts,
        (post) =>
          !post.eventId &&
          !post.groupId &&
          (post.user.id === user.id || includes(user.friends, post.user.id))
      );
    },

    getEventPosts: (eventId: string) => {
      const { posts } = get();

      return filter(posts, { eventId });
    },

    getUserPosts: (userId: string) => {
      const { posts } = get();

      return filter(posts, (post) => post.user.id === userId);
    },

    getGroupPosts: (groupId: string) => {
      const { posts } = get();

      return filter(posts, { groupId });
    },

    getPostLikesCount: (postId: string) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      return post ? size(post.likes) : 0;
    },

    getPostCommentsCount: (postId: string) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      return post ? size(post.comments) : 0;
    },

    getPostComments: (postId: string) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      return post ? post.comments || [] : [];
    },

    getCommentLikesCount: (postId: string, commentId: string) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      if (!post) return 0;

      const comment = post.comments?.find((c) => c.id === commentId);

      return comment ? size(comment.likes) : 0;
    },
  }));
};
