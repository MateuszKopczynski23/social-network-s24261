'use client';

import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, MouseEvent } from 'react';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Group } from '@/interfaces/group';
import { DEFAULT_BACKGROUND_IMAGE } from '@/constants/images';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { useGroupsStore } from '@/providers/store/GroupsStoreProvider';

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
  const { user } = useAuthStore((state) => state);
  const { isUserInGroup, addUserToGroup, removeUserFromGroup } = useGroupsStore(
    (state) => state
  );

  const isActionVisible = isUserInGroup(group.id, user?.id || '');

  const handleAddUserToGroup = (e: MouseEvent) => {
    e.preventDefault();

    if (!group.id || !user) return;

    addUserToGroup(group.id, user);
    toast.success('You have joined the group successfully!');
  };

  const handleRemoveUserFromGroup = (e: MouseEvent) => {
    e.preventDefault();

    if (!group.id || !user) return;

    removeUserFromGroup(group.id, user.id);
    toast.success('You have left the group.');
  };

  return (
    <Link href={`/user/groups/${group.id}`}>
      <div
        className={cn('space-y-3', className)}
        {...props}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="group relative overflow-hidden rounded-md">
              <Image
                src={group.imageUrl || DEFAULT_BACKGROUND_IMAGE}
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
            {!isActionVisible && (
              <ContextMenuItem onClick={(event) => handleAddUserToGroup(event)}>
                Join
              </ContextMenuItem>
            )}
            <ContextMenuItem>Show</ContextMenuItem>
            {isActionVisible && (
              <>
                <ContextMenuSeparator />
                <ContextMenuItem
                  className="text-red-500"
                  onClick={(event) => handleRemoveUserFromGroup(event)}
                >
                  Leave
                </ContextMenuItem>
              </>
            )}
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
