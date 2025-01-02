export interface Product {
  id: string;
  link: string;
  description: string;
  price: number;
  title: string;
  userId: number;
  category?: Category;
  niveau?: Level;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductState {
  product: Product;
  products: Product[];
  loading: boolean;
  error: string | null;
}

export enum Category {
  MATH = 'MATH',
  SCIENCE = 'SCIENCE',
}

export enum Level {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
  SIXTH = 'SIXTH',
}
