import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helicorp Smart Ring | Công nghệ sức khỏe tương lai",
  description: "Thiết bị theo dõi sức khỏe thông minh tích hợp AI hàng đầu từ Helicorp. Theo dõi giấc ngủ, nhịp tim và phân tích dữ liệu cá nhân hóa.",
  openGraph: {
    title: "Helicorp Smart Ring",
    description: "Thiết bị theo dõi sức khỏe thông minh tích hợp AI hàng đầu từ Helicorp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
