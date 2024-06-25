'use client';

import { Cake, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, MouseEvent } from 'react';
import { format } from 'date-fns';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { User } from '@/interfaces/user';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { calculateAge } from '@/utils/calculateAge';
import { useUsersStore } from '@/providers/store/UsersStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

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
  const { user } = useAuthStore((state) => state);

  const {
    canRemoveFriend,
    canAcceptFriendRequest,
    canDeclineFriendRequest,
    canSendFriendRequest,
    canUndoFriendRequest,
    addFriend,
    removeFriend,
    addFriendRequest,
    removeFriendRequest,
  } = useUsersStore((state) => state);

  if (!user) return null;

  const handleAddFriend = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await addFriend(user, friend);
      toast.success('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleRemoveFriend = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await removeFriend(user, friend);
      toast.success('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleAddFriendRequest = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await addFriendRequest(user, friend);
      toast.success('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleRemoveFriendRequest = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await removeFriendRequest(user, friend);
      toast.success('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleUndoFriendRequest = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await removeFriendRequest(friend, user);
      toast.success('Registration successful!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Link href={`/user/friends/${friend.id}`}>
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

              {!canSendFriendRequest(user, friend) &&
                !canRemoveFriend(user, friend) &&
                !canAcceptFriendRequest(user, friend) && (
                  <div className="invisible absolute bottom-1.5 right-1.5 flex items-center justify-center rounded bg-primary/50 px-1.5 py-1 group-hover:visible">
                    <div className="flex justify-center gap-x-1 text-xs font-medium text-white">
                      <Send className="h-4 w-4" />
                    </div>
                  </div>
                )}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            {canSendFriendRequest(user, friend) && (
              <ContextMenuItem
                onClick={(event) => handleAddFriendRequest(event)}
              >
                Add
              </ContextMenuItem>
            )}
            {canAcceptFriendRequest(user, friend) && (
              <ContextMenuItem onClick={(event) => handleAddFriend(event)}>
                Accept
              </ContextMenuItem>
            )}
            {canRemoveFriend(user, friend) && (
              <ContextMenuItem
                className="text-red-500"
                onClick={(event) => handleRemoveFriend(event)}
              >
                Remove
              </ContextMenuItem>
            )}
            {canUndoFriendRequest(user, friend) && (
              <ContextMenuItem
                className="text-red-500"
                onClick={(event) => handleUndoFriendRequest(event)}
              >
                Undo
              </ContextMenuItem>
            )}
            {canDeclineFriendRequest(user, friend) && (
              <ContextMenuItem
                className="text-red-500"
                onClick={(event) => handleRemoveFriendRequest(event)}
              >
                Decline
              </ContextMenuItem>
            )}
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
