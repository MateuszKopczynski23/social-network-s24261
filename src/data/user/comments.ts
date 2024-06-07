export interface Comment {
  userName: string;
  userImage: string;
  content: string;
  date: string;
  likes: number;
}

export const comments: Comment[] = [
  {
    userName: 'Alice Brown',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    content: 'Looks amazing! The colors are so vibrant',
    date: '2024-06-01',
    likes: 2,
  },
  {
    userName: 'Bob White',
    userImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79',
    content:
      'I would love to visit this place! It looks like a perfect spot for a relaxing vacation away from the city.',
    date: '2024-06-02',
    likes: 5,
  },
  {
    userName: 'Charlie Green',
    userImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    content:
      'The view is absolutely stunning, and it looks like you had an amazing time exploring.',
    date: '2024-06-02',
    likes: 3,
  },
  {
    userName: 'Diana Black',
    userImage: 'https://images.unsplash.com/photo-1485217988980-11786ced9454',
    content: 'Beautiful photo! The sunset over the mountains is just perfect.',
    date: '2024-06-03',
    likes: 10,
  },
];
