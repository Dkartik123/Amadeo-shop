import { create } from "zustand";

interface CategoryStore {
  activeId: number | null;
  setActiveId: (id: number) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));
