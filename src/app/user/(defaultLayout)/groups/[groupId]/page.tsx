'use client';

import { CirclePlus, LogOut, Share2, Trash } from 'lucide-react';
import { NextPage } from 'next';
import Image from 'next/image';
import { notFound, useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

import PostForm from '@/components/user/default/forms/PostForm';
import { Button } from '@/components/ui/button';
import Information from '@/components/user/default/groups/Information';
import About from '@/components/user/default/About';
import Post from '@/components/user/default/Post';
import { useGroupsStore } from '@/providers/store/GroupsStoreProvider';
import { useAuthStore } from '@/providers/store/AuthStoreProvider';
import { DEFAULT_BACKGROUND_IMAGE } from '@/constants/images';
import { usePostsStore } from '@/providers/store/PostsStoreProvider';

const UserGroupPage: NextPage = () => {
  const { push } = useRouter();
  const { groupId } = useParams<{ groupId: string }>();
  const { user } = useAuthStore((state) => state);
  const {
    getGroupById,
    getUsersCountInGroup,
    isUserInGroup,
    addUserToGroup,
    removeUserFromGroup,
    isUserGroupOwner,
    removeGroup,
  } = useGroupsStore((state) => state);
  const { getGroupPosts } = usePostsStore((state) => state);

  const group = getGroupById(groupId);

  if (!group || !user) notFound();

  const userId = user.id;
  const members = getUsersCountInGroup(groupId);
  const canUserJoin = isUserInGroup(groupId, userId);
  const inOwner = isUserGroupOwner(groupId, userId);

  const handleJoin = () => {
    addUserToGroup(groupId, user);

    toast.success('You have joined the group successfully!');
  };

  const handleLeave = () => {
    removeUserFromGroup(groupId, userId);

    toast.success('You have left the group.');
    push('/user/groups');
  };

  const handleRemove = () => {
    push('/user/groups');
    toast.success('You have removed the group.');

    setTimeout(() => {
      removeGroup(groupId);
    }, 10);
  };

  return (
    <>
      <div className="relative">
        <Image
          src={group.imageUrl || DEFAULT_BACKGROUND_IMAGE}
          alt="background"
          priority
          width="1920"
          height="1080"
          className="h-40 rounded-br-2xl rounded-tl-2xl object-cover lg:h-72"
        />

        <div className="absolute bottom-6 left-6 rounded-sm bg-black/50 px-4 py-1 drop-shadow-2xl sm:left-10 2xl:left-16">
          <h1 className="line-clamp-1 text-2xl font-semibold text-white 2xl:text-3xl">
            {group.name}
          </h1>
          <h2 className="font-semibold text-primary">{members} members</h2>
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-x-2 lg:right-4 lg:top-4">
          {inOwner && (
            <Button
              size="icon"
              onClick={handleRemove}
            >
              <Trash className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Remove the group</span>
            </Button>
          )}
          {canUserJoin ? (
            <Button
              size="icon"
              onClick={handleLeave}
            >
              <LogOut className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Leave the group</span>
            </Button>
          ) : (
            <Button
              size="icon"
              onClick={handleJoin}
            >
              <CirclePlus className="h-5 w-5 rotate-0 scale-100 transition-all dark:text-white" />
              <span className="sr-only">Join to group</span>
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
          <div className="mt-4 grid items-start gap-6 lg:gap-8 xl:col-span-2 xl:mt-10">
            <div className="flex flex-col gap-6 lg:gap-8 xl:hidden">
              <About text={group.description || ''} />
              <Information
                members={members}
                isPrivate={group.isPrivate}
              />
            </div>

            {isUserInGroup(groupId, userId) && (
              <>
                <PostForm groupId={groupId} />
                {getGroupPosts(groupId).map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))}
              </>
            )}
          </div>
          <div className="sticky top-20 z-30 mt-10 hidden h-10 items-start gap-4 lg:gap-8 xl:grid xl:min-w-[18.5rem]">
            <About text={group.description || ''} />
            <Information
              members={members}
              isPrivate={group.isPrivate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGroupPage;
