import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { LazyChatbot } from "@/components/LazyChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corp SmartWatch | Đồng hồ thông minh AI hàng đầu",
  description: "Corp SmartWatch - Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện. Thiết kế Titanium sang trọng, màn hình AMOLED, pin 7 ngày, ECG & GPS tích hợp.",
  keywords: ["Đồng hồ thông minh", "SmartWatch", "Corp", "Đồng hồ AI", "Theo dõi sức khỏe", "SmartWatch Titanium"],
  authors: [{ name: "Corp" }],
  openGraph: {
    title: "Corp SmartWatch | Đồng hồ thông minh AI",
    description: "Khám phá Corp SmartWatch - Sự kết hợp hoàn hảo giữa thiết kế cơ học tinh xảo và AI giám sát sức khỏe 24/7.",
    type: "website",
    locale: "vi_VN",
    siteName: "Corp SmartWatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corp SmartWatch | Đồng hồ thông minh AI",
    description: "Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện từ Corp.",
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
          <LazyChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
