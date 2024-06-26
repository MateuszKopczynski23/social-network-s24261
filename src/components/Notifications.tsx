import { Bell, Eye } from 'lucide-react';
import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useNotificationsStore } from '@/providers/store/NotificationsStoreProvider';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const Notifications: FC = () => {
  const { user } = useAuthStore((state) => state);
  const { getNotificationsForUser, getNotificationCountForUser } =
    useNotificationsStore((state) => state);

  if (!user) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Bell className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
          <span className="sr-only">Notifications</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Stay updated with the latest activities and alerts
          </SheetDescription>
        </SheetHeader>

        {!!getNotificationCountForUser(user.id) && (
          <p className="mt-2 flex items-center justify-end gap-x-1 text-xs text-primary">
            <Eye className="h-3 w-3" />
            Mark all as read
          </p>
        )}

        <div className="flex flex-col divide-y">
          {getNotificationsForUser(user.id).map((notification) => (
            <div
              key={notification.id}
              className="flex items-center gap-3 py-3.5"
            >
              <Avatar className="h-12 w-12 rounded-sm">
                <AvatarImage
                  src={notification.sender.imageUrl || DEFAULT_AVATAR_IMAGE}
                  alt="Avatar"
                  className="object-cover"
                />
                <AvatarFallback className="rounded-sm">OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm leading-none">
                  <span className="font-semibold">
                    {notification.sender.firstName}{' '}
                    {notification.sender.lastName}
                  </span>{' '}
                  {notification.description}
                </p>
                <p className="text-xs text-muted-foreground">2h</p>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Notifications;
