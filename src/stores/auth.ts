import { createStore } from 'zustand/vanilla';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import omit from 'lodash/omit';

import { User } from '@/interfaces/user';
import { LoginFormValues } from '@/app/(auth)/login/page';
import { setUserId } from '@/actions/users';
import { RegisterFormValues } from '@/app/(auth)/register/page';
import { createUser, getUser } from '@/api/user';

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: (data: LoginFormValues) => Promise<void>;
  register: (data: RegisterFormValues) => Promise<void>;
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
        const user = await getUser({ email });

        if (!isEqual(user.password, password)) {
          throw new Error('Invalid email or password');
        }

        await setUserId(user.id);

        set({ user });
      } catch (e) {
        throw new Error('Invalid email or password');
      }
    },

    register: async (data: RegisterFormValues) => {
      try {
        const { email } = data;
        const existingUsers = await getUser({ email });
        const hasExistingUsers = get(existingUsers, 'length');

        if (hasExistingUsers) {
          throw new Error('User already exists');
        }

        const user = omit(data, 'passwordConfirmation');

        await createUser(user);
      } catch (e) {
        throw new Error('Invalid email or password');
      }
    },
  }));
};
