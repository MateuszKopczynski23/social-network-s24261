import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

import { TooltipProvider } from '@/components/ui/tooltip';
import { SWRProvider } from '@/providers/SWRProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SWRProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </SWRProvider>
  );
};

export default Providers;
