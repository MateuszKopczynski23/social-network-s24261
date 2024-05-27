'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { cn } from '@/lib/utils';

const items = [
  {
    title: 'News Feed',
    href: '/user/home',
  },
  {
    title: 'Events',
    href: '/user/home',
  },
  {
    title: 'Groups',
    href: '/user/home',
  },
  {
    title: 'Friends',
    href: '/user/home',
  },
  {
    title: 'Communicator',
    href: '/user/home',
  },
] as const;

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Globe className="h-6 w-6" />
        <span className="sr-only">Social Network Inc</span>
      </Link>

      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            pathname === item.href
              ? 'text-foreground'
              : 'text-muted-foreground',
            'truncate'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
