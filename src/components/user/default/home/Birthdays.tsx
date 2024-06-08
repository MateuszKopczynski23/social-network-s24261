import { Gift } from 'lucide-react';
import { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Birthdays: FC = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>Birthdays</CardTitle>
        <CardDescription className="text-xs">
          Celebrate your friends birthdays!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-x-2">
          <Gift className="h-6 w-6 flex-none" />
          <p className="text-sm">
            <span className="font-semibold text-primary/90">Nina James</span>{' '}
            and <span className="font-semibold text-primary/90"> 2 other </span>{' '}
            friends have birthdays today!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Birthdays;
