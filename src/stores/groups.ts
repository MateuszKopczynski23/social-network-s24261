import { createStore } from 'zustand/vanilla';
import map from 'lodash/map';
import concat from 'lodash/concat';
import filter from 'lodash/filter';
import some from 'lodash/some';
import find from 'lodash/find';
import size from 'lodash/size';
import reject from 'lodash/reject';

import { Group } from '@/interfaces/group';
import { groups } from '@/data/user/groups';
import { User } from '@/interfaces/user';

export type GroupsState = {
  groups: Group[] | [];
};

export type GroupsActions = {
  getGroupById: (groupId: string) => Group | undefined;
  addGroup: (data: Group) => void;
  editGroup: (groupId: string, data: Group) => void;
  removeGroup: (groupId: string) => void;
  addUserToGroup: (groupId: string, user: User) => void;
  removeUserFromGroup: (groupId: string, userId: string) => void;
  isUserInGroup: (groupId: string, userId: string) => boolean;
  getUsersCountInGroup: (groupId: string) => number;
  isUserGroupOwner: (groupId: string, userId: string) => boolean;
};

export type GroupsStore = GroupsState & GroupsActions;

export const defaultInitState: GroupsState = {
  groups: [...groups],
};

export const createGroupsStore = (
  initState: GroupsState = defaultInitState
) => {
  return createStore<GroupsStore>()((set, get) => ({
    ...initState,

    getGroupById: (groupId: string) => {
      return find(get().groups, { id: groupId });
    },

    addGroup: (data: Group) => {
      set((state) => ({ groups: [...state.groups, data] }));
    },

    editGroup: (groupId: string, data: Group) => {
      const updatedGroups = map(get().groups, (group) =>
        group.id === groupId ? { ...group, ...data } : group
      );

      set({ groups: updatedGroups });
    },

    removeGroup: (groupId: string) => {
      const groups = filter(get().groups, (group) => group.id !== groupId);

      set({ groups });
    },

    addUserToGroup: (groupId: string, user: User) => {
      const groups = map(get().groups, (group) =>
        group.id === groupId
          ? { ...group, users: concat(group.users, user) }
          : group
      );

      set({ groups });
    },

    removeUserFromGroup: (groupId: string, userId: string) => {
      const updatedGroups = map(get().groups, (group) =>
        group.id === groupId
          ? {
              ...group,
              users: reject(group.users, { id: userId }),
            }
          : group
      );

      set({ groups: updatedGroups });
    },

    isUserInGroup: (groupId: string, userId: string) => {
      const group = find(get().groups, { id: groupId });

      if (!group) return false;

      return some(group.users, { id: userId });
    },

    getUsersCountInGroup: (groupId: string) => {
      const group = find(get().groups, { id: groupId });

      if (!group) return 0;

      return size(group.users);
    },

    isUserGroupOwner: (groupId: string, userId: string) => {
      const group = find(get().groups, { id: groupId });

      if (!group) return false;

      return group.userId === userId;
    },
  }));
};
