import head from 'lodash/head';

import { API_URL } from '@/constants/api';
import { User } from '@/interfaces/user';

type Params = {
  [key: string]: string;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();

  return data as User[];
};

export const getUser = async (params: Params) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(`${API_URL}/users?${searchParams}`);
  const data = await response.json();

  return head(data) as User;
};

export const createUser = async (user: Omit<User, 'id'>) => {
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

export const updateUser = async (user: Omit<User, 'id'>, userId: string) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  return data as User;
};
