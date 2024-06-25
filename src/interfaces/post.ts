import { User } from '@/interfaces/user';

export interface Post {
  id: string;
  user: User;
  groupId?: string;
  eventId?: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  comments?: Comment[];
  likes?: User[];
  users?: User[];
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  likes?: User[];
  createdAt: string;
}
