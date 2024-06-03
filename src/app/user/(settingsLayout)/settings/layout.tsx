import { NextPage } from 'next';
import { PropsWithChildren } from 'react';

import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import Navbar from '@/components/user/settings/Navbar';
import Sidebar from '@/components/user/settings/Sidebar';
import MobileMenu from '@/components/user/MobileMenu';
import ThemeToggle from '@/components/ThemeToggle';

const UserSettingsPage: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Navbar />
        <MobileMenu />
        <div className="flex w-full items-center justify-end gap-4 md:gap-2 lg:gap-4">
          <ThemeToggle />
          <AccountDropdownMenu />
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <Sidebar />
          <div className="grid gap-6">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default UserSettingsPage;
