import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  if (!apiKey) {
    return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 });
  }

  try {
    const { message, history } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `Bạn là trợ lý ảo cao cấp của thương hiệu Corp SmartWatch. 
      Bạn luôn trả lời một cách chuyên nghiệp, ngắn gọn, lịch sự và sử dụng tiếng Việt.
      Thông tin sản phẩm:
      1. Corp Elite: Đồng hồ siêu cấp viền Titanium, kính Sapphire, theo dõi nhịp tim AI, pin 14 ngày. Giá: $599. Màu: Bạc Titanium, Đen Obsidian.
      2. Corp Sport: Chuyên thể thao, siêu nhẹ, GPS kép, chống nước 5ATM, pin 21 ngày. Giá: $299. Màu: Xanh Neon, Đỏ Lava.
      3. Corp Pro: Đẳng cấp doanh nhân, viền thép không gỉ, ECG, đo SpO2, gọi điện độc lập. Giá: $499. Màu: Vàng Hồng, Bạc Bóng.
      
      Nếu khách hàng hỏi ngoài phạm vi, hãy lịch sự từ chối và hướng họ quay lại các dòng đồng hồ thông minh của Corp.
      Tuyệt đối KHÔNG sử dụng Markdown đậm (**) để bọc các từ ngữ bình thường, chỉ dùng khi cần nhấn mạnh tên sản phẩm.`
    });

    // Formatting history for Gemini API
    const formattedHistory = history.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Lỗi kết nối đến trợ lý ảo. Vui lòng thử lại sau." }, { status: 500 });
  }
}
