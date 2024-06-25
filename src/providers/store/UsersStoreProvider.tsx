'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import {
  createUsersStore,
  initUsersStore,
  type UsersStore,
} from '@/stores/users';
import { User } from '@/interfaces/user';

export type UsersStoreApi = ReturnType<typeof createUsersStore>;

export const UsersStoreContext = createContext<UsersStoreApi | undefined>(
  undefined
);

export interface UsersStoreProviderProps {
  children: ReactNode;
  users?: User[] | [];
}

export const UsersStoreProvider = ({
  children,
  users,
}: UsersStoreProviderProps) => {
  const storeRef = useRef<UsersStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUsersStore(initUsersStore(users));
  }

  return (
    <UsersStoreContext.Provider value={storeRef.current}>
      {children}
    </UsersStoreContext.Provider>
  );
};

export const useUsersStore = <T,>(selector: (store: UsersStore) => T): T => {
  const usersStoreContext = useContext(UsersStoreContext);

  if (!usersStoreContext) {
    throw new Error('useUsersStore must be used within UsersStoreProvider');
  }

  return useStore(usersStoreContext, selector);
};
