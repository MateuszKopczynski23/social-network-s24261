'use client';

import { MessageCircleIcon, Send, UserPlus } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import Information from '@/components/user/default/friends/Information';
import About from '@/components/user/default/About';
import Post from '@/components/user/default/Post';
import { posts } from '@/data/user/posts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUsersStore } from '@/providers/store/UsersStoreProvider';
import {
  DEFAULT_AVATAR_IMAGE,
  DEFAULT_BACKGROUND_IMAGE,
} from '@/constants/images';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';

const UserFriendPage: NextPage = () => {
  const { friendId } = useParams<{ friendId: string }>();
  const { user: authUser } = useAuthStore((state) => state);
  const { getUserById, canSendFriendRequest } = useUsersStore((state) => state);

  const user = getUserById(friendId);

  if (!user || !authUser) notFound();

  return (
    <>
      <div className="relative">
        <Image
          src={user.backgroundUrl || DEFAULT_BACKGROUND_IMAGE}
          alt="background"
          priority
          width="1920"
          height="1080"
          className="h-40 rounded-br-2xl rounded-tl-2xl object-cover lg:h-72"
        />

        <div className="absolute -bottom-6 left-6 flex items-center gap-x-3 sm:left-10 sm:gap-x-4 2xl:left-16 2xl:gap-x-6">
          <Avatar className="h-24 w-24 border-2 md:h-28 md:w-28 lg:h-32 lg:w-32 2xl:h-36 2xl:w-36">
            <AvatarImage
              src={user.imageUrl || DEFAULT_AVATAR_IMAGE}
              alt="Avatar"
              className="object-cover"
            />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>

          <h1 className="line-clamp-1 text-2xl font-semibold text-white drop-shadow-2xl 2xl:text-3xl">
            {user.firstName} {user.lastName}
          </h1>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-x-2 lg:right-4 lg:top-4">
          {canSendFriendRequest(authUser, user) ? (
            <Button size="icon">
              <UserPlus className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Send friend request</span>
            </Button>
          ) : (
            <Button
              size="icon"
              disabled
            >
              <Send className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Request sent</span>
            </Button>
          )}
          <Button size="icon">
            <MessageCircleIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>

      <div className="flex max-w-[59rem] flex-1 justify-center gap-4 xl:mx-auto">
        <div className="grid w-full gap-4 sm:w-[80%] lg:md:w-[70%] lg:gap-8 xl:w-[80%] xl:grid-cols-3 2xl:w-[90%]">
          <div className="mt-10 grid items-start gap-6 lg:gap-8 xl:col-span-2">
            <div className="flex flex-col gap-6 lg:gap-8 xl:hidden">
              <About text={user.description || ''} />
              <Information {...user} />
            </div>

            {posts.map((post, index) => (
              <Post
                key={index}
                post={post}
              />
            ))}
          </div>
          <div className="sticky top-20 z-30 mt-10 hidden h-10 items-start gap-4 lg:gap-8 xl:grid xl:min-w-[18.5rem]">
            <About text={user.description || ''} />
            <Information {...user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFriendPage;
