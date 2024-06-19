'use client';

import { SWRConfig } from 'swr';
import { FC, PropsWithChildren } from 'react';

export const SWRProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((response) => response.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
