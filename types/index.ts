export interface Product {
  id: number;
  name: string;
  price: number;
  size: number;
  description: string;
  imageUrl: string | null;
  categoryId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  season?: string | null;
  category?: {
    id: number;
    name: string;
  };
}
