import { User } from '@/interfaces/user';

export interface Notification {
  id: string;
  user: User;
  sender: User;
  description: string;
  createdAt: string;
  isRead: boolean;
}
