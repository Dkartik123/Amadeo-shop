import { Product } from "@/types";

export interface SearchParams {
  query?: string;
  sortBy?: string;
  priceFrom?: string;
  priceTo?: string;
  categoryId?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findProduct = (
  products: Product[],
  id: number
): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const findProductsByCategory = (
  products: Product[],
  categoryId: number
): Product[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

export const findProductsByPriceRange = (
  products: Product[],
  minPrice: number = DEFAULT_MIN_PRICE,
  maxPrice: number = DEFAULT_MAX_PRICE
): Product[] => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

export const findProductsBySearch = (
  products: Product[],
  searchQuery: string
): Product[] => {
  const query = searchQuery.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );
};
