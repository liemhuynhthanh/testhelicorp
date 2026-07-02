import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bỏ rewrite đi để Next.js sử dụng API route ở thư mục app/api
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:8080/api/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
