import { Cake, Earth, Home, PersonStanding } from 'lucide-react';
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
          <Cake className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">20th of May</p>
        </div>
        <div className="flex gap-x-2">
          <Home className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">New York, green street 2</p>
        </div>
        <div className="flex gap-x-2">
          <Earth className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">United States</p>
        </div>
        <div className="flex gap-x-2">
          <PersonStanding className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">Male</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Information;
