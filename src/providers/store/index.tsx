import React, { FC, ReactNode } from 'react';

import { AuthStoreProvider } from '@/providers/store/AuthStoreProvider';
import { AuthState } from '@/stores/auth';
import { GroupsStoreProvider } from '@/providers/store/GroupsStoreProvider';
import { EventsStoreProvider } from '@/providers/store/EventsStoreProvider';
import { UsersStoreProvider } from '@/providers/store/UsersStoreProvider';
import { UsersState } from '@/stores/users';
import { PostsStoreProvider } from '@/providers/store/PostsStoreProvider';

interface StoreProviderProps {
  authState?: AuthState;
  usersState?: UsersState;
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  authState,
  usersState,
}) => {
  const defaultUser = authState?.user;
  const defaultUsers = usersState?.users;

  return (
    <AuthStoreProvider user={defaultUser}>
      <UsersStoreProvider users={defaultUsers}>
        <PostsStoreProvider>
          <GroupsStoreProvider>
            <EventsStoreProvider>{children}</EventsStoreProvider>
          </GroupsStoreProvider>
        </PostsStoreProvider>
      </UsersStoreProvider>
    </AuthStoreProvider>
  );
};

export default StoreProvider;
