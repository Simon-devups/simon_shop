import { Bell } from "lucide-react";
import EmptyState from "@/components/admin/ui/EmptyState";

export default function NotificationsComingSoonSection() {
  return (
    <div className="card fade-up">
      <EmptyState
        icon={Bell}
        title="به‌زودی..."
        description="تنظیمات اعلان‌ها در نسخه بعدی پنل مدیریت در دسترس قرار می‌گیرد."
      />
    </div>
  );
}
