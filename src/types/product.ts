
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  onSale?: boolean;
  discount?: number;
  category: string;
}
