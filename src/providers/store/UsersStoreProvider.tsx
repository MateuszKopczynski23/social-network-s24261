'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createUsersStore, type UsersStore } from '@/stores/users';

export type UsersStoreApi = ReturnType<typeof createUsersStore>;

export const UsersStoreContext = createContext<UsersStoreApi | undefined>(
  undefined
);

export interface UsersStoreProviderProps {
  children: ReactNode;
}

export const UsersStoreProvider = ({ children }: UsersStoreProviderProps) => {
  const storeRef = useRef<UsersStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUsersStore();
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
