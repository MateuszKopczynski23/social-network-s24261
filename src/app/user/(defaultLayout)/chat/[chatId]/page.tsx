import { Search } from 'lucide-react';
import { NextPage } from 'next';

import Contacts from '@/components/user/default/chat/Contacts';
import { Input } from '@/components/ui/input';
import Chat from '@/components/user/default/chat/Chat';

const UserChatPage: NextPage = () => {
  return (
    <div className="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="relative hidden h-full flex-col items-start gap-2 p-1 md:flex">
        <div className="w-full bg-background/95 p-4 pl-0 pr-4 pt-0 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                className="pl-8"
              />
            </div>
          </form>
        </div>
        <Contacts />
      </div>
      <Chat />
    </div>
  );
};

export default UserChatPage;
