import React from 'react';
import { NextPage } from 'next';

import UserEventsTab from '@/components/user/default/events/UserEventsTab';
import NewEventsTab from '@/components/user/default/events/NewEventsTab';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserEventsPage: NextPage = () => {
  return (
    <div className="border">
      <div className="bg-background">
        <div className="h-full px-4 py-6 lg:px-8">
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
            </div>
            <UserEventsTab />
            <NewEventsTab />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserEventsPage;
