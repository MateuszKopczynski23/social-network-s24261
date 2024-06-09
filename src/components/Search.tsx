'use client';

import take from 'lodash/take';
import { FC, useState } from 'react';
import { Search as Magnifier } from 'lucide-react';

import { people } from '@/data/user/people';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const Search: FC = () => {
  const [open, setOpen] = useState(false);

  const getResults = () => {
    return take(people, 5);
  };

  return (
    <>
      <div className="w-full flex-1">
        <div
          className="relative md:w-2/3 lg:w-1/3"
          onClick={() => setOpen((open) => !open)}
        >
          <Magnifier className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search friends..."
            className="w-full appearance-none bg-background pl-8 shadow-none"
          />
        </div>
      </div>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Type a friend information..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Results">
            {getResults().map((person) => (
              <CommandItem key={person.userImage}>
                <div className="flex items-center gap-3">
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
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
