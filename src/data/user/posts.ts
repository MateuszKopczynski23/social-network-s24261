import { Post } from '@/interfaces/post';

export const posts: Post[] = [
  {
    id: '1',
    user: {
      id: '1',
      firstName: 'Mat',
      lastName: 'Doe',
      city: 'New York',
      dateOfBirth: '1999-10-21T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Software Engineer passionate about building cool things',
      street: '',
      country: 'USA',
      gender: 'male',
      email: 'test@test.pl',
      password: 'password',
      settings: {
        isAdmin: true,
        isPrivate: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
      friends: ['6'],
      friendRequests: [],
    },
    content:
      'Had a blast at the beach this weekend! 🏖️☀️ The weather was perfect and the water was just right. 🏊‍♂️🌊',
    createdAt: '2024-06-01',
    imageUrl:
      'https://images.unsplash.com/photo-1551478578-633e748b8822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: [],
    comments: [
      {
        id: '1',
        user: {
          id: '1',
          firstName: 'Mat',
          lastName: 'Doe',
          city: 'New York',
          dateOfBirth: '1999-10-21T00:00:00.000Z',
          imageUrl:
            'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
          backgroundUrl:
            'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'Software Engineer passionate about building cool things',
          street: '',
          country: 'USA',
          gender: 'male',
          email: 'test@test.pl',
          password: 'password',
          settings: {
            isAdmin: true,
            isPrivate: true,
            isNotificationsEnabled: true,
            isStickyHeader: true,
            isActiveFriendsVisible: false,
          },
          friends: ['6'],
          friendRequests: [],
        },
        content: 'Looks amazing! The colors are so vibrant',
        likes: [],
        createdAt: '2024-06-01',
      },
    ],
  },
  {
    id: '2',
    user: {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      city: 'Los Angeles',
      dateOfBirth: '1988-07-15T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Outdoor enthusiast and adventure lover',
      street: '',
      country: 'USA',
      gender: 'female',
      email: 'jane@test.com',
      password: 'password123',
      settings: {
        isAdmin: false,
        isPrivate: false,
        isNotificationsEnabled: true,
        isStickyHeader: false,
        isActiveFriendsVisible: true,
      },
      friends: ['1', '3'],
      friendRequests: [],
    },
    content:
      'Just had the most amazing hike in the mountains today! 🌄🏞️ Feeling so refreshed and energized! 💪✨',
    createdAt: '2024-06-02',
    imageUrl:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: [],
    comments: [
      {
        id: '2',
        user: {
          id: '3',
          firstName: 'Michael',
          lastName: 'Brown',
          city: 'Chicago',
          dateOfBirth: '1992-03-10T00:00:00.000Z',
          imageUrl:
            'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&dpr=2&q=80',
          backgroundUrl:
            'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Foodie and aspiring chef',
          street: '',
          country: 'USA',
          gender: 'male',
          email: 'michael@test.com',
          password: 'mypassword',
          settings: {
            isAdmin: false,
            isPrivate: false,
            isNotificationsEnabled: true,
            isStickyHeader: false,
            isActiveFriendsVisible: true,
          },
          friends: ['2'],
          friendRequests: [],
        },
        content: 'Sounds like an awesome adventure! 🏞️✨',
        likes: [],
        createdAt: '2024-06-02',
      },
    ],
  },
];
