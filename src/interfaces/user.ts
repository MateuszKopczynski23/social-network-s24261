export interface User {
  id: string;
  firstName: string;
  lastName: string;
  city?: string;
  dateOfBirth?: string;
  imageUrl?: string;
  backgroundUrl?: string;
  description?: string;
  street?: string;
  country?: string;
  gender: 'male' | 'female';
  email: string;
  password: string;
  settings: UserSettings;
  friends: string[];
  friendRequests: string[];
}

interface UserSettings {
  isPrivate: boolean;
  isAdmin: boolean;
  isNotificationsEnabled: boolean;
  isStickyHeader: boolean;
  isActiveFriendsVisible: boolean;
}
