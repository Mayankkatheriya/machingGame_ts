import { nanoid } from 'nanoid';

export interface Fruit {
  name: string;
  image: string;
  id: string;
}

export const fruitsData: Fruit[] = [
  {
    name: 'A',
    image: '/apple.png',
    id: nanoid(6),
  },
  {
    name: 'M',
    image: '/mango.png',
    id: nanoid(6),
  },
  {
    name: 'O',
    image: '/orange.png',
    id: nanoid(6),
  },
  {
    name: 'P',
    image: '/pineapple.png',
    id: nanoid(6),
  },
  {
    name: 'B',
    image: '/banana.png',
    id: nanoid(6),
  },
  {
    name: 'S',
    image: '/strawberry.png',
    id: nanoid(6),
  },
];