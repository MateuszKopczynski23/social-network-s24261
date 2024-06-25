import { createStore } from 'zustand/vanilla';
import find from 'lodash/find';
import includes from 'lodash/includes';
import filter from 'lodash/filter';

import { users } from '@/data/user/users';
import { User } from '@/interfaces/user';

export type UsersState = {
  users: User[] | [];
};

export type UsersActions = {
  getUserFriends: (userId: string) => User[];
  getUserFriendRequests: (userId: string) => User[];
  getUserNewFriends: (userId: string) => User[];
};

export type UsersStore = UsersState & UsersActions;

export const initUsersStore = (users?: UsersState['users']): UsersState => {
  return { users: users || [] };
};

export const defaultInitState: UsersState = {
  users: [...users],
};

export const createUsersStore = (initState: UsersState = defaultInitState) => {
  return createStore<UsersStore>((set, get) => ({
    ...initState,

    getUserFriends: (userId: string) => {
      const allUsers = get().users;
      const authUser = find(allUsers, { id: userId });

      if (!authUser) return [];

      return filter(allUsers, (user) => includes(authUser.friends, user.id));
    },

    getUserFriendRequests: (userId: string) => {
      const allUsers = get().users;
      const authUser = find(allUsers, { id: userId });

      if (!authUser) return [];

      return filter(allUsers, (user) =>
        includes(authUser.friendRequests, user.id)
      );
    },

    getUserNewFriends: (userId: string) => {
      const allUsers = get().users;
      const authUser = find(allUsers, { id: userId });

      if (!authUser) return [];

      return filter(
        allUsers,
        (user) =>
          !includes(authUser.friends, user.id) &&
          !includes(authUser.friendRequests, user.id)
      );
    },
  }));
};
