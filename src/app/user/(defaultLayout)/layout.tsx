import { FC, PropsWithChildren } from 'react';

import SidebarMenu from '@/components/user/default/SidebarMenu';
import Header from '@/components/user/default/Header';

const UserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SidebarMenu />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
