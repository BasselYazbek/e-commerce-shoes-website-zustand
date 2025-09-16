import { create } from "zustand";

export const globalState = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  selectedBrand: "",
  setSelectedBrand: (query: string) => set({ selectedBrand: query }),
  selectedColor: "",
  setSelectedColor: (query: string) => set({ selectedColor: query }),
  selectedSize: "",
  setSelectedSize: (query: number) => set({ selectedSize: query }),
  minPrice: 0,
  setMinPrice: (query: number) => set({ minPrice: query }),
  maxPrice: 200,
  setMaxPrice: (query: number) => set({ maxPrice: query }),
  sortOption: "",
  setSortOption: (query: string) => set({ sortOption: query }),
  showFilter: "",
  setShowFilter: (query: boolean) => set({ showFilter: query }),
  favorites: [],
  toggleFavorite: (item) =>
    set((state) => {
      const exists = state.favorites.find((fav) => fav.id === item.id);
      return {
        favorites: exists
          ? state.favorites.filter((fav) => fav.id !== item.id)
          : [...state.favorites, item],
      };
    }),
}));
