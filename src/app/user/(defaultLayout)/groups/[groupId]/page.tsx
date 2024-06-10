import { CirclePlus, Share2 } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';

import PostForm from '@/components/user/default/forms/PostForm';
import { Button } from '@/components/ui/button';
import Information from '@/components/user/default/groups/Information';
import About from '@/components/user/default/About';
import Post from '@/components/user/default/Post';
import { posts } from '@/data/user/posts';

const group = {
  name: 'Music lovers group',
  members: '23.7K',
  description:
    "Welcome to the Music Lovers group! 🎵❤️ This is a community for everyone who shares a passion for music. Whether you're into rock, pop, classical, or jazz, you'll find like-minded people here. Share your favorite songs, discuss new albums, and discover new artists. Let's enjoy the rhythm together! 🎶🎸🥁",
};

const UserGroupPage: NextPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          priority
          width="1920"
          height="1080"
          className="h-40 rounded-br-2xl rounded-tl-2xl object-cover lg:h-72"
        />

        <div className="absolute bottom-6 left-6 rounded-sm bg-black/40 px-4 py-1 drop-shadow-2xl sm:left-10 2xl:left-16">
          <h1 className="line-clamp-1 text-2xl font-semibold text-white 2xl:text-3xl">
            {group.name}
          </h1>
          <h2 className="font-semibold text-primary">
            {group.members} members
          </h2>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-x-2 lg:right-4 lg:top-4">
          <Button size="icon">
            <CirclePlus className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Join to group</span>
          </Button>
          <Button size="icon">
            <Share2 className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>

      <div className="flex max-w-[59rem] flex-1 justify-center gap-4 xl:mx-auto">
        <div className="grid w-full gap-4 sm:w-[80%] lg:md:w-[70%] lg:gap-8 xl:w-[80%] xl:grid-cols-3 2xl:w-[90%]">
          <div className="mt-4 grid items-start gap-6 lg:gap-8 xl:col-span-2 xl:mt-10">
            <div className="flex flex-col gap-6 lg:gap-8 xl:hidden">
              <About text={group.description} />
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
            <About text={group.description} />
            <Information />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGroupPage;
