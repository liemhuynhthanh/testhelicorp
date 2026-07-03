import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  favorites: string[]; // array of product IDs
  recentlyViewed: Product[];
  
  // Actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  addRecentlyViewed: (product: Product) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      favorites: [],
      recentlyViewed: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        })),

      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        })),

      addRecentlyViewed: (product) =>
        set((state) => {
          const filtered = state.recentlyViewed.filter((p) => p.id !== product.id);
          // Keep only last 5 items
          return {
            recentlyViewed: [product, ...filtered].slice(0, 5),
          };
        }),
    }),
    {
      name: 'corp-storage', // name of the item in the storage (must be unique)
    }
  )
);
