"use client";

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { useFilters } from "@/hooks/useFilters";
import { getFilteredProducts } from "@/services/products";
import { useEffect } from "react";

export default function Home() {
  const { categories, products, setProducts, loading } = useFilters();

  // Загрузка начальных продуктов
  useEffect(() => {
    const loadInitialProducts = async () => {
      const initialProducts = await getFilteredProducts([]);
      setProducts(initialProducts);
    };
    loadInitialProducts();
  }, []);

  // Группируем продукты по категориям
  const productsByCategory = products.reduce((acc, product) => {
    const categoryId = product.categoryId;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(product);
    return acc;
  }, {} as Record<number, typeof products>);

  return (
    <>
      <Container className="mt-10">
        <Title text="Riided" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters categories={categories} />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="flex flex-col gap-16">
                {categories.map((category) => (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={productsByCategory[category.id] || []}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
