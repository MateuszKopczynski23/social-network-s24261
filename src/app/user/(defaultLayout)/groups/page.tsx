import React from 'react';
import { NextPage } from 'next';

import NewGroupDialog from '@/components/user/default/groups/NewGroupDialog';
import NewGroupsTab from '@/components/user/default/groups/NewGroupsTab';
import UserGroupsTab from '@/components/user/default/groups/UserGroupsTab';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserGroupsPage: NextPage = () => {
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
                  Groups
                </TabsTrigger>
                <TabsTrigger value="explore">Explore</TabsTrigger>
              </TabsList>
              <NewGroupDialog />
            </div>
            <UserGroupsTab />
            <NewGroupsTab />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserGroupsPage;
