import { useFilters } from "../../hooks/useFilters";
import { Filters } from "../shared/filters";

export const ProductsPage = () => {
  const { products, loading, categories } = useFilters();

  return (
    <div className="flex gap-4">
      <aside className="w-64">
        <Filters categories={categories} />
      </aside>
      <main className="flex-1">
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => <div key={product.id}>{product.name}</div>)
        )}
      </main>
    </div>
  );
};
