import React from 'react';
import { NextPage } from 'next';

import UserEventsTab from '@/components/user/default/events/UserEventsTab';
import NewEventsTab from '@/components/user/default/events/NewEventsTab';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewEventDialog from '@/components/user/default/events/NewEventDialog';

const UserEventsPage: NextPage = () => {
  return (
    <div className="h-full p-4 pb-8 pt-2">
      <Tabs
        defaultValue="user"
        className="h-full space-y-6"
      >
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger
              value="user"
              className="relative"
            >
              Events
            </TabsTrigger>
            <TabsTrigger value="explore">Look for events</TabsTrigger>
          </TabsList>
          <NewEventDialog />
        </div>
        <UserEventsTab />
        <NewEventsTab />
      </Tabs>
    </div>
  );
};

export default UserEventsPage;
