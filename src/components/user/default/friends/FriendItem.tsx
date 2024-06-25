import { Cake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { User } from '@/interfaces/user';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { calculateAge } from '@/utils/calculateAge';

interface FriendProps extends React.HTMLAttributes<HTMLDivElement> {
  friend: User;
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
    <Link href="/user/friends/1">
      <div
        className={cn('space-y-3', className)}
        {...props}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="group relative overflow-hidden rounded-md">
              <Image
                src={friend.imageUrl || DEFAULT_AVATAR_IMAGE}
                alt={friend.firstName}
                width={width}
                height={height}
                className={cn(
                  'h-full w-full object-cover transition-all hover:scale-105',
                  aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                )}
              />

              <div className="invisible absolute right-1.5 top-1.5 flex items-center justify-center rounded-md bg-primary px-1.5 py-1 group-hover:visible">
                <div className="flex justify-center gap-x-1 text-xs font-medium text-white">
                  <Cake className="h-4 w-4" />
                  {format(friend.dateOfBirth || '', 'dd MMM')}
                </div>
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem>Add</ContextMenuItem>
            <ContextMenuItem>Show</ContextMenuItem>
            <ContextMenuItem>Accept</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-red-500">Remove</ContextMenuItem>
            <ContextMenuItem className="text-red-500">Decline</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1">
          <h3 className="pb-1 font-medium leading-none">
            {friend.firstName} {friend.lastName},{' '}
            {calculateAge(friend.dateOfBirth || '')}
          </h3>
          <p className="text-xs text-muted-foreground">{friend.city}</p>
        </div>
      </div>
    </Link>
  );
};

export default FriendItem;
