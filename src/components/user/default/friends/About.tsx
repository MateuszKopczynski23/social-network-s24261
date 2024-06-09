import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: FC = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="pb-4">
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Hi, I am Marek! 🌍 Passionate about travel, photography, and cooking.
          Always exploring new places and trying out different recipes. ✈️ Lover
          of books, music. 🎶📚 Let is connect and share our stories!
        </p>
      </CardContent>
    </Card>
  );
};

export default About;
