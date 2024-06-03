export interface Group {
  name: string;
  description: string;
  image: string;
}

export const userGroups: Group[] = [
  {
    description: 'A group for Tom Holland fans',
    name: 'Tom Holland fan club',
    image:
      'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  },
  {
    description: 'Fun group for all the cat lovers out there',
    name: 'Functional Fury',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
  },
  {
    description: 'A group for React developers',
    name: 'React Rendezvous',
    image:
      'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
  },
  {
    description: 'Music lovers group',
    name: 'Stateful Symphony',
    image:
      'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
  },
  {
    name: 'Async Awakenings',
    description: 'Nina Netcode',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
  },
  {
    name: 'The Art of Reusability',
    description: 'Lena Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
  },
  {
    name: 'Thinking Components',
    description: 'Lena Logic',
    image:
      'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  },
  {
    name: 'Functional Fury',
    description: 'Beth Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
  },
  {
    name: 'React Rendezvous',
    description: 'Group for moms',
    image:
      'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
  },
  {
    name: 'Stateful Symphony',
    description: 'Beth Binary',
    image:
      'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
  },
  {
    name: 'Async Awakenings',
    description: 'Nina Netcode',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
  },
  {
    name: 'The Art of Reusability',
    description: 'Lena Logic',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
  },
  {
    name: 'Thinking Components',
    description: 'Lena Logic',
    image:
      'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
  },
  {
    name: 'Functional Fury',
    description: 'Beth Binary',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
  },
];

export const newGroups: Group[] = [...userGroups, ...userGroups, ...userGroups];
