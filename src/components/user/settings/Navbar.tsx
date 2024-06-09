'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { cn } from '@/lib/utils';
import items from '@/constants/userMenuLinks';

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/user/home"
        className="flex h-16 items-center gap-2 truncate text-lg font-semibold md:text-base lg:h-[60px]"
      >
        <Globe className="h-6 w-6" />
        <span>Social Network</span>
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
