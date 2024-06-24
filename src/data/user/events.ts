import { Event } from '@/interfaces/event';

export const events: Event[] = [
  {
    id: '1',
    userId: '1',
    name: 'Tech Enthusiasts',
    description:
      'Welcome to the Music Lovers event! 🎵❤️ This is a community for everyone who shares a passion for music. Whether you\'re into rock, pop, classical, or jazz, you\'ll find like-minded people here. Share your favorite songs, discuss new albums, and discover new artists',
    date: '2024-06-10T22:00:00.000Z',
    city: 'New York',
    street: 'Green bay',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    user: {
      id: '2',
      firstName: 'Johnny',
      lastName: 'Doe',
      age: 23,
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
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [
      {
        id: '3',
        firstName: 'Lena',
        lastName: 'Doe',
        age: 27,
        city: 'New York',
        dateOfBirth: '1996-06-10T22:00:00.000Z',
        imageUrl: '',
        backgroundUrl: '',
        description: 'Software Engineer passionate about building cool things',
        street: 'OGRO',
        country: 'USA',
        gender: 'female',
        email: 'test@test1.pl',
        password: 'password',
        settings: {
          isAdmin: false,
          isPrivate: true,
          isNotificationsEnabled: true,
          isStickyHeader: false,
          isActiveFriendsVisible: true,
        },
      },
      {
        id: '7',
        firstName: 'Sarah',
        lastName: 'Davis',
        age: 26,
        city: 'Oakland',
        dateOfBirth: '1998-07-10T00:00:00.000Z',
        imageUrl:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&dpr=2&q=80',
        backgroundUrl:
          'https://images.unsplash.com/photo-1528744598421-b7d5b5b2c6c8?w=300&dpr=2&q=80',
        description: 'Yoga Instructor and Wellness Coach',
        street: '',
        country: 'USA',
        gender: 'female',
        email: 'sarah@test.com',
        password: 'password',
        settings: {
          isPrivate: true,
          isAdmin: true,
          isNotificationsEnabled: true,
          isStickyHeader: true,
          isActiveFriendsVisible: false,
        },
      },
      {
        id: '3',
        firstName: 'Alice',
        lastName: 'Smith',
        age: 29,
        city: 'New York',
        dateOfBirth: '1994-04-12T00:00:00.000Z',
        imageUrl:
          'https://images.unsplash.com/photo-1533117459337-09c603d620d4?w=300&dpr=2&q=80',
        backgroundUrl:
          'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=300&dpr=2&q=80',
        description: 'Event Organizer with a passion for technology',
        street: '',
        country: 'USA',
        gender: 'female',
        email: 'alice@test.com',
        password: 'password',
        settings: {
          isPrivate: true,
          isAdmin: true,
          isNotificationsEnabled: true,
          isStickyHeader: true,
          isActiveFriendsVisible: false,
        },
      },
    ],
  },
  {
    id: '2',
    userId: '2',
    name: 'Hackathon',
    description: 'Join us for a 24-hour hackathon',
    date: '2024-07-01T09:00:00.000Z',
    city: 'New York',
    street: 'Broadway',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    user: {
      id: '3',
      firstName: 'Alice',
      lastName: 'Smith',
      age: 29,
      city: 'New York',
      dateOfBirth: '1994-04-12T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1533117459337-09c603d620d4?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=300&dpr=2&q=80',
      description: 'Event Organizer with a passion for technology',
      street: '',
      country: 'USA',
      gender: 'female',
      email: 'alice@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [
      {
        id: '3',
        firstName: 'Alice',
        lastName: 'Smith',
        age: 29,
        city: 'New York',
        dateOfBirth: '1994-04-12T00:00:00.000Z',
        imageUrl:
          'https://images.unsplash.com/photo-1533117459337-09c603d620d4?w=300&dpr=2&q=80',
        backgroundUrl:
          'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=300&dpr=2&q=80',
        description: 'Event Organizer with a passion for technology',
        street: '',
        country: 'USA',
        gender: 'female',
        email: 'alice@test.com',
        password: 'password',
        settings: {
          isPrivate: true,
          isAdmin: true,
          isNotificationsEnabled: true,
          isStickyHeader: true,
          isActiveFriendsVisible: false,
        },
      },
    ],
  },
  {
    id: '3',
    userId: '4',
    name: 'Meetup',
    description: 'Meet other developers in your area',
    date: '2024-08-21T18:00:00.000Z',
    city: 'San Francisco',
    street: 'Market Street',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    user: {
      id: '4',
      firstName: 'Bob',
      lastName: 'Johnson',
      age: 35,
      city: 'San Francisco',
      dateOfBirth: '1988-01-23T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&dpr=2&q=80',
      description: 'Full-Stack Developer and Meetup Organizer',
      street: '',
      country: 'USA',
      gender: 'male',
      email: 'bob@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [
      {
        id: '5',
        firstName: 'Emma',
        lastName: 'Williams',
        age: 31,
        city: 'Los Angeles',
        dateOfBirth: '1992-05-19T00:00:00.000Z',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&dpr=2&q=80',
        backgroundUrl:
          'https://images.unsplash.com/photo-1542178432-cc4c0cbbf0aa?w=300&dpr=2&q=80',
        description: 'Conference Coordinator and Tech Enthusiast',
        street: '',
        country: 'USA',
        gender: 'female',
        email: 'emma@test.com',
        password: 'password',
        settings: {
          isPrivate: true,
          isAdmin: true,
          isNotificationsEnabled: true,
          isStickyHeader: true,
          isActiveFriendsVisible: false,
        },
      },
    ],
  },
  {
    id: '4',
    userId: '5',
    name: 'Conference',
    description: 'Join us for a 3-day conference',
    date: '2024-09-23T09:00:00.000Z',
    city: 'Los Angeles',
    street: 'Sunset Boulevard',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    user: {
      id: '5',
      firstName: 'Emma',
      lastName: 'Williams',
      age: 31,
      city: 'Los Angeles',
      dateOfBirth: '1992-05-19T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1542178432-cc4c0cbbf0aa?w=300&dpr=2&q=80',
      description: 'Conference Coordinator and Tech Enthusiast',
      street: '',
      country: 'USA',
      gender: 'female',
      email: 'emma@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [
      {
        id: '5',
        firstName: 'Emma',
        lastName: 'Williams',
        age: 31,
        city: 'Los Angeles',
        dateOfBirth: '1992-05-19T00:00:00.000Z',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&dpr=2&q=80',
        backgroundUrl:
          'https://images.unsplash.com/photo-1542178432-cc4c0cbbf0aa?w=300&dpr=2&q=80',
        description: 'Conference Coordinator and Tech Enthusiast',
        street: '',
        country: 'USA',
        gender: 'female',
        email: 'emma@test.com',
        password: 'password',
        settings: {
          isPrivate: true,
          isAdmin: true,
          isNotificationsEnabled: true,
          isStickyHeader: true,
          isActiveFriendsVisible: false,
        },
      },
    ],
  },
  {
    id: '5',
    userId: '6',
    name: 'Mela Festival',
    description: 'Big festival in the city',
    date: '2024-10-15T10:00:00.000Z',
    city: 'New York',
    street: 'Central Park',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    user: {
      id: '6',
      firstName: 'Michael',
      lastName: 'Brown',
      age: 28,
      city: 'New York',
      dateOfBirth: '1995-03-15T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1532619187606-6273bb080ebe?w=300&dpr=2&q=80',
      description: 'Event Planner and Festival Enthusiast',
      street: '',
      country: 'USA',
      gender: 'male',
      email: 'michael@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [],
  },
  {
    id: '6',
    userId: '7',
    name: 'Sunrise Yoga',
    description: 'Start your day with a yoga session',
    date: '2024-09-10T06:00:00.000Z',
    city: 'Oakland',
    street: 'Lake Merritt',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    user: {
      id: '7',
      firstName: 'Sarah',
      lastName: 'Davis',
      age: 26,
      city: 'Oakland',
      dateOfBirth: '1998-07-10T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1528744598421-b7d5b5b2c6c8?w=300&dpr=2&q=80',
      description: 'Yoga Instructor and Wellness Coach',
      street: '',
      country: 'USA',
      gender: 'female',
      email: 'sarah@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [],
  },
  {
    id: '7',
    userId: '8',
    name: 'Public Speaking',
    description: 'Learn how to speak in public',
    date: '2024-08-05T14:00:00.000Z',
    city: 'New Jersey',
    street: 'Main Street',
    country: 'United States',
    imageUrl:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    user: {
      id: '8',
      firstName: 'David',
      lastName: 'Martinez',
      age: 34,
      city: 'New Jersey',
      dateOfBirth: '1990-11-10T00:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1502767089025-6572583495f4?w=300&dpr=2&q=80',
      backgroundUrl:
        'https://images.unsplash.com/photo-1538587880014-4c9c10f77d6d?w=300&dpr=2&q=80',
      description: 'Public Speaking Coach and Author',
      street: '',
      country: 'USA',
      gender: 'male',
      email: 'david@test.com',
      password: 'password',
      settings: {
        isPrivate: true,
        isAdmin: true,
        isNotificationsEnabled: true,
        isStickyHeader: true,
        isActiveFriendsVisible: false,
      },
    },
    users: [],
  },
];
