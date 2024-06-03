import {
  CalendarHeartIcon,
  HandshakeIcon,
  MessageCircleIcon,
  NewspaperIcon,
  Users,
} from 'lucide-react';

export default [
  {
    title: 'News Feed',
    href: '/user/home',
    Icon: NewspaperIcon,
  },
  {
    title: 'Events',
    href: '/user/events',
    Icon: CalendarHeartIcon,
  },
  {
    title: 'Groups',
    href: '/user/groups',
    Icon: HandshakeIcon,
  },
  {
    title: 'Friends',
    href: '/user/friends',
    Icon: Users,
  },
  {
    title: 'Chat',
    href: '/user/chat',
    Icon: MessageCircleIcon,
  },
] as const;
