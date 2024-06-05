'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import items from '@/constants/userMenuLinks';

const SidebarMenu: FC = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-30 flex hidden h-screen border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/user/home"
            className="flex items-center gap-2 font-semibold"
          >
            <Globe className="h-6 w-6" />
            <span className="">Social Network</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-[15px] font-medium lg:px-4">
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
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button
                size="sm"
                className="w-full"
              >
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
