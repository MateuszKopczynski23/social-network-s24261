import { NextPage } from 'next';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PrivacyForm from '@/components/user/settings/forms/PrivacyForm';

const UserSettingsPrivacyPage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy</CardTitle>
        <CardDescription>
          Manage your privacy settings and control how your personal information
          is handled
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PrivacyForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsPrivacyPage;
