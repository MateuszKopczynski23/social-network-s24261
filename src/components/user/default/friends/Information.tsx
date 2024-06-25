import { Cake, Earth, Home, PersonStanding } from 'lucide-react';
import { FC } from 'react';
import { format } from 'date-fns';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/interfaces/user';

const Information: FC<User> = (user) => {
  const { dateOfBirth, city, street, country, gender } = user;

  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
          <Cake className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">
            {format(dateOfBirth || '', 'dd MMM yyyy')}
          </p>
        </div>
        <div className="flex gap-x-2">
          <Home className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">
            {city}, {street}
          </p>
        </div>
        <div className="flex gap-x-2">
          <Earth className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">{country}</p>
        </div>
        <div className="flex gap-x-2">
          <PersonStanding className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold capitalize">{gender}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Information;
