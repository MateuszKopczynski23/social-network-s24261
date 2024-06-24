import { User } from '@/interfaces/user';

export interface Group {
  id: string;
  userId: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  imageUrl?: string;
  user: User;
  users: User[];
}
