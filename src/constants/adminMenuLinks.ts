import { MessageCircleWarning, NewspaperIcon, Users2 } from 'lucide-react';

export default [
  {
    title: 'Posts',
    href: '/admin/posts',
    Icon: NewspaperIcon,
  },
  {
    title: 'Users',
    href: '/admin/users',
    Icon: Users2,
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    Icon: MessageCircleWarning,
  },
] as const;
