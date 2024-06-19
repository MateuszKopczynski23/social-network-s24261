import { LoginFormValues } from '@/app/(auth)/login/page';
import { API_URL } from '@/constants/api';

export const Login = async ({ email, password }: LoginFormValues) => {
  try {
    const response = await fetch(
      `${API_URL}/users?email=${email}&password=${password}`
    );

    const data = await response.json();

    return data[0];
  } catch (e) {
    console.log(e);
  }
};
