"use client";

import { Heart } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  productId: string;
  className?: string;
}

export function FavoriteButton({ productId, className }: FavoriteButtonProps) {
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore((state) => state.favorites.includes(productId));

  return (
    <button
      onClick={() => toggleFavorite(productId)}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all active:scale-95",
        isFavorite ? "text-red-500" : "text-white/70 hover:text-white",
        className
      )}
      aria-label="Toggle favorite"
    >
      <Heart
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isFavorite ? "fill-red-500 scale-110" : "scale-100"
        )}
      />
    </button>
  );
}
