'use client';

import { FC } from 'react';

import Navbar from '@/components/user/settings/Navbar';
import MobileMenu from '@/components/user/MobileMenu';
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
        'top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 lg:h-[60px]',
        isStickyHeader && 'sticky'
      )}
    >
      <Navbar />
      <MobileMenu />
      <div className="flex w-full items-center justify-end gap-4 md:gap-2 lg:gap-4">
        <Notifications />
        <ThemeToggle />
        <AccountDropdownMenu />
      </div>
    </header>
  );
};

export default Header;
