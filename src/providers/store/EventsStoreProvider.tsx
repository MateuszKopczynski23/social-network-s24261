'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createEventsStore, type EventsStore } from '@/stores/events';

export type EventsStoreApi = ReturnType<typeof createEventsStore>;

export const EventsStoreContext = createContext<EventsStoreApi | undefined>(
  undefined
);

export interface EventsStoreProviderProps {
  children: ReactNode;
}

export const EventsStoreProvider = ({ children }: EventsStoreProviderProps) => {
  const storeRef = useRef<EventsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createEventsStore();
  }

  return (
    <EventsStoreContext.Provider value={storeRef.current}>
      {children}
    </EventsStoreContext.Provider>
  );
};

export const useEventsStore = <T,>(selector: (store: EventsStore) => T): T => {
  const eventsStoreContext = useContext(EventsStoreContext);

  if (!eventsStoreContext) {
    throw new Error('useEventsStore must be used within EventsStoreProvider');
  }

  return useStore(eventsStoreContext, selector);
};
