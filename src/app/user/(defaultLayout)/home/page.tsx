import { NextPage } from 'next';

import PostForm from '@/components/user/default/forms/PostForm';
import FriendRequests from '@/components/user/default/home/FriendRequests';
import FriendSuggestions from '@/components/user/default/home/FriendSuggestions';
import Birthdays from '@/components/user/default/home/Birthdays';
import { posts } from '@/data/user/posts';
import Post from '@/components/user/default/Post';

const UserHomePage: NextPage = () => {
  return (
    <div className="flex max-w-[59rem] flex-1 justify-center gap-4 xl:mx-auto">
      <div className="grid w-full gap-4 sm:w-[80%] lg:md:w-[70%] lg:gap-8 xl:w-[80%] xl:grid-cols-3 2xl:w-[90%]">
        <div className="grid items-start gap-6 lg:gap-8 xl:col-span-2">
          <PostForm />

          {posts.map((post, index) => (
            <Post
              key={index}
              post={post}
            />
          ))}
        </div>
        <div className="sticky top-20 z-30 hidden h-10 items-start gap-4 lg:gap-8 xl:grid xl:min-w-[18.5rem]">
          <Birthdays />
          <FriendSuggestions />
          <FriendRequests />
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
