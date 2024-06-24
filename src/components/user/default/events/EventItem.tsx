import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, MouseEvent } from 'react';
import { formatDate } from 'date-fns';
import { toast } from 'sonner';

import { Event } from '@/interfaces/event';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { DEFAULT_BACKGROUND_IMAGE } from '@/constants/images';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { useEventsStore } from '@/providers/store/EventsStoreProvider';

interface EventProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

const EventItem: FC<EventProps> = ({
  event,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}) => {
  const { user } = useAuthStore((state) => state);
  const { isUserInEvent, addUserToEvent, removeUserFromEvent } = useEventsStore(
    (state) => state
  );

  const isActionVisible = isUserInEvent(event.id, user?.id || '');

  const handleAddUserToEvent = (e: MouseEvent) => {
    e.preventDefault();

    if (!event.id || !user) return;

    addUserToEvent(event.id, user);
    toast.success('You have joined the event successfully!');
  };

  const handleRemoveUserFromEvent = (e: MouseEvent) => {
    e.preventDefault();

    if (!event.id || !user) return;

    removeUserFromEvent(event.id, user.id);
    toast.success('You have left the event.');
  };

  return (
    <Link href={`/user/events/${event.id}`}>
      <div
        className={cn('space-y-3', className)}
        {...props}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="group relative overflow-hidden rounded-md">
              <Image
                src={event.imageUrl || DEFAULT_BACKGROUND_IMAGE}
                alt={event.name}
                width={width}
                height={height}
                className={cn(
                  'h-full w-full object-cover transition-all hover:scale-105',
                  aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                )}
              />

              <div className="invisible absolute right-1.5 top-1.5 flex items-center justify-center rounded-md bg-primary px-1.5 py-1 group-hover:visible">
                <div className="flex justify-center gap-x-1 text-xs font-medium text-white">
                  <Calendar className="h-4 w-4" />
                  {formatDate(event.date, 'dd MMM yyyy')}
                </div>
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            {!isActionVisible && (
              <ContextMenuItem onClick={(event) => handleAddUserToEvent(event)}>
                Join
              </ContextMenuItem>
            )}
            <ContextMenuItem>Show</ContextMenuItem>
            {isActionVisible && (
              <>
                <ContextMenuSeparator />
                <ContextMenuItem
                  className="text-red-500"
                  onClick={(event) => handleRemoveUserFromEvent(event)}
                >
                  Leave
                </ContextMenuItem>
              </>
            )}
          </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1">
          <h3 className="pb-1 font-medium leading-none">{event.name}</h3>
          <p className="line-clamp-1 text-xs text-muted-foreground lg:line-clamp-2">
            {event.description}
          </p>
          <p className="text-xs text-muted-foreground">{event.city}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
