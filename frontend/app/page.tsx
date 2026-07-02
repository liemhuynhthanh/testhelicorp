import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-black">
            HELICORP
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-black transition-colors">Tính năng</a>
            <a href="#specs" className="hover:text-black transition-colors">Thông số</a>
            <a href="#register" className="hover:text-black transition-colors">Đăng ký</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-600 text-xs font-semibold tracking-wide border border-zinc-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-600"></span>
                </span>
                Sản phẩm mới ra mắt
              </div>
              <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-black">
                Sức khỏe của bạn. <br />
                Được định nghĩa lại.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed font-medium">
                Helicorp Smart Ring mang đến sự kết hợp hoàn hảo giữa thời trang tối giản và công nghệ AI đột phá, theo dõi cơ thể bạn từng giây phút một cách tinh tế nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                <a href="#register" className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-black text-white font-semibold text-lg transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20">
                  Nhận ưu đãi ngay
                </a>
                <a href="#features" className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-transparent text-black font-semibold text-lg transition-colors hover:bg-zinc-50">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="relative w-full aspect-square max-w-lg mx-auto transition-transform duration-1000 ease-out group-hover:scale-105">
                <Image
                  src="/ring.png"
                  alt="Helicorp Smart Ring"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-zinc-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">Công nghệ tàng hình.</h2>
              <p className="text-xl text-zinc-500 font-medium">
                Sức mạnh AI ẩn mình trong thiết kế siêu mỏng nhẹ, mang đến trải nghiệm liền mạch không giới hạn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Theo dõi giấc ngủ",
                  desc: "Nhận biết chính xác từng chu kỳ ngủ và đưa ra giải pháp giúp bạn thức dậy tràn đầy năng lượng.",
                  icon: "✨",
                },
                {
                  title: "Cảm biến nhịp tim",
                  desc: "Phân tích nhịp tim 24/7 với thuật toán y tế, lập tức cảnh báo khi có dấu hiệu bất thường.",
                  icon: "❤️",
                },
                {
                  title: "Đo lường toàn diện",
                  desc: "Liên tục theo dõi nồng độ oxy (SpO2), nhiệt độ da và mức độ căng thẳng của cơ thể.",
                  icon: "📊",
                },
                {
                  title: "Bền bỉ vô hình",
                  desc: "Chống nước 5ATM an toàn cho bơi lội, kết hợp vỏ Titanium nguyên khối siêu cứng cáp.",
                  icon: "💧",
                },
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white shadow-sm border border-zinc-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:shadow-black/5">
                  <div className="text-4xl mb-8 transform transition-transform duration-500 group-hover:scale-110 origin-left">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
