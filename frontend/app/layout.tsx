import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import { Chatbot } from "@/components/Chatbot";

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
  openGraph: {
    title: "Helicorp SmartWatch",
    description: "Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện từ Helicorp.",
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
