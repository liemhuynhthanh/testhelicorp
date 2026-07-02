import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot").then((mod) => mod.Chatbot), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helicorp SmartWatch | Đồng hồ thông minh AI hàng đầu",
  description: "Helicorp SmartWatch - Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện. Thiết kế Titanium sang trọng, màn hình AMOLED, pin 7 ngày, ECG & GPS tích hợp.",
  keywords: ["Đồng hồ thông minh", "SmartWatch", "Helicorp", "Đồng hồ AI", "Theo dõi sức khỏe", "SmartWatch Titanium"],
  authors: [{ name: "Helicorp" }],
  openGraph: {
    title: "Helicorp SmartWatch | Đồng hồ thông minh AI",
    description: "Khám phá Helicorp SmartWatch - Sự kết hợp hoàn hảo giữa thiết kế cơ học tinh xảo và AI giám sát sức khỏe 24/7.",
    type: "website",
    locale: "vi_VN",
    siteName: "Helicorp SmartWatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helicorp SmartWatch | Đồng hồ thông minh AI",
    description: "Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện từ Helicorp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <Toaster />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
