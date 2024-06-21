'use server';

import { cookies } from 'next/headers';

import { User } from '@/interfaces/user';

export const setUser = async (user: User) => {
  cookies().set('user', JSON.stringify(user));
};

export const getUser = async () => {
  const user = cookies().get('user')?.value || '';

  try {
    return user && JSON.parse(user);
  } catch (error) {
    throw new Error('Error parsing user JSON');
  }
};
