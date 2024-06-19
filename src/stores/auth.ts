import { createStore } from 'zustand/vanilla';
import head from 'lodash/head';
import isEqual from 'lodash/isEqual';

import { User } from '@/interfaces/user';
import { LoginFormValues } from '@/app/(auth)/login/page';
import { API_URL } from '@/constants/api';
import { setUserId } from '@/actions/users';

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: (data: LoginFormValues) => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  user: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    login: async ({ email, password }: LoginFormValues) => {
      try {
        const response = await fetch(`${API_URL}/users?email=${email}`);
        const data = await response.json();

        const user = head(data) as User;

        if (!isEqual(user.password, password)) {
          throw new Error('Invalid email or password');
        }

        await setUserId(user.id);

        set({ user });
      } catch (e) {
        throw new Error('Invalid email or password');
      }
    },
  }));
};
