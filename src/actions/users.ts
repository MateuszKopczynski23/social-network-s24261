'use server';

import { cookies } from 'next/headers';

import { User } from '@/interfaces/user';

const USER_COOKIE_NAME = 'user';

export const setUser = async (user: User) => {
  cookies().set(USER_COOKIE_NAME, JSON.stringify(user));
};

export const getUser = async () => {
  const user = cookies().get(USER_COOKIE_NAME)?.value || '';

  try {
    return user && JSON.parse(user);
  } catch (error) {
    throw new Error('Error parsing user JSON');
  }
};

export const removeUser = async () => {
  cookies().delete(USER_COOKIE_NAME);
};
