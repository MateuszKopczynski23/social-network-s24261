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
    href: '/user/home',
    Icon: CalendarHeartIcon,
  },
  {
    title: 'Groups',
    href: '/user/home',
    Icon: HandshakeIcon,
  },
  {
    title: 'Friends',
    href: '/user/home',
    Icon: Users,
  },
  {
    title: 'Communicator',
    href: '/user/home',
    Icon: MessageCircleIcon,
  },
] as const;
