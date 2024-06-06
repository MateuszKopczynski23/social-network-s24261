export interface Post {
  userName: string;
  description: string;
  date: string;
  userImage: string;
  image: string;
  likes: number;
  comments: number;
}

export const posts: Post[] = [
  {
    userName: 'John Doe',
    description: 'Exploring the beautiful landscapes!',
    date: '2024-06-01',
    userImage: 'https://images.unsplash.com/photo-1502720705749-3c1c24d7ffed',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    likes: 120,
    comments: 15,
  },
  {
    userName: 'Jane Smith',
    description: 'A perfect day at the beach.',
    date: '2024-06-02',
    userImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79',
    image: '',
    likes: 200,
    comments: 25,
  },
  {
    userName: 'Michael Brown',
    description: 'Hiking adventure in the mountains.',
    date: '2024-06-03',
    userImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    likes: 180,
    comments: 20,
  },
  {
    userName: 'Emily Johnson',
    description: 'Sunset over the city skyline.',
    date: '2024-06-04',
    userImage: 'https://images.unsplash.com/photo-1485217988980-11786ced9454',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    likes: 250,
    comments: 30,
  },
  {
    userName: 'David Wilson',
    description: 'Culinary delights from around the world.',
    date: '2024-06-05',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    likes: 300,
    comments: 45,
  },
];
