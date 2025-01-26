import { ImageRequireSource } from 'react-native';

export interface Product {
  id: number; // Уникальный идентификатор
  name: string; // Название продукта
  image: ImageRequireSource; // Описание продукта
  price: number; // Цена продукта
  category: string; // Категория
  description: string;
}

export const drinks: Product[] = [
  {
    id: 1,
    name: 'Ароматный кофе',
    image: require('../assets/drink-1/drink-1.png'),
    price: 15,
    category: 'Напитки',
    description: 'Эспрессо, американо, капучино, латте.',
  },
  {
    id: 2,
    name: 'Горячий шоколад',
    image: require('../assets/drink-2/drink-2.png'),
    price: 10,
    category: 'Напитки',
    description:
      'Классический горячий шоколад, подаваемый с взбитыми сливками и шоколадной стружкой.',
  },
  {
    id: 3,
    name: 'Фреш-напитки',
    image: require('../assets/drink-3/drink-2.png'),
    price: 10,
    category: 'Напитки',
    description: 'Свежевыжатые соки: апельсин, яблоко, грейпфрут.',
  },
  {
    id: 4,
    name: 'Матча латте',
    image: require('../assets/drink-4/drink-4.png'),
    price: 20,
    category: 'Напитки',
    description:
      'Японский зеленый чай матча с молоком и легким сладким сиропом.',
  },
];

export const fruitCakes: Product[] = [
  {
    id: 5,
    name: 'Торт "Лесная ягода"',
    description: 'Нежный бисквит с ягодами муссом и свежими ягодами.',
    price: 50,
    category: 'Фруктовые торты',
    image: require('../assets/frukt-1/frukt-1.png'),
  },
  {
    id: 6,
    name: 'Муссовый торт "Манго"',
    description: 'Лёгкий мусс с тропическими фруктами на бисквитной основе.',
    price: 40,
    category: 'Фруктовые торты',
    image: require('../assets/frukt-2/frukt-2.png'),
  },
  {
    id: 7,
    name: 'Торт "Павлова"',
    description: 'Воздушный безе с абрикосами и свежими ягодами.',
    price: 35,
    category: 'Фруктовые торты',
    image: require('../assets/frukt-3/frukt-3.png'),
  },
  {
    id: 8,
    name: 'Торт "Лимонный рай"',
    description: 'Лёгкое тесто с лимонным кремом и меренгой.',
    price: 45,
    category: 'Фруктовые торты',
    image: require('../assets/frukt-4/frukt-4.png'),
  },
];

export const classicCakes: Product[] = [
  {
    id: 9,
    name: 'Наполеон',
    description: 'Слоёный торт с нежным кремом и лёгкой кислинкой.',
    price: 20,
    category: 'Классические торты',
    image: require('../assets/tort-1/tort-1.png'),
  },
  {
    id: 10,
    name: 'Медовик',
    description: 'Многослойный медовый торт с кремом.',
    price: 20,
    category: 'Классические торты',
    image: require('../assets/tort-2/tort-2.png'),
  },
  {
    id: 11,
    name: 'Шоколадный торт',
    description: 'Глубокий шоколадный вкус с орехами и сливками.',
    price: 55,
    category: 'Классические торты',
    image: require('../assets/tort-3/tort-3.png'),
  },
  {
    id: 12,
    name: 'Тирамису',
    description: 'Итальянский десерт с маскарпоне.',
    price: 45,
    category: 'Классические торты',
    image: require('../assets/tort-3/tort-3.png'),
  },
];

export const desserts: Product[] = [
  {
    id: 13,
    name: 'Макарун',
    description: 'Разнообразие вкусов от клубники до солёной карамели.',
    price: 10,
    category: 'Десерты и сладости',
    image: require('../assets/desert-1/desert-1.png'),
  },
  {
    id: 14,
    name: 'Эклеры',
    description: 'Традиционные эклеры с шоколадным кремом.',
    price: 15,
    category: 'Десерты и сладости',
    image: require('../assets/desert-2/desert-2.png'),
  },
  {
    id: 15,
    name: 'Капкейки',
    description: 'Мини-тортики с различными вкусами.',
    price: 20,
    category: 'Десерты и сладости',
    image: require('../assets/desert-3/desert-3.png'),
  },
  {
    id: 16,
    name: 'Трюфели',
    description: 'Шоколадные трюфели с начинками.',
    price: 45,
    category: 'Десерты и сладости',
    image: require('../assets/desert-4/desert-4.png'),
  },
];
