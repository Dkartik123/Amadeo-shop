import { Product } from "@prisma/client";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};

export const getFilteredProducts = async (
  categoryIds: number[]
): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS, {
      params: { categories: categoryIds.join(",") },
    })
  ).data;
};

export const createProduct = async (productData: {
  name: string;
  price: number;
  size: number;
  description: string;
  imageUrl: string;
  categoryId: number;
}): Promise<Product> => {
  const response = await axiosInstance.post("/products", productData);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/products?id=${id}`);
};

export const createProducts = async (
  products: {
    name: string;
    price: number;
    size: number;
    description: string;
    imageUrl: string;
    categoryId: number;
  }[]
): Promise<Product[]> => {
  const response = await axiosInstance.post("/products/batch", products);
  return response.data;
};

export const updateProduct = async (
  id: number,
  updateData: {
    name?: string;
    price?: number;
    size?: number;
    description?: string;
    imageUrl?: string;
    categoryId?: number;
  }
): Promise<Product> => {
  const response = await axiosInstance.put("/products", {
    id,
    ...updateData,
  });
  return response.data;
};
