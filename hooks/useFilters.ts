import { Category, Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { axiosInstance } from "../services/instance";

export const useFilters = () => {
  const [prices, setPrices] = useState({
    priceFrom: 0,
    priceTo: 1000,
  });
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const updatePrices = (type: "priceFrom" | "priceTo", value: number) => {
    setPrices((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // Получаем отфильтрованные продукты при изменении фильтров
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/products/filter", {
          params: {
            priceFrom: prices.priceFrom,
            priceTo: prices.priceTo,
            categories: selectedCategories.length
              ? selectedCategories.join(",")
              : undefined,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [prices.priceFrom, prices.priceTo, selectedCategories]);

  // Загрузка категорий при монтировании
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return {
    prices,
    updatePrices,
    selectedCategories,
    setSelectedCategories,
    selectedSizes,
    setSelectedSizes,
    products,
    setProducts,
    loading,
    categories,
  };
};
