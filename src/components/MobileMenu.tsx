'use client';

import {
  CalendarHeartIcon,
  Globe,
  HandshakeIcon,
  MenuIcon,
  MessageCircleIcon,
  NewspaperIcon,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const items = [
  {
    title: 'News Feed',
    href: '/user/home',
    icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    title: 'Events',
    href: '/user/home',
    icon: <CalendarHeartIcon className="h-5 w-5" />,
  },
  {
    title: 'Groups',
    href: '/user/home',
    icon: <HandshakeIcon className="h-5 w-5" />,
  },
  {
    title: 'Friends',
    href: '/user/home',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Communicator',
    href: '/user/home',
    icon: <MessageCircleIcon className="h-5 w-5" />,
  },
] as const;

const MobileMenu: FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="sm:hidden"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sm:max-w-xs"
      >
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Globe className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Social Network Inc</span>
          </Link>

          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
                'flex items-center gap-4 px-2.5'
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
