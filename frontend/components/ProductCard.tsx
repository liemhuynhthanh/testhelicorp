"use client";

import Image from "next/image";
import { type Product, useStore } from "@/lib/store";
import { FavoriteButton } from "./FavoriteButton";
import { toast } from "sonner";
import { useEffect } from "react";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, addRecentlyViewed } = useStore();

  useEffect(() => {
    // When component mounts (or becomes visible in viewport ideally), track it
    // For simplicity, we track it on hover in this component
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng`, {
      description: "Mở giỏ hàng để kiểm tra",
    });
  };

  const handleMouseEnter = () => {
    addRecentlyViewed(product);
  };

  return (
    <div 
      className="group relative rounded-3xl p-4 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 shadow-sm transition-all hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
      onMouseEnter={handleMouseEnter}
    >
      <div className="absolute top-6 right-6 z-10">
        <FavoriteButton productId={product.id} />
      </div>
      
      <div className="relative aspect-square w-full rounded-2xl bg-zinc-50 dark:bg-zinc-900 overflow-hidden mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-2">
        <h3 className="text-xl font-semibold text-black dark:text-white">{product.name}</h3>
        <p className="text-sm text-zinc-500 mt-1">{product.color}</p>
        
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
          <button
            onClick={handleAddToCart}
            className="h-10 px-6 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm transition-transform active:scale-95 hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}
