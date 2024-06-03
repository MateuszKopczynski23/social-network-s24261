export interface Event {
  name: string;
  description: string;
  image: string;
  date: string;
  city: string;
}

export const userEvents: Event[] = [
  {
    name: 'Hackathon',
    description: 'Join us for a 24-hour hackathon',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    date: 'Jan 1, 2022',
    city: 'New York',
  },
  {
    name: 'Meetup',
    description: 'Meet other developers in your area',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    date: 'Dec 21, 2022',
    city: 'San Francisco',
  },
  {
    name: 'Conference',
    description: 'Join us for a 3-day conference',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    date: 'Nov 23, 2022',
    city: 'Los Angeles',
  },
  {
    name: 'Mela Festival',
    description: 'Big festival in the city',
    image:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
    date: 'Oct 15, 2022',
    city: 'New York',
  },
  {
    name: 'Sunrise Yoga',
    description: 'Start your day with a yoga session',
    image:
      'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    date: 'Sep 10, 2022',
    city: 'Okland',
  },
  {
    name: 'Public Speaking',
    description: 'Learn how to speak in public',
    image:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    date: 'Aug 5, 2022',
    city: 'New Jersey',
  },
];

export const newEvents: Event[] = [...userEvents, ...userEvents, ...userEvents];
