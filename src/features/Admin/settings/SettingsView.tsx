"use client";

import { useState } from "react";
import { User, Store, CreditCard, ShieldCheck, Bell, Save } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import VerticalTabs, { type VerticalTabItem } from "@/components/admin/ui/VerticalTabs";
import GeneralSettingsSection from "./GeneralSettingsSection";
import ShopSettingsSection from "./ShopSettingsSection";
import PaymentSettingsSection from "./PaymentSettingsSection";
import SecuritySettingsSection from "./SecuritySettingsSection";
import NotificationsComingSoonSection from "./NotificationsComingSoonSection";

const tabs: VerticalTabItem[] = [
  { id: "general", label: "عمومی", icon: User },
  { id: "shop", label: "فروشگاه", icon: Store },
  { id: "payment", label: "پرداخت", icon: CreditCard },
  { id: "security", label: "امنیت", icon: ShieldCheck },
  { id: "notifications", label: "اعلان‌ها", icon: Bell },
];

export default function SettingsView() {
  const [active, setActive] = useState("general");

  const renderSection = () => {
    switch (active) {
      case "general":
        return <GeneralSettingsSection />;
      case "shop":
        return <ShopSettingsSection />;
      case "payment":
        return <PaymentSettingsSection />;
      case "security":
        return <SecuritySettingsSection />;
      case "notifications":
        return <NotificationsComingSoonSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader
        title="تنظیمات"
        subtitle="مدیریت تنظیمات حساب کاربری و فروشگاه"
        actions={
          <button className="btn btn-primary">
            <Save size={16} /> ذخیره تغییرات
          </button>
        }
      />
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 18, alignItems: "start" }}>
        <VerticalTabs items={tabs} active={active} onChange={setActive} heading="بخش‌های تنظیمات" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{renderSection()}</div>
      </div>
    </div>
  );
}
