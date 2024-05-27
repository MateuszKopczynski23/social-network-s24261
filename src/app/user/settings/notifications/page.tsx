import { NextPage } from 'next';

import NotificationsForm from '@/components/user/settings/forms/NotificationsForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const UserSettingsNotificationsPage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Configure how you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <NotificationsForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsNotificationsPage;
