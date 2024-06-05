import React, { FC } from 'react';

import EventItem from '@/components/user/default/events/EventItem';
import { userEvents } from '@/data/user/events';
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';

const UserEventsTab: FC = () => {
  return (
    <TabsContent
      value="user"
      className="border-none p-0 outline-none"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Events</h2>
          <p className="text-sm text-muted-foreground">
            Enjoy your events with friends. Right-click (desktop) or long-press
            the tile (mobile) to see actions related to groups.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7">
        {userEvents.map((event) => (
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

export default UserEventsTab;
