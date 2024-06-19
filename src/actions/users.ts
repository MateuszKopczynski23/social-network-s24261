'use server';

import { cookies } from 'next/headers';

export const setUserId = async (userId: string) => {
  cookies().set('userId', userId);
};

export const getUserId = async () => {
  return cookies().get('userId');
};
