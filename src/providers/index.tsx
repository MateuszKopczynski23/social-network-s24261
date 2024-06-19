import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthStoreProvider } from '@/providers/AuthStoreProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthStoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </AuthStoreProvider>
  );
};

export default Providers;
