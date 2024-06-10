import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutProps {
  text: string;
}

const About: FC<AboutProps> = ({ text }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{text}</p>
      </CardContent>
    </Card>
  );
};

export default About;
