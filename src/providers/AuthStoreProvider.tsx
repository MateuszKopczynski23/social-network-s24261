'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { type AuthStore, createAuthStore } from '@/stores/auth';

export type AuthStoreApi = ReturnType<typeof createAuthStore>;

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(
  undefined
);

export interface AuthStoreProviderProps {
  children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
  const storeRef = useRef<AuthStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error('useCounterStore must be used within CounterStoreProvider');
  }

  return useStore(authStoreContext, selector);
};
