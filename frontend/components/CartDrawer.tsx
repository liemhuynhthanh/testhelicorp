"use client";

import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useStore } from "@/lib/store";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[101] flex w-full flex-col bg-white dark:bg-zinc-950 sm:w-[400px] border-l border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-900">
              <h2 className="text-xl font-bold tracking-tight text-black dark:text-white">Giỏ hàng ({itemCount})</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-black dark:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {!mounted || cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-500 dark:text-zinc-400 space-y-4">
                  <ShoppingBag className="h-12 w-12 opacity-20" />
                  <p>Giỏ hàng của bạn đang trống</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-zinc-50 dark:bg-zinc-900 p-4 rounded-2xl">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate text-black dark:text-white">{item.name}</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{item.color}</p>
                      <p className="font-bold mt-2 text-black dark:text-white">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full p-1 text-black dark:text-white">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {mounted && cart.length > 0 && (
              <div className="p-6 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zinc-500 dark:text-zinc-400">Tạm tính</span>
                  <span className="text-xl font-bold text-black dark:text-white">${subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full h-14 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-base transition-transform hover:scale-[1.02]">
                  Thanh toán
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
        {mounted && itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white text-[10px] font-bold text-white dark:text-black">
            {itemCount}
          </span>
        )}
      </button>

      {mounted && createPortal(drawerContent, document.body)}
    </>
  );
}
