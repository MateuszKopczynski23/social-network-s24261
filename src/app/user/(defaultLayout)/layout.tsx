import { Search } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

import SidebarMenu from '@/components/user/default/SidebarMenu';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import MobileMenu from '@/components/user/MobileMenu';
import ThemeToggle from '@/components/ThemeToggle';
import { Input } from '@/components/ui/input';

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SidebarMenu />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <MobileMenu />
          <div className="relative mr-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <ThemeToggle />
          <AccountDropdownMenu />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
