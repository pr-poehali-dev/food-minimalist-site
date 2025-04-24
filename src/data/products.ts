
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Фирменная пицца с сыром",
    price: 250,
    image: "/placeholder.svg",
    description: "Вкусная пицца с томатным соусом и моцареллой",
    category: "Пицца",
  },
  {
    id: 2,
    name: "Двойной бургер с говядиной",
    price: 200,
    image: "/placeholder.svg",
    description: "Сочный бургер с двойной говяжьей котлетой и соусом",
    category: "Бургеры",
  },
  {
    id: 3,
    name: "Картофель фри",
    price: 100,
    image: "/placeholder.svg",
    description: "Хрустящий картофель фри с солью",
    category: "Закуски",
  },
  {
    id: 4,
    name: "Цезарь с курицей",
    price: 200,
    image: "/placeholder.svg",
    description: "Классический салат с куриной грудкой и соусом Цезарь",
    category: "Салаты",
    onSale: true,
    discount: 50,
  },
  {
    id: 5,
    name: "Кока-кола 0.5л",
    price: 100,
    image: "/placeholder.svg",
    description: "Прохладительный газированный напиток",
    category: "Напитки",
  },
  {
    id: 6,
    name: "Роллы с лососем",
    price: 250,
    image: "/placeholder.svg",
    description: "Нежные роллы с свежим лососем и сливочным сыром",
    category: "Суши",
    onSale: true,
    discount: 50,
  },
  {
    id: 7,
    name: "Куриные наггетсы",
    price: 100,
    image: "/placeholder.svg",
    description: "Сочные куриные наггетсы в хрустящей панировке",
    category: "Закуски",
  },
  {
    id: 8,
    name: "Греческий салат",
    price: 200,
    image: "/placeholder.svg",
    description: "Свежий салат с оливками, сыром фета и заправкой",
    category: "Салаты",
  },
  {
    id: 9,
    name: "Шоколадный молочный коктейль",
    price: 100,
    image: "/placeholder.svg",
    description: "Вкусный коктейль с мороженым и шоколадным сиропом",
    category: "Напитки",
    onSale: true,
    discount: 20,
  },
  {
    id: 10,
    name: "Пепперони пицца",
    price: 250,
    image: "/placeholder.svg",
    description: "Острая пицца с колбасой пепперони и сыром",
    category: "Пицца",
  },
];

export const getSaleProducts = () => {
  return products.filter(product => product.onSale);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getCategories = () => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
