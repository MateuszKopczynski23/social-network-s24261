import take from 'lodash/take';
import { PlusSquare } from 'lucide-react';
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

const FriendSuggestions: FC = () => {
  const getSuggestions = () => {
    return take(people, 5);
  };

  return (
    <Card>
      <CardHeader className="pb-5">
        <CardTitle>Do you know them?</CardTitle>
        <CardDescription className="text-xs">
          Discover new people you might know
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {getSuggestions().map((person) => (
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
            <div className="ml-auto font-medium">
              <PlusSquare />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FriendSuggestions;
