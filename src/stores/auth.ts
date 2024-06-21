import { createStore } from 'zustand/vanilla';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import omit from 'lodash/omit';

import { User } from '@/interfaces/user';
import { setUser } from '@/actions/users';
import { createUser, getUser } from '@/api/user';
import { LoginFormValues } from '@/validations/loginValidation';
import { RegisterFormValues } from '@/validations/registerValidation';

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: (data: LoginFormValues) => Promise<void>;
  register: (data: RegisterFormValues) => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

export const initAuthStore = (user?: AuthState['user']): AuthState => {
  return { user: user || null };
};

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

        await setUser(user);

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
