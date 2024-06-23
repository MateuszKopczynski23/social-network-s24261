'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import ActiveFriends from '@/components/user/default/ActiveFriends';
import { cn } from '@/lib/utils';
import items from '@/constants/userMenuLinks';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const SidebarMenu: FC = () => {
  const pathname = usePathname();
  const { user } = useAuthStore((state) => state);

  const isActiveFriendsVisible = user?.settings.isActiveFriendsVisible;

  return (
    <div className="sticky top-0 z-30 hidden h-screen border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/user/home"
            className="flex items-center gap-2 font-semibold"
          >
            <Globe className="h-6 w-6" />
            <span>Social Network</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-[15.5px] font-medium lg:px-4">
            {items.map(({ title, href, Icon }) => (
              <Link
                key={title}
                href={href}
                className={cn(
                  pathname === href ? 'text-primary' : 'text-muted-foreground',
                  'flex items-center gap-3 rounded-lg px-3 py-2 transition-all'
                )}
              >
                <Icon className="h-4 w-4" />
                {title}
              </Link>
            ))}
          </nav>
        </div>
        {isActiveFriendsVisible && <ActiveFriends />}
      </div>
    </div>
  );
};

export default SidebarMenu;
