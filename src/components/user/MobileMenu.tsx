'use client';

import { Globe, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import items from '@/constants/userMenuLinks';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const MobileMenu: FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col"
      >
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/user/home"
            className="mb-4 flex items-center gap-2 text-lg font-semibold"
          >
            <Globe className="h-6 w-6" />
            <span>Social Network</span>
          </Link>

          {items.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className={cn(
                pathname === href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
                'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2'
              )}
            >
              <Icon className="h-5 w-5" />
              {title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
