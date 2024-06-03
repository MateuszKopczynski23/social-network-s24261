import Image from 'next/image';
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
    <div
      className={cn('space-y-3', className)}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
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
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Join</ContextMenuItem>
          <ContextMenuItem>Show</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="text-red-500">Leave</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{group.name}</h3>
        <p className="text-xs text-muted-foreground">{group.description}</p>
      </div>
    </div>
  );
};

export default GroupItem;
