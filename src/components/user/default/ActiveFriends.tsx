import { Plus } from 'lucide-react';
import { FC } from 'react';
import take from 'lodash/take';

import { userFriends } from '@/data/user/friends';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const ActiveFriends: FC = () => {
  const getActiveFriends = () => {
    return take(userFriends, 5);
  };

  return (
    <div className="mt-auto">
      <div className="flex items-center justify-between p-2 pt-0 md:px-4">
        <h4 className="text-lg font-medium">Active friends</h4>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Plus className="h-3.5 w-3.5" /> 14 more
        </div>
      </div>
      <Separator className="mb-4 px-3" />
      <div className="p-2 pt-0 md:p-4 md:pt-0">
        <div className="space-y-4 pb-2">
          <div className="grid gap-3.5">
            {getActiveFriends().map((friend) => (
              <>
                <div
                  key={friend.image}
                  className="flex items-center justify-between space-x-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative h-10 w-10">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={friend.image}
                          alt="Avatar"
                          className="object-cover"
                        />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border bg-green-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium leading-none">
                        {friend.firstName} {friend.lastName}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Short description
                      </p>
                    </div>
                  </div>
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[11px] font-medium text-white">
                    2
                  </div>
                </div>
                <Separator className="px-3" />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFriends;
