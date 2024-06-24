'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createGroupsStore, type GroupsStore } from '@/stores/groups';

export type GroupsStoreApi = ReturnType<typeof createGroupsStore>;

export const GroupsStoreContext = createContext<GroupsStoreApi | undefined>(
  undefined
);

export interface GroupsStoreProviderProps {
  children: ReactNode;
}

export const GroupsStoreProvider = ({ children }: GroupsStoreProviderProps) => {
  const storeRef = useRef<GroupsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createGroupsStore();
  }

  return (
    <GroupsStoreContext.Provider value={storeRef.current}>
      {children}
    </GroupsStoreContext.Provider>
  );
};

export const useGroupsStore = <T,>(selector: (store: GroupsStore) => T): T => {
  const groupsStoreContext = useContext(GroupsStoreContext);

  if (!groupsStoreContext) {
    throw new Error('useGroupsStore must be used within GroupsStoreProvider');
  }

  return useStore(groupsStoreContext, selector);
};
