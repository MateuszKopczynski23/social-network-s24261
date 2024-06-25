import { formatDistanceToNow } from 'date-fns';

export const timeAgo = (createdAt: Date | string): string => {
  const createdDate =
    typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
  return formatDistanceToNow(createdDate, { addSuffix: true });
};
