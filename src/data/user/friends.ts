export interface Friend {
  firstName: string;
  lastName: string;
  image: string;
  city: string;
  age: number;
}

export const userFriends: Friend[] = [
  {
    firstName: 'Lena',
    lastName: 'Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    city: 'Berlin',
    age: 25,
  },
  {
    firstName: 'Beth',
    lastName: 'Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    city: 'Paris',
    age: 30,
  },
  {
    firstName: 'Nina',
    lastName: 'Netcode',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    city: 'London',
    age: 35,
  },
  {
    firstName: 'Lena',
    lastName: 'Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    city: 'Berlin',
    age: 27,
  },
  {
    firstName: 'Beth',
    lastName: 'Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    city: 'Paris',
    age: 32,
  },
  {
    firstName: 'Nina',
    lastName: 'Netcode',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    city: 'London',
    age: 37,
  },
  {
    firstName: 'Lena',
    lastName: 'Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    city: 'Berlin',
    age: 29,
  },
  {
    firstName: 'Beth',
    lastName: 'Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    city: 'Paris',
    age: 34,
  },
  {
    firstName: 'Nina',
    lastName: 'Netcode',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    city: 'London',
    age: 39,
  },
  {
    firstName: 'Lena',
    lastName: 'Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    city: 'Berlin',
    age: 21,
  },
  {
    firstName: 'Beth',
    lastName: 'Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    city: 'Paris',
    age: 26,
  },
];

export const newFriends: Friend[] = [...userFriends, ...userFriends];
