import take from 'lodash/take';
import { Check, X } from 'lucide-react';
import { FC } from 'react';

import { people } from '@/data/user/people';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const FriendRequests: FC = () => {
  const getRequests = () => {
    return take(people, 2);
  };

  return (
    <Card x-chunk="dashboard-07-chunk-5">
      <CardHeader className="pb-5">
        <CardTitle>Friend requests</CardTitle>
        <CardDescription className="text-xs">
          Connect with new friends and expand your network
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {getRequests().map((person) => (
          <div
            key={person.userImage}
            className="flex items-center gap-3"
          >
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage
                src={person.userImage}
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {person.userName}
              </p>
              <p className="text-xs text-muted-foreground">
                {person.mutualFriends} mutual friends
              </p>
            </div>
            <div className="ml-auto flex items-center gap-x-2 font-medium">
              <Check />
              <X />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FriendRequests;
