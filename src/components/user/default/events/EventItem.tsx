import { Calendar } from 'lucide-react';
import Image from 'next/image';
import React, { FC } from 'react';

import { Event } from '@/data/user/events';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

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
  return (
    <div
      className={cn('space-y-3', className)}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="group relative overflow-hidden rounded-md">
            <Image
              src={event.image}
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
                {event.date}
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
        <h3 className="pb-1 font-medium leading-none">{event.name}</h3>
        <p className="line-clamp-1 text-xs text-muted-foreground lg:line-clamp-2">
          {event.description}
        </p>
        <p className="text-xs text-muted-foreground">{event.city}</p>
      </div>
    </div>
  );
};

export default EventItem;
