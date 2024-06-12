import { clsx } from 'clsx';
import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { contacts } from '@/data/user/contacts';
import { ScrollArea } from '@/components/ui/scroll-area';

const Contacts: FC = () => {
  return (
    <ScrollArea className="h-[82vh]">
      <div className="flex h-full flex-col gap-2 overflow-y-auto p-4 pl-0 pr-4 pt-0">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
          >
            <div className="flex gap-x-3">
              <div className="relative h-12 w-12">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={contact.image}
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border bg-green-500" />
              </div>

              <div className="flex w-full flex-col items-start gap-1">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">
                        {contact.firstName} {contact.lastName}
                      </div>
                      {!contact.isRead && (
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />
                      )}
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">
                      22m
                    </div>
                  </div>
                </div>
                <p
                  className={clsx(
                    'line-clamp-2 pr-4 text-xs text-muted-foreground',
                    !contact.isRead && 'font-semibold'
                  )}
                >
                  {contact.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Contacts;
