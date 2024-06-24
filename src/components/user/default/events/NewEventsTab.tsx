'use client';

import React, { FC } from 'react';
import filter from 'lodash/filter';
import some from 'lodash/some';

import EventItem from '@/components/user/default/events/EventItem';
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { useEventsStore } from '@/providers/store/EventsStoreProvider';

const NewEventsTab: FC = () => {
  const { user: authUser } = useAuthStore((state) => state);
  const { events } = useEventsStore((state) => state);

  const newEvents = filter(
    events,
    (event) =>
      event.user.id !== authUser?.id && !some(event.users, { id: authUser?.id })
  );

  return (
    <TabsContent
      value="explore"
      className="border-none p-0 outline-none"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Look for new events
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover new events happening in your area. Right-click (desktop) or
            long-press the tile (mobile) to see actions related to groups.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7">
        {newEvents.map((event) => (
          <EventItem
            key={event.name}
            event={event}
            className="w-full"
            aspectRatio="square"
            width={250}
            height={330}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default NewEventsTab;
