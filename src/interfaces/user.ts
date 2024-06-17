export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  city?: string;
  dateOfBirth?: string;
  imageUrl?: string;
  backgroundUrl?: string;
  description?: string;
  street?: string;
  country?: string;
  gender?: UserGender;
  email: string;
  password: string;
  settings: UserSettings;
}

interface UserSettings {
  isPrivate: boolean;
  isDarkMode: boolean;
  isNotificationsEnabled: boolean;
}

type UserGender = 'male' | 'female';
