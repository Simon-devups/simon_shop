"use client";

import { useState } from "react";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { formatPrice } from "@/lib/utils";
import type { ShippingMethod } from "@/constants/types";

const initialMethods: ShippingMethod[] = [
  { label: "پست پیشتاز", price: 45000, enabled: true },
  { label: "تیپاکس", price: 65000, enabled: true },
  { label: "ارسال اکسپرس (تهران)", price: 25000, enabled: false },
];

export default function ShippingSection() {
  const [methods, setMethods] = useState<ShippingMethod[]>(initialMethods);

  const toggle = (i: number, enabled: boolean) =>
    setMethods(methods.map((m, idx) => (idx === i ? { ...m, enabled } : m)));

  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">حمل و نقل</h3>
          <div className="card-subtitle">روش‌های ارسال قابل استفاده برای این محصول</div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-row">
          <div className="form-group">
            <label className="label">وزن بسته‌بندی شده (گرم)</label>
            <input className="input num-fa" defaultValue="۳۵۰" />
          </div>
          <div className="form-group">
            <label className="label">ابعاد بسته (سانتی‌متر)</label>
            <input className="input num-fa" defaultValue="۲۰ × ۱۵ × ۱۰" />
          </div>
        </div>

        {methods.map((m, i) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 0",
              borderTop: "1px solid var(--border-soft)",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>{m.label}</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }} className="num-fa">
                هزینه: {formatPrice(m.price)} تومان
              </div>
            </div>
            <ToggleSwitch defaultChecked={m.enabled} onChange={(checked) => toggle(i, checked)} />
          </div>
        ))}
      </div>
    </div>
  );
}
