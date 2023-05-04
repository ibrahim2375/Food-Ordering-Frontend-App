import { Food } from "./app/shared/models/Food"; 
import { Tag } from "./app/shared/models/Tag";

export const sample_foods:Food[] = [
 {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    views:50,
    imageUrl: 'food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    views:40,
    imageUrl: 'food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    views:50,
    imageUrl: 'food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    views:10,
    imageUrl: 'food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    views:15,
    imageUrl: 'food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    views:90,
    imageUrl: 'food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]

export const sample_craving_food:any[] = [
  {
    title: 'Community Favorites',
    image: '/assets/craving/craving-1.jpg',
    bg:'#d4ffdb',
    link:'/'
  },
  {
    title: 'International Eats',
    image: '/assets/craving/craving-2.jpg',
    bg:'#f7f3e5',
    link:'/'
  },
  {
    title: 'Easter',
    image: '/assets/craving/craving-3.jpg',
    bg:'#f5cfdd',
    link:'/'
  }
]