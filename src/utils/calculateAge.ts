import { differenceInYears } from 'date-fns';

export const calculateAge = (dateOfBirth: string): number => {
  if (!dateOfBirth) return 0;

  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  return differenceInYears(currentDate, birthDate);
};
