import { createStore } from 'zustand/vanilla';
import filter from 'lodash/filter';
import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import includes from 'lodash/includes';
import { union, without } from 'lodash';

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
  addPost: (newPost: Post) => void;
  deletePost: (postId: string) => void;
  addComment: (postId: string, newComment: Comment) => void;
  deleteComment: (postId: string, commentId: string) => void;
  likeComment: (postId: string, commentId: string, user: User) => void;
  unlikeComment: (postId: string, commentId: string, user: User) => void;
  likePost: (postId: string, user: User) => void;
  unlikePost: (postId: string, user: User) => void;

  isUserPost: (postId: string, user: User) => boolean;
  isUserComment: (postId: string, commentId: string, user: User) => boolean;
  isPostLikedByUser: (postId: string, user: User) => boolean;
  isCommentLikedByUser: (
    postId: string,
    commentId: string,
    user: User
  ) => boolean;
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

    addPost: (newPost: Post) => {
      set((state) => ({
        posts: [...state.posts, { ...newPost }],
      }));
    },

    deletePost: (postId: string) => {
      set((state) => ({
        posts: filter(state.posts, (post) => post.id !== postId),
      }));
    },

    isUserPost: (postId: string, user: User) => {
      const { posts } = get();
      const index = findIndex(
        posts,
        (post) => post.id === postId && post.user.id === user.id
      );
      return index !== -1;
    },

    likeComment: (postId: string, commentId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        if (!post.comments) return state;

        const commentIndex = findIndex(
          post.comments,
          (c) => c.id === commentId
        );

        if (commentIndex === -1) return state;

        const updatedComments = [...post.comments];
        const comment = updatedComments[commentIndex];

        if (!comment?.likes?.includes(user)) {
          comment.likes = union(comment.likes, [user]);
          updatedComments[commentIndex] = { ...comment };
          updatedPosts[postIndex] = { ...post, comments: updatedComments };
          return { posts: updatedPosts };
        }

        return state;
      });
    },

    unlikeComment: (postId: string, commentId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        if (!post.comments) return state;

        const commentIndex = findIndex(
          post.comments,
          (c) => c.id === commentId
        );

        if (commentIndex === -1) return state;

        const updatedComments = [...post.comments];
        const comment = updatedComments[commentIndex];

        comment.likes = without(comment.likes, user);
        updatedComments[commentIndex] = { ...comment };
        updatedPosts[postIndex] = { ...post, comments: updatedComments };

        return { posts: updatedPosts };
      });
    },

    isCommentLikedByUser: (postId: string, commentId: string, user: User) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      if (!post || !post.comments) return false;

      const comment = post.comments.find((c) => c.id === commentId);

      return comment?.likes?.includes(user) || false;
    },

    likePost: (postId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        if (!post?.likes?.includes(user)) {
          post.likes = union(post.likes, [user]);
          updatedPosts[postIndex] = { ...post };
          return { posts: updatedPosts };
        }

        return state;
      });
    },

    unlikePost: (postId: string, user: User) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        post.likes = without(post.likes, user);
        updatedPosts[postIndex] = { ...post };

        return { posts: updatedPosts };
      });
    },

    isPostLikedByUser: (postId: string, user: User) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      return post?.likes?.includes(user) || false;
    },

    addComment: (postId: string, newComment: Comment) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        post.comments = post.comments
          ? [...post.comments, newComment]
          : [newComment];
        updatedPosts[postIndex] = { ...post };

        return { posts: updatedPosts };
      });
    },

    deleteComment: (postId: string, commentId: string) => {
      set((state) => {
        const { posts } = state;
        const postIndex = findIndex(posts, (p) => p.id === postId);

        if (postIndex === -1) return state;

        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex];

        if (!post.comments) return state;

        const updatedComments = filter(
          post.comments,
          (c) => c.id !== commentId
        );
        updatedPosts[postIndex] = { ...post, comments: updatedComments };

        return { posts: updatedPosts };
      });
    },

    isUserComment: (postId: string, commentId: string, user: User) => {
      const { posts } = get();
      const post = posts.find((p) => p.id === postId);

      if (!post || !post.comments) return false;

      const comment = post.comments.find((c) => c.id === commentId);

      return comment?.user.id === user.id;
    },
  }));
};
