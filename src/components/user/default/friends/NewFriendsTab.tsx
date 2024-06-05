import React, { FC } from 'react';

import FriendItem from '@/components/user/default/friends/FriendItem';
import { newFriends } from '@/data/user/friends';
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';

const NewFriendsTab: FC = () => {
  return (
    <TabsContent
      value="explore"
      className="border-none p-0 outline-none"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Search for new friends
          </h2>
          <p className="text-sm text-muted-foreground">
            Find new friends to connect with. Right-click (desktop) or
            long-press the tile (mobile) to see actions related to groups.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-8">
        {newFriends.map((friend) => (
          <FriendItem
            key={friend.firstName}
            friend={friend}
            className="w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default NewFriendsTab;
