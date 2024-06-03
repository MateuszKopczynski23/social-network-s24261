import React, { FC } from 'react';

import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import GroupItem from '@/components/user/default/groups/GroupItem';
import { userGroups } from '@/data/user/groups';

const UserGroupsTab: FC = () => {
  return (
    <TabsContent
      value="user"
      className="border-none p-0 outline-none"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Groups</h2>
          <p className="text-sm text-muted-foreground">
            Enjoy your favorite groups. Right-click (desktop) or long-press the
            tile (mobile) to see actions related to groups.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
        {userGroups.map((group) => (
          <GroupItem
            key={group.name}
            group={group}
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

export default UserGroupsTab;
