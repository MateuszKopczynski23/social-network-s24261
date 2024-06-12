import { Info } from 'lucide-react';
import { FC } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import MessageForm from '@/components/user/default/chat/MessageForm';
import ContactsDrawer from '@/components/user/default/chat/ContactsDrawer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Chat: FC = () => {
  return (
    <div className="relative flex h-full min-h-[50vh] flex-col justify-between rounded-xl bg-muted/50 p-2 md:p-4 2xl:col-span-2">
      <Card>
        <CardContent className="px-4 py-3">
          <div className="flex items-center gap-x-3 rounded-lg text-left text-sm">
            <div className="relative h-10 w-10">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
                  alt="Avatar"
                  className="object-cover"
                />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border bg-green-500" />
            </div>

            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-[15px] font-semibold md:text-lg">
                      Marco Milicić
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Active now
                    </div>
                  </div>
                  <div className="flex items-center gap-x-0.5">
                    <ContactsDrawer />
                    <Info className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <ScrollArea className="h-[calc(100vh-20.5rem)] px-2">
        <div className="py-8">
          <div className="mb-6 flex max-w-[80%] justify-start gap-x-2 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>

            <div className="group flex items-start gap-x-1.5">
              <Card className="p-2 text-sm">Lorem ipsum dolor sit amet</Card>
              <span className="mt-auto hidden text-xs text-muted-foreground group-hover:inline">
                19:23
              </span>
            </div>
          </div>

          <div className="mb-2 flex flex-row-reverse justify-start">
            <div className="group flex max-w-[80%] flex-row-reverse items-end gap-x-1.5 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
              <Card className="p-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card>
              <span className="mt-auto hidden text-xs text-muted-foreground group-hover:inline">
                19:23
              </span>
            </div>
          </div>
          <div className="mb-6 flex flex-row-reverse justify-start gap-x-2">
            <div className="group flex max-w-[80%] flex-row-reverse items-end gap-x-1.5 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
              <Card className="p-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card>
              <span className="mt-auto hidden text-xs text-muted-foreground group-hover:inline">
                19:23
              </span>
            </div>
          </div>

          <div className="mb-2 flex max-w-[80%] justify-start gap-x-2 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>

            <div className="group flex items-start gap-x-1.5">
              <Card className="p-2 text-sm">Lorem ipsum dolor sit amet</Card>
              <span className="mt-auto hidden text-xs text-muted-foreground group-hover:inline">
                19:23
              </span>
            </div>
          </div>
          <div className="ml-12 flex max-w-[80%] justify-start gap-x-2 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]">
            <div className="group flex items-start gap-x-1.5">
              <Card className="p-2 text-sm">Lorem ipsum dolor sit amet</Card>
              <span className="mt-auto hidden text-xs text-muted-foreground group-hover:inline">
                19:23
              </span>
            </div>
          </div>
        </div>
      </ScrollArea>
      <MessageForm />
    </div>
  );
};

export default Chat;
