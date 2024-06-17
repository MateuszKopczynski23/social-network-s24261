'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import get from 'lodash/get';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import SidebarMenu from '@/components/admin/SidebarMenu';
import MobileMenu from '@/components/admin/MobileMenu';
import Notifications from '@/components/Notifications';
import ThemeToggle from '@/components/ThemeToggle';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const getBreadcrumbTitle = () => {
    const pageTitle = pathname.split('/').pop();

    const titles = {
      posts: 'Posts',
      users: 'Users',
      reports: 'Reports',
    } as const;

    return get(titles, pageTitle as string);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SidebarMenu />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <MobileMenu />
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/admin/posts">Admin Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{getBreadcrumbTitle()}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-4">
            <Notifications />
            <ThemeToggle />
            <AccountDropdownMenu />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
