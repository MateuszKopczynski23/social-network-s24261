import { createStore } from 'zustand/vanilla';

import { posts } from '@/data/user/posts';
import { Post } from '@/interfaces/post';

export type PostsState = {
  posts: Post[] | [];
};

export type PostsActions = {};

export type PostsStore = PostsState & PostsActions;

export const defaultInitState: PostsState = {
  posts: [...posts],
};

export const createPostsStore = (initState: PostsState = defaultInitState) => {
  return createStore<PostsStore>()(() => ({
    ...initState,
  }));
};
