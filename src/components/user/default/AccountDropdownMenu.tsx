'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { DEFAULT_AVATAR_IMAGE } from '@/constants/images';

const AccountDropdownMenu: FC = () => {
  const { push } = useRouter();
  const { user, logout } = useAuthStore((state) => state);

  const handleLogout = async () => {
    await logout();
    push('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src={user?.imageUrl || DEFAULT_AVATAR_IMAGE}
            width={36}
            height={36}
            alt="Avatar"
            className="h-full overflow-hidden rounded-full object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={'/user/settings/account'}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
        </Link>
        <Link href={'/user/friends/1'}>
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdownMenu;
