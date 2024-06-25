import { User } from '@/interfaces/user';

export interface Comment {
  id: string;
  user: User;
  content: string;
  likes?: User[];
  createdAt: string;
}
