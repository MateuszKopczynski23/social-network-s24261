'use client';

import { Globe, MenuIcon } from 'lucide-react';
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
          className="sm:hidden"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sm:max-w-xs"
      >
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Globe className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Social Network Inc</span>
          </Link>

          {items.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className={cn(
                pathname === href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
                'flex items-center gap-4 px-2.5'
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
