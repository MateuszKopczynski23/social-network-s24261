import React, { FC, ReactNode } from 'react';

import { AuthStoreProvider } from '@/providers/store/AuthStoreProvider';
import { AuthState } from '@/stores/auth';
import { GroupsStoreProvider } from '@/providers/store/GroupsStoreProvider';
import { EventsStoreProvider } from '@/providers/store/EventsStoreProvider';

interface StoreProviderProps {
  authState?: AuthState;
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, authState }) => {
  const defaultUser = authState?.user;

  return (
    <AuthStoreProvider user={defaultUser}>
      <GroupsStoreProvider>
        <EventsStoreProvider>{children}</EventsStoreProvider>
      </GroupsStoreProvider>
    </AuthStoreProvider>
  );
};

export default StoreProvider;
