import { NextPage } from 'next';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AccountForm from '@/components/user/settings/forms/AccountForm';

const UserSettingsAccountPage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Update your account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <AccountForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsAccountPage;
