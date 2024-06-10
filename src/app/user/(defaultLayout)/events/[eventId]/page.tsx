import { CirclePlus, Share2 } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';

import PostForm from '@/components/user/default/forms/PostForm';
import { Button } from '@/components/ui/button';
import Information from '@/components/user/default/events/Information';
import About from '@/components/user/default/About';
import Post from '@/components/user/default/Post';
import { posts } from '@/data/user/posts';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const event = {
  name: 'Sunrise festival 2024',
  about:
    "Join us for Sunrise Festival 2024! 🌅🎉 Get ready for an unforgettable weekend of music, dancing, and breathtaking sunrises. Featuring top DJs and artists from around the world, this is the ultimate summer festival experience. Mark your calendars for July 18-20, 2024, and let's celebrate together! 🎶🌞",
};

const UserEventPage: NextPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1582711004949-9584ee18b0c8?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                24
              </h2>
              <h3 className="text-xs font-semibold md:text-sm">June 2024</h3>
            </AvatarFallback>
          </Avatar>

          <h1 className="line-clamp-1 text-2xl font-semibold text-white drop-shadow-2xl 2xl:text-3xl">
            {event.name}
          </h1>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-x-2 lg:right-4 lg:top-4">
          <Button size="icon">
            <CirclePlus className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Join to event</span>
          </Button>
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
              <About text={event.about} />
              <Information />
            </div>

            <PostForm />

            {posts.map((post, index) => (
              <Post
                key={index}
                post={post}
              />
            ))}
          </div>
          <div className="sticky top-20 z-30 mt-10 hidden h-10 items-start gap-4 lg:gap-8 xl:grid xl:min-w-[18.5rem]">
            <About text={event.about} />
            <Information />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEventPage;
