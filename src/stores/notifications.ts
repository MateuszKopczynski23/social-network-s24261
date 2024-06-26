import { createStore } from 'zustand/vanilla';
import concat from 'lodash/concat';
import filter from 'lodash/filter';
import find from 'lodash/find';
import size from 'lodash/size';

import { Notification } from '@/interfaces/notification';

export type NotificationsState = {
  notifications: Notification[] | [];
};

export type NotificationsActions = {
  addNotification: (notification: Notification) => void;
  removeNotification: (notificationId: string) => void;
  isNotificationForUser: (notificationId: string, userId: string) => boolean;
  getNotificationsForUser: (userId: string) => Notification[];
  getNotificationCountForUser: (userId: string) => number;
  clearNotifications: () => void;
};

export type NotificationsStore = NotificationsState & NotificationsActions;

export const defaultInitState: NotificationsState = {
  notifications: [],
};

export const createNotificationsStore = (
  initState: NotificationsState = defaultInitState
) => {
  return createStore<NotificationsStore>()((set, get) => ({
    ...initState,

    addNotification: (notification: Notification) => {
      set((state) => ({
        notifications: concat(state.notifications, notification),
      }));
    },

    removeNotification: (notificationId: string) => {
      set((state) => ({
        notifications: filter(
          state.notifications,
          (notification) => notification.id !== notificationId
        ),
      }));
    },

    isNotificationForUser: (notificationId: string, userId: string) => {
      const { notifications } = get();
      const notification = find(
        notifications,
        (notification) => notification.id === notificationId
      );

      return notification ? notification.user.id === userId : false;
    },

    getNotificationsForUser: (userId: string) => {
      const { notifications } = get();
      return filter(
        notifications,
        (notification) =>
          notification.user.id === userId && notification.sender.id !== userId
      );
    },

    getNotificationCountForUser: (userId: string) => {
      const notifications = get().getNotificationsForUser(userId);
      return size(
        filter(notifications, (notification) => notification.user.id === userId)
      );
    },

    clearNotifications: () => {
      set(() => ({
        notifications: [],
      }));
    },
  }));
};