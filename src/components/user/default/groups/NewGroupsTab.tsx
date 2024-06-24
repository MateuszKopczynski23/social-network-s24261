'use client';

import React, { FC } from 'react';
import some from 'lodash/some';
import filter from 'lodash/filter';

import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import GroupItem from '@/components/user/default/groups/GroupItem';
import { useGroupsStore } from '@/providers/store/GroupsStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const NewGroupsTab: FC = () => {
  const { user: authUser } = useAuthStore((state) => state);
  const { groups } = useGroupsStore((state) => state);

  const newGroups = filter(
    groups,
    (group) =>
      group.user.id !== authUser?.id && !some(group.users, { id: authUser?.id })
  );

  return (
    <TabsContent
      value="explore"
      className="border-none p-0 outline-none"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Explore new groups
          </h2>
          <p className="text-sm text-muted-foreground">
            Find new groups to enjoy. Right-click (desktop) or long-press the
            tile (mobile) to see actions related to groups.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7">
        {newGroups.map((group) => (
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

export default NewGroupsTab;
