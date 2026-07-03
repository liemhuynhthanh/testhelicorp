"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";
import { RecentlyViewed } from "./RecentlyViewed";
import { type Product } from "@/lib/store";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "hw-titanium-silver",
    name: "Corp SmartWatch Silver",
    price: 999,
    image: "/2.jpg",
    color: "Titanium Silver"
  },
  {
    id: "hw-titanium-black",
    name: "Corp SmartWatch Black",
    price: 1099,
    image: "/8.jpg",
    color: "Titanium Black"
  },
  {
    id: "hw-titanium-gold",
    name: "Corp SmartWatch Gold",
    price: 1199,
    image: "/10.jpg",
    color: "Titanium Gold"
  }
];

export function ProductsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay to show Skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-32 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">
            Lựa chọn phong cách.
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Khẳng định dấu ấn cá nhân với 3 phiên bản màu sắc độc bản được chế tác từ Titanium nguyên khối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : MOCK_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>

        <RecentlyViewed />
      </div>
    </section>
  );
}
