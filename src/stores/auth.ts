import { createStore } from 'zustand/vanilla';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import omit from 'lodash/omit';
import assign from 'lodash/assign';

import { User } from '@/interfaces/user';
import { removeUser, setUser } from '@/actions/users';
import { createUser, getUser } from '@/api/user';
import { LoginFormValues } from '@/validations/auth/loginValidation';
import { RegisterFormValues } from '@/validations/auth/registerValidation';
import {
  DEFAULT_AVATAR_IMAGE,
  DEFAULT_BACKGROUND_IMAGE,
} from '@/constants/images';

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: (data: LoginFormValues) => Promise<void>;
  register: (data: RegisterFormValues) => Promise<void>;
  logout: () => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

const defaultUserData = () => ({
  firstName: '',
  lastName: '',
  age: 0,
  city: '',
  dateOfBirth: '',
  imageUrl: DEFAULT_AVATAR_IMAGE,
  backgroundUrl: DEFAULT_BACKGROUND_IMAGE,
  description: '',
  street: '',
  country: 'Poland',
  gender: 'male' as User['gender'],
  email: '',
  password: '',
  settings: {
    isPrivate: true,
    isNotificationsEnabled: false,
    isStickyHeader: true,
    isActiveFriendsVisible: true,
  },
});

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
          throw new Error('Invalid email or password.');
        }

        await setUser(user);
        set({ user });
      } catch (e) {
        throw new Error('Invalid email or password.');
      }
    },

    logout: async () => {
      try {
        await removeUser();
        set({ user: null });
      } catch (e) {
        throw new Error('Failed to log out. Please try again.');
      }
    },

    register: async (data: RegisterFormValues) => {
      try {
        const { email } = data;
        const existingUsers = await getUser({ email });
        const hasExistingUsers = get(existingUsers, 'length');

        if (hasExistingUsers) {
          throw new Error('User already exists.');
        }

        const mergedUserData = assign({}, defaultUserData(), data);
        const userWithoutPasswordConfirmation = omit(
          mergedUserData,
          'passwordConfirmation'
        );

        await createUser(userWithoutPasswordConfirmation);
      } catch (e) {
        throw new Error('Failed to register. Please try again.');
      }
    },
  }));
};
