import { User } from '@/interfaces/user';
import { Comment } from '@/interfaces/comment';

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
  mentionedUser?: string;
}
