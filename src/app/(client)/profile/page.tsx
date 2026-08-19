// app/(client)/profile/page.tsx
// -----------------------------------------------------------------------------
// The previous version of this file was entirely commented out and referenced
// useApp()/ProfilePage, neither of which exist in this project. Real profile
// pages need Auth (see api-full-spec.md §6) which isn't built yet. This is a
// minimal, honest placeholder so the "حساب من" link in Navbar doesn't 404 —
// swap this out once POST /api/auth/otp/* and GET /api/auth/me exist.
// -----------------------------------------------------------------------------

import Link from "next/link";
import { UserCircle2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div dir="rtl" className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#F5F7FA] px-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[#EFF4FE] text-[#1D4ED8]">
        <UserCircle2 size={32} strokeWidth={2} />
      </div>
      <h1 className="text-[17px] font-bold text-[#111827]">هنوز وارد حساب نشده‌اید</h1>
      <p className="max-w-xs text-[13px] text-[#6B7280]">
        سیستم ورود و ثبت‌نام هنوز آماده نیست. به‌زودی از اینجا می‌تونید سفارش‌ها و اطلاعات حساب‌تون رو ببینید.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-[12px] bg-[#1D4ED8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#1E40AF]"
      >
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}