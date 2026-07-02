"use client";

import dynamic from "next/dynamic";

export const LazyChatbot = dynamic(
  () => import("./Chatbot").then((mod) => mod.Chatbot),
  { ssr: false }
);
