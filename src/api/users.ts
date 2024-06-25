import { API_URL } from '@/constants/api';
import { User } from '@/interfaces/user';

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();

  return data as User[];
};
