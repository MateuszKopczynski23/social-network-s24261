import { NextPage } from 'next';

import ProfileForm from '@/components/user/settings/forms/ProfileForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const UserSettingsProfilePage: NextPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          This is how others will see you on the site
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProfileForm />
      </CardContent>
    </Card>
  );
};

export default UserSettingsProfilePage;
