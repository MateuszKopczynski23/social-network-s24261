import React, { FC, ReactNode } from 'react';

import { AuthStoreProvider } from '@/providers/store/AuthStoreProvider';
import { AuthState } from '@/stores/auth';
import { GroupsStoreProvider } from '@/providers/store/GroupsStoreProvider';

interface StoreProviderProps {
  authState?: AuthState;
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, authState }) => {
  const defaultUser = authState?.user;

  return (
    <AuthStoreProvider user={defaultUser}>
      <GroupsStoreProvider>{children}</GroupsStoreProvider>
    </AuthStoreProvider>
  );
};

export default StoreProvider;
