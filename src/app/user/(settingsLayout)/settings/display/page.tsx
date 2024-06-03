import { NextPage } from 'next';

import DisplayForm from '@/components/user/settings/forms/DisplayForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const UserSettingsDisplayPage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Display</CardTitle>
        <CardDescription>
          Turn items on or off to control what is displayed in the app
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DisplayForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsDisplayPage;
