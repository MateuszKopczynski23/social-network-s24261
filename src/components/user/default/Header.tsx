'use client';

import { FC } from 'react';

import MobileMenu from '@/components/user/MobileMenu';
import Search from '@/components/Search';
import Notifications from '@/components/Notifications';
import ThemeToggle from '@/components/ThemeToggle';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { cn } from '@/lib/utils';

const Header: FC = () => {
  const { user } = useAuthStore((state) => state);

  const isStickyHeader = user?.settings.isStickyHeader;

  return (
    <header
      className={cn(
        'top-0 z-30 flex h-16 items-center gap-4 border-b bg-muted/40 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6',
        isStickyHeader && 'sticky'
      )}
    >
      <MobileMenu />
      <Search />
      <Notifications />
      <ThemeToggle />
      <AccountDropdownMenu />
    </header>
  );
};

export default Header;
