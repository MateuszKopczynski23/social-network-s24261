'use client';

import { FC, PropsWithChildren } from 'react';

import SidebarMenu from '@/components/admin/SidebarMenu';
import Header from '@/components/admin/Header';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SidebarMenu />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
