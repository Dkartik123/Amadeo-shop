"use client";

import { useCategoryStore } from "@/components/shared/store/category";
import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const [categories, setCategories] = React.useState<Category[]>([]);

  // Загружаем реальные категории
  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    const targetId = name.toLowerCase().replace(/\s+/g, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ name, id }) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          onClick={(e) => handleClick(e, name)}
          key={id}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
