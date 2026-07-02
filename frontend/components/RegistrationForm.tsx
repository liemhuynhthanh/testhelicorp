"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ fullName: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: "", phone: "", email: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên";
      isValid = false;
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/v1/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        setIsSuccess(true);
        setFormData({ fullName: "", phone: "", email: "" });
      } else if (res.status === 400) {
        // Lỗi validation từ backend — map về từng field
        const fieldErrors: Record<string, string> = await res.json();
        setErrors({
          fullName: fieldErrors.fullName ?? "",
          phone: fieldErrors.phone ?? "",
          email: fieldErrors.email ?? "",
        });
      } else if (res.status === 409) {
        // Email hoặc phone đã tồn tại
        const body: { message: string } = await res.json();
        setServerError(body.message);
      } else {
        setServerError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
      }
    } catch {
      setServerError("Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại kết nối.");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSuccess) {
    return (
      <div className="p-10 text-center bg-zinc-50/80 rounded-[2rem] border border-zinc-100 shadow-sm animate-in fade-in duration-500">
        <div className="text-5xl mb-6">🎉</div>
        <h3 className="text-2xl font-semibold mb-3 text-black">Đăng ký thành công!</h3>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          Cảm ơn bạn đã quan tâm. Thông tin của bạn đã được ghi nhận, chúng tôi sẽ sớm liên hệ để tư vấn chi tiết.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-sm font-semibold text-black hover:underline"
        >
          Đăng ký thêm người khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div>
        <label className="block text-sm font-semibold text-black mb-2" htmlFor="fullName">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={`w-full px-5 py-3.5 rounded-xl border bg-white focus:outline-none focus:ring-4 transition-all duration-300 ${errors.fullName
              ? "border-red-200 focus:border-red-400 focus:ring-red-100"
              : "border-zinc-200 hover:border-zinc-300 focus:border-zinc-400 focus:ring-zinc-100"
            }`}
          placeholder="Nhập họ và tên của bạn"
        />
        {errors.fullName && <p className="mt-2 text-sm text-red-500 font-medium animate-in slide-in-from-top-1">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-black mb-2" htmlFor="phone">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-5 py-3.5 rounded-xl border bg-white focus:outline-none focus:ring-4 transition-all duration-300 ${errors.phone
              ? "border-red-200 focus:border-red-400 focus:ring-red-100"
              : "border-zinc-200 hover:border-zinc-300 focus:border-zinc-400 focus:ring-zinc-100"
            }`}
          placeholder="Ví dụ: 0912345678"
        />
        {errors.phone && <p className="mt-2 text-sm text-red-500 font-medium animate-in slide-in-from-top-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-black mb-2" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-5 py-3.5 rounded-xl border bg-white focus:outline-none focus:ring-4 transition-all duration-300 ${errors.email
              ? "border-red-200 focus:border-red-400 focus:ring-red-100"
              : "border-zinc-200 hover:border-zinc-300 focus:border-zinc-400 focus:ring-zinc-100"
            }`}
          placeholder="email@example.com"
        />
        {errors.email && <p className="mt-2 text-sm text-red-500 font-medium animate-in slide-in-from-top-1">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full h-14 bg-black text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-black/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Đang xử lý...
          </span>
        ) : (
          "Đăng ký nhận ưu đãi"
        )}
      </button>

      {serverError && (
        <p className="text-sm text-red-500 font-medium text-center animate-in slide-in-from-top-1 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {serverError}
        </p>
      )}
    </form>
  );
}
