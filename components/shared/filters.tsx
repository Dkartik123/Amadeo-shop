"use client";

import { Category } from "@prisma/client";
import React from "react";
import { useFilters } from "../../hooks/useFilters";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

interface Props {
  className?: string;
  categories: Category[];
}

export const Filters: React.FC<Props> = ({ className, categories }) => {
  const filters = useFilters();

  const updatePrices = (prices: number[]) => {
    filters.updatePrices("priceFrom", prices[0]);
    filters.updatePrices("priceTo", prices[1]);
  };

  const handleCategoryChange = (values: string[]) => {
    const categoryIds = values.map(Number);
    filters.setSelectedCategories(categoryIds);
  };

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-6 font-bold" />

      <CheckboxFiltersGroup
        title="Riided"
        className="mb-5"
        items={categories.map((cat) => ({
          text: cat.name,
          value: String(cat.id),
        }))}
        onChange={handleCategoryChange}
        defaultValue={filters.selectedCategories.map(String)}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Hind kuni</p>
        <div className="flex gap-4">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.updatePrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={0}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.updatePrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <div className="mt-4">
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={[filters.prices.priceFrom, filters.prices.priceTo]}
            onValueChange={updatePrices}
          />
        </div>
      </div>

      <CheckboxFiltersGroup
        title="Suurus"
        className="mb-5"
        categories={categories}
        onFilterChange={filters.setSelectedCategories}
        items={[
          { text: "Beebiriided", value: "bee" },
          { text: "Lapsed", value: "laps" },
          { text: "Poisid", value: "pois" },
        ]}
      />
    </div>
  );
};
