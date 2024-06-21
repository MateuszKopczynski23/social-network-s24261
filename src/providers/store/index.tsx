import React, { FC, ReactNode } from 'react';

import { AuthStoreProvider } from '@/providers/store/AuthStoreProvider';
import { AuthState } from '@/stores/auth';

interface StoreProviderProps {
  authState?: AuthState;
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, authState }) => {
  const defaultUser = authState?.user;

  return <AuthStoreProvider user={defaultUser}>{children}</AuthStoreProvider>;
};

export default StoreProvider;
