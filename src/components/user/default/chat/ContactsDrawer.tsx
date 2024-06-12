import { FC } from 'react';
import { MessageCircle } from 'lucide-react';

import Contacts from '@/components/user/default/chat/Contacts';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const ContactsDrawer: FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">Contacts</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh] sm:px-10">
        <DrawerHeader>
          <DrawerTitle>Contacts</DrawerTitle>
        </DrawerHeader>
        <Contacts />
      </DrawerContent>
    </Drawer>
  );
};

export default ContactsDrawer;
