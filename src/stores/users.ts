import { createStore } from 'zustand/vanilla';
import find from 'lodash/find';
import includes from 'lodash/includes';
import filter from 'lodash/filter';

import { users } from '@/data/user/users';
import { User } from '@/interfaces/user';
import { getUsers, updateUser } from '@/api/user';
import { setUser } from '@/actions/users';

export type UsersState = {
  users: User[] | [];
};

export type UsersActions = {
  getUsers: (user: User) => User[];
  getUserFriends: (user: User) => User[];
  getUserFriendRequests: (user: User) => User[];
  getUserNewFriends: (user: User) => User[];
  addFriend: (user: User, friend: User) => Promise<void>;
  removeFriend: (user: User, friend: User) => Promise<void>;
  addFriendRequest: (user: User, friend: User) => Promise<void>;
  removeFriendRequest: (user: User, friend: User) => Promise<void>;

  canAcceptFriendRequest: (user: User, friend: User) => boolean;
  canRemoveFriend: (user: User, friend: User) => boolean;
  canDeclineFriendRequest: (user: User, friend: User) => boolean;
  canSendFriendRequest: (user: User, friend: User) => boolean;
};

export type UsersStore = UsersState & UsersActions;

export const initUsersStore = (users?: UsersState['users']): UsersState => {
  return { users: users || [] };
};

export const defaultInitState: UsersState = {
  users: [...users],
};

export const createUsersStore = (initState: UsersState = defaultInitState) => {
  return createStore<UsersStore>((set, get) => ({
    ...initState,

    getUsers: (user: User) => {
      const allUsers = get().users;

      if (!user) return allUsers;

      return filter(allUsers, (u) => u.id !== user.id);
    },

    getUserFriends: (user: User) => {
      const allUsers = get().getUsers(user);

      if (!user) return [];

      return filter(allUsers, (u) => includes(user.friends, u.id));
    },

    getUserFriendRequests: (user: User) => {
      const allUsers = get().getUsers(user);

      if (!user) return [];

      return filter(allUsers, (u) => includes(user.friendRequests, u.id));
    },

    getUserNewFriends: (user: User) => {
      const allUsers = get().getUsers(user);

      if (!user) return [];

      return filter(
        allUsers,
        (u) =>
          !includes(user.friends, u.id) && !includes(user.friendRequests, u.id)
      );
    },

    addFriend: async (user: User, friend: User) => {
      const allUsers = get().getUsers(user);
      const friendUser = find(allUsers, { id: friend.id });

      if (user && friendUser) {
        user.friends.push(friend.id);
        friendUser.friends.push(user.id);

        user.friendRequests = filter(
          user.friendRequests,
          (id) => id !== friend.id
        );

        await updateUser(user, user.id);
        await setUser(user);
        await updateUser(friendUser, friend.id);

        const newUsers = await getUsers();

        set({ users: [...newUsers] });
      }
    },

    removeFriend: async (user: User, friend: User) => {
      const allUsers = get().getUsers(user);
      const friendUser = find(allUsers, { id: friend.id });

      if (user && friendUser) {
        user.friends = user.friends.filter((id) => id !== friend.id);
        friendUser.friends = friendUser.friends.filter((id) => id !== user.id);

        await updateUser(user, user.id);
        await setUser(user);
        await updateUser(friendUser, friend.id);

        const newUsers = await getUsers();

        set({ users: [...newUsers] });
      }
    },

    addFriendRequest: async (user: User, friend: User) => {
      const allUsers = get().getUsers(user);
      const friendUser = find(allUsers, { id: friend.id });

      if (friendUser) {
        friendUser.friendRequests.push(user.id);

        await updateUser(friendUser, friend.id);

        const newUsers = await getUsers();

        set({ users: [...newUsers] });
      }
    },

    removeFriendRequest: async (user: User, friend: User) => {
      if (user) {
        user.friendRequests = user.friendRequests.filter(
          (id) => id !== friend.id
        );

        await updateUser(user, user.id);
        await setUser(user);

        const newUsers = await getUsers();

        set({ users: [...newUsers] });
      }
    },

    canAcceptFriendRequest: (user: User, friend: User) => {
      return user.friendRequests.includes(friend.id);
    },

    canRemoveFriend: (user: User, friend: User) => {
      return user.friends.includes(friend.id);
    },

    canDeclineFriendRequest: (user: User, friend: User) => {
      return user.friendRequests.includes(friend.id);
    },

    canSendFriendRequest: (user: User, friend: User) => {
      const allUsers = get().getUsers(user);
      const friendUser = find(allUsers, { id: friend.id });

      return (
        !user.friends.includes(friend.id) &&
        !user.friendRequests.includes(friend.id) &&
        user.id !== friend.id &&
        !(friendUser && includes(friendUser.friendRequests, user.id))
      );
    },
  }));
};
