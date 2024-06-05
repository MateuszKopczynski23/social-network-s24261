import React from 'react';
import { NextPage } from 'next';

import NewFriendsTab from '@/components/user/default/friends/NewFriendsTab';
import UserFriendsTab from '@/components/user/default/friends/UserFriendsTab';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserFriendsPage: NextPage = () => {
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
              Friends
            </TabsTrigger>
            <TabsTrigger value="explore">Search for friends</TabsTrigger>
          </TabsList>
        </div>
        <UserFriendsTab />
        <NewFriendsTab />
      </Tabs>
    </div>
  );
};

export default UserFriendsPage;
