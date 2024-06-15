import { FC, PropsWithChildren } from 'react';

import Notifications from '@/components/Notifications';
import Search from '@/components/Search';
import ThemeToggle from '@/components/ThemeToggle';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import SidebarMenu from '@/components/user/default/SidebarMenu';
import MobileMenu from '@/components/user/MobileMenu';

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SidebarMenu />
      <div className="flex flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-muted/40 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
          <MobileMenu />
          <Search />
          <Notifications />
          <ThemeToggle />
          <AccountDropdownMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
