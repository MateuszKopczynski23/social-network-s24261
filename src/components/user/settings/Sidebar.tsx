'use client';

import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const items = [
  {
    title: 'Account',
    href: '/user/settings/account',
  },
  {
    title: 'Appearance',
    href: '/user/settings/appearance',
  },
  {
    title: 'Notifications',
    href: '/user/settings/notifications',
  },
  {
    title: 'Display',
    href: '/user/settings/display',
  },
] as const;

const Sidebar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(pathname === item.href && 'font-semibold text-primary')}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
