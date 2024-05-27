import { NextPage } from 'next';

import AppearanceForm from '@/components/user/settings/forms/AppearanceForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const UserSettingsAppearancePage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the app. Automatically switch between day
          and night themes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AppearanceForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsAppearancePage;
