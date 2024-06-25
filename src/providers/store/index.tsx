import React, { FC, ReactNode } from 'react';

import { AuthStoreProvider } from '@/providers/store/AuthStoreProvider';
import { AuthState } from '@/stores/auth';
import { GroupsStoreProvider } from '@/providers/store/GroupsStoreProvider';
import { EventsStoreProvider } from '@/providers/store/EventsStoreProvider';
import { UsersStoreProvider } from '@/providers/store/UsersStoreProvider';

interface StoreProviderProps {
  authState?: AuthState;
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, authState }) => {
  const defaultUser = authState?.user;

  return (
    <AuthStoreProvider user={defaultUser}>
      <UsersStoreProvider>
        <GroupsStoreProvider>
          <EventsStoreProvider>{children}</EventsStoreProvider>
        </GroupsStoreProvider>
      </UsersStoreProvider>
    </AuthStoreProvider>
  );
};

export default StoreProvider;
