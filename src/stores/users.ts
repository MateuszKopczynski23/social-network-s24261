import { createStore } from 'zustand/vanilla';

import { User } from '@/interfaces/user';
import { users } from '@/data/user/users';

export type UsersState = {
  users: User[] | [];
};

export type UsersActions = {};

export type UsersStore = UsersState & UsersActions;

export const initUsersStore = (users?: UsersState['users']): UsersState => {
  return { users: users || [] };
};

export const defaultInitState: UsersState = {
  users: [...users],
};

export const createUsersStore = (initState: UsersState = defaultInitState) => {
  return createStore<UsersStore>(() => ({
    ...initState,
  }));
};
