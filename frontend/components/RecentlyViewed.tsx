"use client";

import { useStore } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RecentlyViewed() {
  const recentlyViewed = useStore((state) => state.recentlyViewed);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || recentlyViewed.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-8">
        Sản phẩm bạn vừa xem
      </h3>
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        <AnimatePresence>
          {recentlyViewed.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 w-[280px] snap-start flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 flex-shrink-0">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-sm line-clamp-1 text-black dark:text-white">{product.name}</h4>
                <p className="text-xs text-zinc-500 mt-1">${product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
