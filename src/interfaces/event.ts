import { User } from '@/interfaces/user';

export interface Event {
  id: string;
  userId: string;
  name: string;
  description?: string;
  date: string;
  city?: string;
  street?: string;
  country?: string;
  imageUrl?: string;
  user: User;
  users: User[];
}
