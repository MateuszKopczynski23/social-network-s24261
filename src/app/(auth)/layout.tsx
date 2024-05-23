import Image from 'next/image';
import React, { FC, PropsWithChildren } from 'react';

import ThemeToggle from '@/components/ThemeToggle';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-full sm:min-h-[600px] lg:grid lg:grid-cols-2 xl:min-h-[800px]">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="my-auto flex h-full items-center justify-center py-12">
        {children}
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          priority
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.7] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
