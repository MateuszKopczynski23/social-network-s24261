'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createPostsStore, PostsStore } from '@/stores/posts';

export type PostsStoreApi = ReturnType<typeof createPostsStore>;

export const PostsStoreContext = createContext<PostsStoreApi | undefined>(
  undefined
);

export interface PostsStoreProviderProps {
  children: ReactNode;
}

export const PostsStoreProvider = ({ children }: PostsStoreProviderProps) => {
  const storeRef = useRef<PostsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPostsStore();
  }

  return (
    <PostsStoreContext.Provider value={storeRef.current}>
      {children}
    </PostsStoreContext.Provider>
  );
};

export const usePostsStore = <T,>(selector: (store: PostsStore) => T): T => {
  const postsStoreContext = useContext(PostsStoreContext);

  if (!postsStoreContext) {
    throw new Error('usePostsStore must be used within PostsStoreProvider');
  }

  return useStore(postsStoreContext, selector);
};
