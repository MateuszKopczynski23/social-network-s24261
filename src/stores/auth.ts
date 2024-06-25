import { createStore } from 'zustand/vanilla';
import isEqual from 'lodash/isEqual';
import lodashGet from 'lodash/get';
import omit from 'lodash/omit';
import assign from 'lodash/assign';

import { User } from '@/interfaces/user';
import { removeUser, setUser } from '@/actions/users';
import { createUser, getUser, updateUser } from '@/api/user';
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
  update: (data: User) => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

export const defaultUserData = () => ({
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
    isAdmin: false,
    isPrivate: true,
    isNotificationsEnabled: false,
    isStickyHeader: true,
    isActiveFriendsVisible: true,
  },
  friends: [],
  friendRequests: [],
});

export const initAuthStore = (user?: AuthState['user']): AuthState => {
  return { user: user || null };
};

export const defaultInitState: AuthState = {
  user: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set, get) => ({
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
        const hasExistingUsers = lodashGet(existingUsers, 'length');

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

    update: async (data: User) => {
      try {
        const user = get().user;

        if (!user) return;

        await updateUser(data, user.id);
        await setUser(data);

        set({ user: data });
      } catch (e) {
        throw new Error('Failed to update user. Please try again.');
      }
    },
  }));
};
