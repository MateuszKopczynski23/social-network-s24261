import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { Group } from '@/data/user/groups';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
  group: Group;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

const GroupItem: FC<GroupProps> = ({
  group,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}) => {
  return (
    <Link href="/user/groups/1">
      <div
        className={cn('space-y-3', className)}
        {...props}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="group relative overflow-hidden rounded-md">
              <Image
                src={group.image}
                alt={group.name}
                width={width}
                height={height}
                className={cn(
                  'h-full w-full object-cover transition-all hover:scale-105',
                  aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                )}
              />

              <div className="invisible absolute right-1.5 top-1.5 flex items-center justify-center rounded-md bg-primary px-1.5 py-1 group-hover:visible">
                <div className="flex items-center gap-x-1 text-xs font-medium text-white">
                  <Users className="h-4 w-4" /> 1.5k
                </div>
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem>Join</ContextMenuItem>
            <ContextMenuItem>Show</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-red-500">Leave</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1">
          <h3 className="pb-1 font-medium leading-none">{group.name}</h3>
          <p className="line-clamp-1 text-xs text-muted-foreground lg:line-clamp-2">
            {group.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GroupItem;
