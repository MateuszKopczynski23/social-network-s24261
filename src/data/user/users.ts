import { User } from '@/interfaces/user';

export const users: User[] = [
  {
    id: '1',
    firstName: 'Johnny',
    lastName: 'Doe',
    age: 23,
    city: 'New York',
    dateOfBirth: '1999-10-21T00:00:00.000Z',
    imageUrl:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  },
  {
    id: '2',
    firstName: 'Alice',
    lastName: 'Smith',
    age: 25,
    city: 'Los Angeles',
    dateOfBirth: '1998-08-15T00:00:00.000Z',
    imageUrl:
      'https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    backgroundUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&dpr=2&q=80',
    description:
      'UX Designer passionate about creating intuitive user experiences',
    street: '',
    country: 'USA',
    gender: 'female',
    email: 'alice.smith@example.com',
    password: 'password',
    settings: {
      isAdmin: false,
      isPrivate: true,
      isNotificationsEnabled: true,
      isStickyHeader: true,
      isActiveFriendsVisible: false,
    },
  },
  {
    id: '3',
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 30,
    city: 'Chicago',
    dateOfBirth: '1994-05-10T00:00:00.000Z',
    imageUrl:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    backgroundUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&dpr=2&q=80',
    description: 'Data Scientist with a passion for analyzing big data sets',
    street: '',
    country: 'USA',
    gender: 'male',
    email: 'bob.johnson@example.com',
    password: 'password',
    settings: {
      isAdmin: false,
      isPrivate: true,
      isNotificationsEnabled: true,
      isStickyHeader: true,
      isActiveFriendsVisible: false,
    },
  },
  {
    id: '4',
    firstName: 'Emma',
    lastName: 'Williams',
    age: 28,
    city: 'San Francisco',
    dateOfBirth: '1996-12-01T00:00:00.000Z',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    backgroundUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&dpr=2&q=80',
    description:
      'Frontend Developer who loves creating responsive web applications',
    street: '',
    country: 'USA',
    gender: 'female',
    email: 'emma.williams@example.com',
    password: 'password',
    settings: {
      isAdmin: false,
      isPrivate: true,
      isNotificationsEnabled: true,
      isStickyHeader: true,
      isActiveFriendsVisible: false,
    },
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Brown',
    age: 26,
    city: 'Seattle',
    dateOfBirth: '1997-09-20T00:00:00.000Z',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&dpr=2&q=80',
    backgroundUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&dpr=2&q=80',
    description: 'Full Stack Developer with a focus on backend technologies',
    street: '',
    country: 'USA',
    gender: 'male',
    email: 'david.brown@example.com',
    password: 'password',
    settings: {
      isAdmin: false,
      isPrivate: true,
      isNotificationsEnabled: true,
      isStickyHeader: true,
      isActiveFriendsVisible: false,
    },
  },
];
