'use client';

import { FC, useState } from 'react';
import { Search as Magnifier } from 'lucide-react';

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
import { calculateAge } from '@/utils/calculateAge';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { useUsersStore } from '@/providers/store/UsersStoreProvider';

const Search: FC = () => {
  const { users } = useUsersStore((state) => state);

  const [open, setOpen] = useState(false);

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
            {users.map((user) => (
              <CommandItem key={user.id}>
                <div className="flex items-center gap-3">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage
                      src={user.imageUrl || DEFAULT_AVATAR_IMAGE}
                      alt="Avatar"
                      className="object-cover"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName} {user.lastName},{' '}
                      {user.dateOfBirth && calculateAge(user.dateOfBirth)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user.city}, {user.country}
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
