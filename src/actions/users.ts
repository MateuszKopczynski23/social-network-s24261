'use server';

import { cookies } from 'next/headers';

import { User } from '@/interfaces/user';

export const setUser = async (user: User) => {
  cookies().set('user', JSON.stringify(user));
};

export const getUser = async () => {
  return cookies().get('user');
};
