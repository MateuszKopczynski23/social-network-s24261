import { createStore } from 'zustand/vanilla';
import map from 'lodash/map';
import concat from 'lodash/concat';
import filter from 'lodash/filter';
import some from 'lodash/some';
import find from 'lodash/find';
import size from 'lodash/size';
import reject from 'lodash/reject';

import { Event } from '@/interfaces/event';
import { events } from '@/data/user/events';
import { User } from '@/interfaces/user';

export type EventsState = {
  events: Event[] | [];
};

export type EventsActions = {
  getEventById: (eventId: string) => Event | undefined;
  addEvent: (data: Event) => void;
  editEvent: (eventId: string, data: Event) => void;
  removeEvent: (eventId: string) => void;
  addUserToEvent: (eventId: string, user: User) => void;
  removeUserFromEvent: (eventId: string, userId: string) => void;
  isUserInEvent: (eventId: string, userId: string) => boolean;
  getUsersCountInEvent: (eventId: string) => number;
  isUserEventOwner: (eventId: string, userId: string) => boolean;
};

export type EventsStore = EventsState & EventsActions;

export const defaultInitState: EventsState = {
  events: [...events],
};

export const createEventsStore = (
  initState: EventsState = defaultInitState
) => {
  return createStore<EventsStore>()((set, get) => ({
    ...initState,

    getEventById: (eventId: string) => {
      return find(get().events, { id: eventId });
    },

    addEvent: (data: Event) => {
      set((state) => ({ events: [...state.events, data] }));
    },

    editEvent: (eventId: string, data: Event) => {
      const updatedEvents = map(get().events, (event) =>
        event.id === eventId ? { ...event, ...data } : event
      );

      set({ events: updatedEvents });
    },

    removeEvent: (eventId: string) => {
      const events = filter(get().events, (event) => event.id !== eventId);

      set({ events });
    },

    addUserToEvent: (eventId: string, user: User) => {
      const events = map(get().events, (event) =>
        event.id === eventId
          ? { ...event, users: concat(event.users, user) }
          : event
      );

      set({ events });
    },

    removeUserFromEvent: (eventId: string, userId: string) => {
      const updatedEvents = map(get().events, (event) =>
        event.id === eventId
          ? {
              ...event,
              users: reject(event.users, { id: userId }),
            }
          : event
      );

      set({ events: updatedEvents });
    },

    isUserInEvent: (eventId: string, userId: string) => {
      const event = find(get().events, { id: eventId });

      if (!event) return false;

      return some(event.users, { id: userId });
    },

    getUsersCountInEvent: (eventId: string) => {
      const event = find(get().events, { id: eventId });

      if (!event) return 0;

      return size(event.users);
    },

    isUserEventOwner: (eventId: string, userId: string) => {
      const event = find(get().events, { id: eventId });

      if (!event) return false;

      return event.userId === userId;
    },
  }));
};
