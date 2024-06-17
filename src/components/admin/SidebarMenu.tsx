'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import items from '@/constants/adminMenuLinks';
import { cn } from '@/lib/utils';

const SidebarMenu: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Globe className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Social Network</span>
        </Link>
        {items.map(({ title, href, Icon }) => (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  pathname === href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
