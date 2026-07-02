"use client";

import { cn } from "@/lib/utils";

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl p-4 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 shadow-sm", className)}>
      <div className="relative aspect-square w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-6">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
      </div>
      <div className="space-y-3">
        <div className="h-5 w-2/3 rounded-md bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
        </div>
        <div className="h-4 w-1/3 rounded-md bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
        </div>
        <div className="pt-4 flex justify-between items-center">
          <div className="h-6 w-1/4 rounded-md bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
          </div>
          <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
