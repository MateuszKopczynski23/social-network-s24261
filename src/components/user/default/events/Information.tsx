import { Calendar, Earth, Home, UsersRound } from 'lucide-react';
import { FC } from 'react';
import { formatDate } from 'date-fns';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InformationProps {
  date: string;
  members: number;
  city: string;
  street: string;
  country: string;
}

const Information: FC<InformationProps> = ({
  date,
  members,
  city,
  street,
  country,
}) => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
          <Calendar className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">
            {formatDate(date, 'dd MMM yyyy')}
          </p>
        </div>
        <div className="flex gap-x-2">
          <UsersRound className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">{members} people</p>
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
      </CardContent>
    </Card>
  );
};

export default Information;
