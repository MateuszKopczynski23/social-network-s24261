import React, { FC, PropsWithChildren } from 'react';

const UserEventsPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border">
      <div className="bg-background">
        <div className="h-full px-4 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
};

export default UserEventsPage;
