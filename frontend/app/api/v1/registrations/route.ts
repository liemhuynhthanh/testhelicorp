import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, email } = body;

    // Validate inputs
    const errors: Record<string, string> = {};
    if (!fullName?.trim()) errors.fullName = "Vui lòng nhập họ tên";
    
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phone?.trim()) errors.phone = "Vui lòng nhập số điện thoại";
    else if (!phoneRegex.test(phone)) errors.phone = "Số điện thoại không hợp lệ";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email?.trim()) errors.email = "Vui lòng nhập email";
    else if (!emailRegex.test(email)) errors.email = "Email không hợp lệ";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(errors, { status: 400 });
    }

    // Check for existing user by email
    const existingUser = await prisma.registration.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email này đã được đăng ký nhận ưu đãi trước đó." },
        { status: 409 }
      );
    }

    // Create registration
    const newRegistration = await prisma.registration.create({
      data: {
        fullName,
        phone,
        email,
      },
    });

    return NextResponse.json(newRegistration, { status: 201 });
  } catch (error) {
    console.error("Registration API Error:", error);
    return NextResponse.json(
      { message: "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
