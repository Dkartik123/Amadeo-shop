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

  // Загрузка категорий при монтировании
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        console.log("Fetched categories:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Загрузка всех продуктов при монтировании
  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/products/filter");
        console.log("Initial products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching initial products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      fetchInitialProducts();
    }
  }, [categories]); // Загружаем продукты после получения категорий

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
        console.log("Filtered products response:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (categories.length > 0) {
        fetchFilteredProducts();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [prices.priceFrom, prices.priceTo, selectedCategories, categories]);

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
