import head from 'lodash/head';

import { API_URL } from '@/constants/api';
import { User } from '@/interfaces/user';

type Params = {
  [key: string]: string;
};

export const getUser = async (params: Params) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(`${API_URL}/users?${searchParams}`);
  const data = await response.json();

  return head(data) as User;
};

export const createUser = async (user: Partial<User>) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  return data as User;
};