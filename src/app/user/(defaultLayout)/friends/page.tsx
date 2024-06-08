import React from 'react';
import { NextPage } from 'next';

import FriendRequestsTab from '@/components/user/default/friends/FriendRequestsTab';
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
            <TabsTrigger
              value="requests"
              className="capitalize md:normal-case"
            >
              <span className="hidden md:inline">Friend</span>&nbsp;requests
            </TabsTrigger>
            <TabsTrigger value="explore">
              Search
              <span className="hidden md:inline">&nbsp;for friends</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <UserFriendsTab />
        <FriendRequestsTab />
        <NewFriendsTab />
      </Tabs>
    </div>
  );
};

export default UserFriendsPage;
