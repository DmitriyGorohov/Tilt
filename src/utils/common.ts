import Screens from '../navigation/consts/screens.ts';
import { ImageRequireSource } from 'react-native';

export const tintMainList = [
  { id: 1, value: 'ГЛАВНАЯ', screen: Screens.MENU },
  { id: 2, value: 'КОРЗИНА', screen: Screens.BASKET },
  { id: 3, value: 'ТРАНСЛЯЦИИ', screen: Screens.BROADCAST },
  { id: 4, value: 'КОНТАКТЫ', screen: Screens.CONTACTS },
  { id: 5, value: 'РЕЗЕРВ СТОЛИКА', screen: Screens.RESERVE },
  { id: 6, value: 'СОБЫТИЯ', screen: Screens.EVENTS },
];

export const tintEventsList = [
  { id: 1, value: 'Мастер-класс' },
  { id: 2, value: 'Вечер поэзии и десертов ' },
  { id: 3, value: 'Вкусный уикенд' },
  { id: 4, value: 'Угощения' },
  { id: 5, value: 'В мире футбола' },
];

export interface Burger {
  id: number; // Уникальный идентификатор
  name: string; // Название бургера
  description: string; // Описание бургера
  price: number; // Единственная цена
  images?: ImageRequireSource;
}

export const burgers: Burger[] = [
  {
    id: 1,
    name: 'Классический Чизбургер',
    description:
      'Бургер с Беконом. Перевод: Сверхзадняя, луч, консервы, решетка',
    price: 205,
    images: require('../assets/tint/burger-1/burger-1.png'),
  },
  {
    id: 2,
    name: 'Чименбургер',
    description: 'Спайсы Чили. Запись: Бургер и Сверхзадняя, суда, решетка',
    price: 255,
    images: require('../assets/tint/burger-2/burger-2.png'),
  },
  {
    id: 3,
    name: 'Воготряженский Бургер',
    description:
      'Бургер с Рыбной Коллегой. Запись: Бургер и Сверхзадняя, суда, решетка',
    price: 455,
    images: require('../assets/tint/burger-3/burger-3.png'),
  },
  {
    id: 4,
    name: 'Бургер Барабенок',
    description: 'График Барабенок, входный на 0.05',
    price: 355,
    images: require('../assets/tint/burger-4/burger-4.png'),
  },
  {
    id: 5,
    name: 'Грибной Бургер',
    description: 'Обратная работа: как раз изготовлено, специально',
    price: 305,
    images: require('../assets/tint/burger-5/burger-5.png'),
  },
  {
    id: 6,
    name: 'Бургер с Двойной Коллегой',
    description: 'Два красных куртки: далее на 0.05',
    price: 435,
    images: require('../assets/tint/burger-6/burger-6.png'),
  },
  {
    id: 7,
    name: 'Калифорнийский Бургер',
    description: 'Перевод: Другое другое, летописно, без записи',
    price: 455,
    images: require('../assets/tint/burger-7/burger-7.png'),
  },
  {
    id: 8,
    name: 'Бургер с Яйцом',
    description: 'Перевод: Другое, летописно, без записи',
    price: 205,
    images: require('../assets/tint/burger-8/burger-8.png'),
  },
  {
    id: 9,
    name: 'Гавайский Бургер',
    description: 'Перевод: Другое, летописно, без записи',
    price: 205,
    images: require('../assets/tint/burger-9/burger-9.png'),
  },
  {
    id: 10,
    name: 'Текс-Мекс Бургер',
    description: 'Перевод: Другое, летописно, без записи',
    price: 355,
    images: require('../assets/tint/burger-10/burger-10.png'),
  },
  {
    id: 11,
    name: 'Сырный Бургер',
    description: 'Перевод: Другое, летописно, без записи',
    price: 305,
    images: require('../assets/tint/burger-11/burger-11.png'),
  },
  {
    id: 12,
    name: 'Елю Чиз Бургер',
    description: 'Здесь: доброта, лучшее',
    price: 205,
    images: require('../assets/tint/burger-12/burger-12.png'),
  },
  {
    id: 13,
    name: 'Бургер с Лососем',
    description: 'Перевод: Другое, летописно, без записи',
    price: 455,
    images: require('../assets/tint/burger-13/burger-13.png'),
  },
  {
    id: 14,
    name: 'Портфруктус Бургер',
    description: 'Суду с бургером, сами, летопись, если бы не',
    price: 155,
    images: require('../assets/tint/burger-14/burger-14.png'),
  },
];
