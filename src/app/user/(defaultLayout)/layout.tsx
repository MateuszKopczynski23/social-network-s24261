import { Bell } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import SidebarMenu from '@/components/user/default/SidebarMenu';
import MobileMenu from '@/components/user/MobileMenu';

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SidebarMenu />
      <div className="flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
          <MobileMenu />
          <Search />
          <Button
            variant="outline"
            size="icon"
          >
            <Bell className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Notifications</span>
          </Button>
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
