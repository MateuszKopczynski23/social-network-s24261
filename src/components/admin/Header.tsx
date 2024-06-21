'use client';

import { FC } from 'react';
import Link from 'next/link';
import get from 'lodash/get';
import { usePathname } from 'next/navigation';

import MobileMenu from '@/components/admin/MobileMenu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Notifications from '@/components/Notifications';
import ThemeToggle from '@/components/ThemeToggle';
import AccountDropdownMenu from '@/components/user/default/AccountDropdownMenu';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { cn } from '@/lib/utils';

const Header: FC = () => {
  const pathname = usePathname();
  const { user } = useAuthStore((state) => state);

  const isStickyHeader = user?.settings.isStickyHeader;

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
    <header
      className={cn(
        'top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6',
        isStickyHeader && 'sticky'
      )}
    >
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
  );
};

export default Header;
