import { Earth, UsersRound } from 'lucide-react';
import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InformationProps {
  members: number;
  isPrivate: boolean;
}

const Information: FC<InformationProps> = ({ members, isPrivate }) => {
  const groupStatus = isPrivate ? 'Private' : 'Public';

  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
          <UsersRound className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">{members} members</p>
        </div>
        <div className="flex gap-x-2">
          <Earth className="h-6 w-6 flex-none" />
          <p className="text-sm font-semibold">{groupStatus} group</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Information;
