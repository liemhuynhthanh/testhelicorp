"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CartDrawer } from "@/components/CartDrawer";

const RegistrationForm = dynamic(() => import("@/components/RegistrationForm"), {
  ssr: false,
  loading: () => <div className="h-64 w-full bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-2xl"></div>
});

const ProductsSection = dynamic(() => import("@/components/ProductsSection").then(m => m.ProductsSection), {
  ssr: true, // we still want SEO for products
});

const FEATURES = [
  {
    title: "Mặt kính Sapphire",
    desc: "Chống xước tuyệt đối, hiển thị sắc nét dưới mọi góc nhìn, kể cả trong điều kiện ánh sáng gắt nhất.",
    img: "/1.webp"
  },
  {
    title: "Cảm biến sinh học AI",
    desc: "Theo dõi liên tục nhịp tim, nồng độ oxy trong máu và mức độ căng thẳng với độ chính xác chuẩn y tế.",
    img: "/2.webp"
  },
  {
    title: "Phân tích giấc ngủ",
    desc: "Tự động nhận diện các chu kỳ giấc ngủ và đưa ra gợi ý cải thiện để bạn thức dậy đầy năng lượng.",
    img: "/3.webp"
  },
  {
    title: "Chế tác tinh xảo",
    desc: "Khung viền Titanium nguyên khối siêu bền, mang lại cảm giác đeo thoải mái suốt ngày dài.",
    img: "/4.webp"
  },
  {
    title: "Kết nối liền mạch",
    desc: "Đồng bộ thông báo, cuộc gọi và dữ liệu sức khỏe tức thì với điện thoại thông minh của bạn.",
    img: "/5.webp"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });

  const yMasonry1 = useTransform(showcaseProgress, [0, 1], ["0%", "-20%"]);
  const yMasonry2 = useTransform(showcaseProgress, [0, 1], ["10%", "-40%"]);
  const yMasonry3 = useTransform(showcaseProgress, [0, 1], ["-10%", "-10%"]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-500">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-black dark:text-white">CORP</div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#scrollytelling" className="hover:text-black dark:hover:text-white transition-colors">Trải nghiệm</a>
            <a href="#showcase" className="hover:text-black dark:hover:text-white transition-colors">Thiết kế</a>
            <a href="#specs" className="hover:text-black dark:hover:text-white transition-colors">Thông số</a>
            <a href="#products" className="hover:text-black dark:hover:text-white transition-colors">Sản phẩm</a>
            <a href="#register" className="hover:text-black dark:hover:text-white transition-colors">Đặt trước</a>
          </nav>
          <div className="flex items-center gap-4 ml-8">
            <ThemeToggle />
            <CartDrawer />
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO PARALLAX ─── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Background image parallax */}
          <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
            <Image
              src="/1.webp"
              alt="Corp SmartWatch Hero"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={60}
              className="object-cover object-center opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black"></div>
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Kỷ nguyên mới của SmartWatch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white mb-6"
            >
              Vượt qua <br /> giới hạn.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Đồng hồ thông minh kết hợp thiết kế cơ học tinh xảo cùng AI giám sát sức khỏe chuyên sâu 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center"
            >
              <a href="#register" className="h-14 px-10 rounded-full bg-white text-black font-semibold text-base flex items-center transition-transform hover:scale-105 hover:shadow-xl hover:shadow-white/20">
                Đặt trước ngay
              </a>
            </motion.div>
          </div>
        </section>

        {/* ─── SCROLLYTELLING: TÍNH NĂNG ─── */}
        <section id="scrollytelling" className="relative bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Tuyệt tác trên cổ tay.</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Từng chi tiết được chế tác tỉ mỉ với chất liệu Titanium hàng không, mang đến độ bền vô song cùng vẻ đẹp vượt thời gian.</p>
            </div>

            {/* Desktop Sticky Scroll */}
            <div className="hidden md:flex flex-row gap-12 relative items-start">
              <div className="w-1/3 sticky top-32 space-y-32 py-12 z-10">
                {FEATURES.map((feat, i) => (
                  <div key={i}>
                    <h3 className="text-3xl font-bold text-white mb-4">{feat.title}</h3>
                    <p className="text-zinc-400 text-lg">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="w-2/3 space-y-12">
                {FEATURES.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[60vh] rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <Image src={feat.img} alt={feat.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl z-10 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Interleaved Cards */}
            <div className="flex md:hidden flex-col gap-16">
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feat.title}</h3>
                    <p className="text-zinc-400 text-base">{feat.desc}</p>
                  </div>
                  <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden shadow-2xl">
                    <Image src={feat.img} alt={feat.title} fill sizes="(min-width: 768px) 100vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SHOWCASE PARALLAX GALLERY ─── */}
        <section id="showcase" ref={showcaseRef} className="py-32 bg-white dark:bg-zinc-50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">Đậm chất riêng.</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Bộ sưu tập dây đeo đa dạng, từ da thật cổ điển đến silicone thể thao, biến hóa phong cách trong tích tắc.</p>
          </div>

          <div className="flex gap-4 md:gap-8 max-w-350 mx-auto px-4 h-[80vh] md:h-screen">
            <motion.div style={{ y: yMasonry1 }} className="flex-1 flex flex-col gap-4 md:gap-8 pt-10">
              <div className="relative w-full h-[40%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/5.webp" alt="Gallery 5" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="relative w-full h-[60%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/6.webp" alt="Gallery 6" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            </motion.div>

            <motion.div style={{ y: yMasonry2 }} className="flex-1 flex flex-col gap-4 md:gap-8">
              <div className="relative w-full h-[55%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/7.webp" alt="Gallery 7" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="relative w-full h-[45%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/8.webp" alt="Gallery 8" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            </motion.div>

            <motion.div style={{ y: yMasonry3 }} className="flex-1 flex flex-col gap-4 md:gap-8 pt-20">
              <div className="relative w-full h-[50%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/9.webp" alt="Gallery 9" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="relative w-full h-[50%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/10.webp" alt="Gallery 10" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FULL WIDTH PARALLAX ─── */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-black">
            <Image
              src="/11.webp"
              alt="Premium Design"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-60"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
            >
              Vẻ đẹp không thỏa hiệp.
            </motion.h2>
          </div>
        </section>

        {/* ─── SPECS ─── */}
        <section id="specs" className="py-32 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Sức mạnh tiềm ẩn.</h2>
              <p className="text-xl text-zinc-400">Hiệu năng vượt trội nằm gọn trong lớp vỏ tinh xảo.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-zinc-900 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
                <Image src="/12.webp" alt="Specs visualization" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>

              <div className="space-y-6">
                {[
                  { label: "Màn hình", value: "AMOLED LTPO 1.9\", 2000 nits" },
                  { label: "Vật liệu", value: "Titanium Grade 5 & Sapphire" },
                  { label: "Thời lượng pin", value: "7 ngày ở chế độ Smart, 30 ngày cơ bản" },
                  { label: "Chống nước", value: "10ATM (Phù hợp lặn sâu 100m)" },
                  { label: "Chip xử lý", value: "Corp S1 Dual-core AI" },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-zinc-800"
                  >
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">{row.label}</span>
                    <span className="text-lg font-medium text-white mt-1 sm:mt-0">{row.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRODUCTS ─── */}
        <ProductsSection />

        {/* ─── REGISTRATION ─── */}
        <section id="register" className="py-32 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
                Đặt trước.<br />Dẫn đầu xu hướng.
              </h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 max-w-md leading-relaxed">
                Trở thành những người đầu tiên sở hữu Corp SmartWatch. Nhận đặc quyền ưu đãi 20% và tham gia cộng đồng Beta Tester.
              </p>
              <ul className="space-y-4">
                {[
                  "Thông báo sớm nhất khi mở bán",
                  "Voucher 20% dành riêng khách hàng đặt trước",
                  "Tặng kèm 1 dây đeo thể thao cao cấp",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-950 p-8 md:p-12 rounded-4xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5 dark:shadow-white/5">
              <RegistrationForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="font-bold text-white text-lg tracking-tighter">CORP</div>
          <p>© 2026 Corp. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
