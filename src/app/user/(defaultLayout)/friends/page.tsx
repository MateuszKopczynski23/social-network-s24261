import React from 'react';
import { NextPage } from 'next';

import NewFriendsTab from '@/components/user/default/friends/NewFriendsTab';
import UserFriendsTab from '@/components/user/default/friends/UserFriendsTab';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserFriendsPage: NextPage = () => {
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
                  Friends
                </TabsTrigger>
                <TabsTrigger value="explore">Search for friends</TabsTrigger>
              </TabsList>
            </div>
            <UserFriendsTab />
            <NewFriendsTab />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserFriendsPage;
