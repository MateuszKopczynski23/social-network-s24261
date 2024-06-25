'use client';

import { CirclePlus, LogOut, Share2, Trash } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';
import { notFound, useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { format } from 'date-fns';

import PostForm from '@/components/user/default/forms/PostForm';
import { Button } from '@/components/ui/button';
import Information from '@/components/user/default/events/Information';
import About from '@/components/user/default/About';
import Post from '@/components/user/default/Post';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { useEventsStore } from '@/providers/store/EventsStoreProvider';
import { DEFAULT_BACKGROUND_IMAGE } from '@/constants/images';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';

const UserEventPage: NextPage = () => {
  const { push } = useRouter();
  const { eventId } = useParams<{ eventId: string }>();
  const { user } = useAuthStore((state) => state);
  const {
    getEventById,
    getUsersCountInEvent,
    isUserInEvent,
    addUserToEvent,
    removeUserFromEvent,
    isUserEventOwner,
    removeEvent,
  } = useEventsStore((state) => state);
  const { getEventPosts } = usePostsStore((state) => state);

  const event = getEventById(eventId);

  if (!event || !user) notFound();

  const userId = user.id;
  const members = getUsersCountInEvent(eventId);
  const canUserJoin = isUserInEvent(eventId, userId);
  const inOwner = isUserEventOwner(eventId, userId);

  const handleJoin = () => {
    addUserToEvent(eventId, user);

    toast.success('You have joined the event successfully!');
  };

  const handleLeave = () => {
    removeUserFromEvent(eventId, userId);

    toast.success('You have left the event.');
    push('/user/events');
  };

  const handleRemove = () => {
    push('/user/events');
    toast.success('You have removed the event.');

    setTimeout(() => {
      removeEvent(eventId);
    }, 10);
  };

  return (
    <>
      <div className="relative">
        <Image
          src={event.imageUrl || DEFAULT_BACKGROUND_IMAGE}
          alt="background"
          priority
          width="1920"
          height="1080"
          className="h-40 rounded-br-2xl rounded-tl-2xl object-cover lg:h-72"
        />

        <div className="absolute -bottom-6 left-6 flex items-center gap-x-3 sm:left-10 sm:gap-x-4 2xl:left-16 2xl:gap-x-6">
          <Avatar className="h-24 w-24 rounded-br-md rounded-tr-md md:h-28 md:w-28 lg:h-32 lg:w-32 2xl:h-36 2xl:w-36">
            <AvatarFallback className="flex flex-col items-center justify-center gap-y-1 rounded-none bg-primary text-white">
              <h2 className="text-4xl font-bold drop-shadow-2xl md:text-5xl lg:text-6xl">
                {format(event.date, 'dd')}
              </h2>
              <h3 className="text-xs font-semibold md:text-sm">
                {format(event.date, 'MMM yyyy')}
              </h3>
            </AvatarFallback>
          </Avatar>

          <h1 className="line-clamp-1 rounded bg-black/50 p-2 text-2xl font-semibold text-white drop-shadow-2xl 2xl:text-3xl">
            {event.name}
          </h1>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-x-2 lg:right-4 lg:top-4">
          {inOwner && (
            <Button
              size="icon"
              onClick={handleRemove}
            >
              <Trash className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Remove the event</span>
            </Button>
          )}
          {canUserJoin ? (
            <Button
              size="icon"
              onClick={handleLeave}
            >
              <LogOut className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Leave the event</span>
            </Button>
          ) : (
            <Button
              size="icon"
              onClick={handleJoin}
            >
              <CirclePlus className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Join to event</span>
            </Button>
          )}

          <Button size="icon">
            <Share2 className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>

      <div className="flex max-w-[59rem] flex-1 justify-center gap-4 xl:mx-auto">
        <div className="grid w-full gap-4 sm:w-[80%] lg:md:w-[70%] lg:gap-8 xl:w-[80%] xl:grid-cols-3 2xl:w-[90%]">
          <div className="mt-10 grid items-start gap-6 lg:gap-8 xl:col-span-2">
            <div className="flex flex-col gap-6 lg:gap-8 xl:hidden">
              <About text={event.description || ''} />
              <Information
                date={event.date}
                members={members}
                city={event.city || ''}
                street={event.street || ''}
                country={event.country || ''}
              />
            </div>

            {isUserInEvent(eventId, userId) && (
              <>
                <PostForm eventId={eventId} />
                {getEventPosts(eventId).map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))}
              </>
            )}
          </div>
          <div className="sticky top-20 z-30 mt-10 hidden h-10 items-start gap-4 lg:gap-8 xl:grid xl:min-w-[18.5rem]">
            <About text={event.description || ''} />
            <Information
              date={event.date}
              members={members}
              city={event.city || ''}
              street={event.street || ''}
              country={event.country || ''}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEventPage;
