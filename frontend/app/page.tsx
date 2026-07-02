import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-black">HELICORP</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-black transition-colors">Tính năng</a>
            <a href="#showcase" className="hover:text-black transition-colors">Thiết kế</a>
            <a href="#specs" className="hover:text-black transition-colors">Thông số</a>
            <a href="#register" className="hover:text-black transition-colors">Đặt trước</a>
          </nav>
        </div>
      </header>

      <main>

        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f7]">
          {/* Background image full bleed */}
          <div className="absolute inset-0">
            <Image
              src="/1.jpg"
              alt="Helicorp SmartWatch Hero"
              fill
              priority
              className="object-cover object-center opacity-30 scale-110 rounded-2xl"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#f5f5f7]/60 via-[#f5f5f7]/40 to-[#f5f5f7]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="flex flex-col gap-7">
              <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-700"></span>
                </span>
                Helicorp SmartWatch — Ra mắt 2026
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none  text-black">
                Sức khỏe<br />trên cổ tay.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-md leading-relaxed">
                Đồng hồ thông minh tích hợp AI theo dõi sức khỏe toàn diện. Thiết kế Titanium sang trọng, màn hình AMOLED sắc nét và pin lên đến 7 ngày.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#register" className="h-14 px-8 rounded-full bg-black text-white font-semibold text-base flex items-center transition-transform hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                  Đặt trước ngay
                </a>
                <a href="#features" className="h-14 px-8 rounded-full border border-zinc-300 text-black font-semibold text-base flex items-center hover:bg-zinc-50 transition-colors">
                  Khám phá tính năng
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative flex justify-center">
              <div className="relative w-85 h-105 md:w-105 md:h-130 rounded-4xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/1.jpg"
                  alt="Helicorp SmartWatch"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section id="features" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">Tính năng nổi bật</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black max-w-2xl leading-[1.05]">
                Mọi chỉ số.<br />Mọi lúc. Mọi nơi.
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Feature 1 — Sleep (ảnh 3) */}
              <div className="relative rounded-4xl overflow-hidden bg-zinc-950 min-h-115 flex flex-col justify-end group">
                <Image src="/3.jpg" alt="Theo dõi giấc ngủ" fill className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative z-10 p-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Giấc ngủ AI</div>
                  <h3 className="text-3xl font-bold text-white mb-3">Điểm giấc ngủ<br />mỗi sáng thức dậy</h3>
                  <p className="text-white/70 max-w-sm">Phân tích chính xác từng giai đoạn giấc ngủ. Đánh giá & gợi ý cải thiện cá nhân hóa.</p>
                </div>
              </div>

              {/* Feature 2 — Health Alert (ảnh 4) */}
              <div className="relative rounded-4xl overflow-hidden bg-zinc-950 min-h-115 flex flex-col justify-end group">
                <Image src="/4.jpg" alt="Theo dõi sức khỏe" fill className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative z-10 p-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Sức khỏe tim mạch</div>
                  <h3 className="text-3xl font-bold text-white mb-3">Cảnh báo huyết áp<br />tức thì</h3>
                  <p className="text-white/70 max-w-sm">Phát hiện và cảnh báo các bất thường về huyết áp và nhịp tim ngay trên cổ tay bạn.</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { num: "20+", label: "Chỉ số sức khỏe", sub: "SpO2, nhiệt độ, căng thẳng…", dark: true },
                  { num: "7", label: "Ngày pin", sub: "Sạc không dây, luôn sẵn sàng", dark: false },
                  { num: "5ATM", label: "Kháng nước", sub: "Thoải mái bơi lội tới 50m", dark: false },
                  { num: "24/7", label: "Theo dõi ECG", sub: "Chuẩn y tế, cảnh báo rung nhĩ", dark: true },
                ].map((s, i) => (
                  <div key={i} className={`rounded-[1.75rem] p-8 flex flex-col justify-between min-h-50 ${s.dark ? "bg-zinc-950 text-white" : "bg-zinc-50 border border-zinc-100 text-black"}`}>
                    <div className={`text-5xl font-bold mb-3 ${s.dark ? "text-white" : "text-black"}`}>{s.num}</div>
                    <div>
                      <div className="font-semibold mb-1">{s.label}</div>
                      <div className={`text-sm ${s.dark ? "text-zinc-400" : "text-zinc-500"}`}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── SHOWCASE ─── */}
        <section id="showcase" className="py-24 md:py-32 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">Thiết kế vượt thời gian.</h2>
              <p className="text-xl text-zinc-500">Chế tác từ nhôm và Titanium cao cấp. Tinh xảo trong từng đường nét.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lifestyle image lớn */}
              <div className="md:col-span-2 relative rounded-4xl overflow-hidden min-h-125 group shadow-sm border border-zinc-100">
                <Image src="/5.jpg" alt="Lifestyle" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-2">Đồng hành mọi khoảnh khắc</h3>
                  <p className="text-white/80 max-w-sm">Nhẹ nhàng trên cổ tay, mạnh mẽ trong từng chỉ số.</p>
                </div>
              </div>

              {/* Two small images stacked */}
              <div className="flex flex-col gap-6">
                <div className="relative rounded-4xl overflow-hidden min-h-58.75 group shadow-sm border border-zinc-100">
                  <Image src="/1.jpg" alt="Detail" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="relative rounded-4xl overflow-hidden min-h-58.75 group shadow-sm border border-zinc-100">
                  <Image src="/2.jpg" alt="Side View" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SPECS ─── */}
        <section id="specs" className="py-32 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">Thông số kỹ thuật.</h2>
              <p className="text-xl text-zinc-500">Chi tiết nhỏ làm nên sự khác biệt lớn.</p>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden rounded-4xl border border-zinc-100 shadow-sm">
              {[
                { label: "Màn hình", value: "AMOLED Always-On 1.9 inch, 60Hz" },
                { label: "Vật liệu vỏ", value: "Nhôm cao cấp / Titanium nguyên khối" },
                { label: "Thời lượng pin", value: "Lên đến 7 ngày — Sạc không dây" },
                { label: "Kháng nước", value: "5ATM (bơi lội an toàn tới 50m)" },
                { label: "Cảm biến sức khỏe", value: "ECG, SpO2, Nhịp tim, Nhiệt độ da, Mức căng thẳng" },
                { label: "Kết nối", value: "Bluetooth 5.2, GPS tích hợp, NFC" },
              ].map((row, i) => (
                <div key={i} className={`flex items-start justify-between px-8 py-6 gap-8 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"} ${i !== 5 ? "border-b border-zinc-100" : ""}`}>
                  <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide min-w-40">{row.label}</span>
                  <span className="text-base font-medium text-black text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── REGISTRATION ─── */}
        <section id="register" className="py-32 bg-[#f5f5f7] border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                Trải nghiệm<br />tương lai.<br />Ngay hôm nay.
              </h2>
              <p className="text-lg text-zinc-500 mb-10 max-w-md leading-relaxed">
                Đăng ký để trở thành những người đầu tiên sở hữu Helicorp SmartWatch với mức giá ưu đãi đặc biệt dành cho khách hàng đặt trước.
              </p>
              <ul className="space-y-4">
                {[
                  "Nhận thông báo khi sản phẩm mở bán chính thức",
                  "Mã giảm giá 20% cho đơn hàng đầu tiên",
                  "Cơ hội tham gia chương trình dùng thử Beta",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-600 font-medium">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-4xl border border-zinc-100 shadow-xl shadow-black/5">
              <RegistrationForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="font-bold text-white text-lg tracking-tighter">HELICORP</div>
          <p>© 2026 Helicorp. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
