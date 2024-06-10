import { Earth, UsersRound } from 'lucide-react';
import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Information: FC = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
          <UsersRound className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">23.7K members</p>
        </div>
        <div className="flex gap-x-2">
          <Earth className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">Public group</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Information;
