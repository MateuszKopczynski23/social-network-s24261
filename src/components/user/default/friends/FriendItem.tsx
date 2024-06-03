import Image from 'next/image';
import React, { FC } from 'react';

import { Friend } from '@/data/user/friends';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

interface FriendProps extends React.HTMLAttributes<HTMLDivElement> {
  friend: Friend;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

const FriendItem: FC<FriendProps> = ({
  friend,
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
              src={friend.image}
              alt={friend.firstName}
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
          <ContextMenuItem>Add</ContextMenuItem>
          <ContextMenuItem>Show</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="text-red-500">Remove</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">
          {friend.firstName} {friend.lastName}, {friend.age}
        </h3>
        <p className="text-xs text-muted-foreground">{friend.city}</p>
      </div>
    </div>
  );
};

export default FriendItem;
