"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { ProductSpec } from "@/constants/types";

const initialSpecs: ProductSpec[] = [
  { k: "رنگ", v: "مشکی" },
  { k: "وزن", v: "۲۵۰ گرم" },
  { k: "نوع اتصال", v: "بلوتوث ۵.۲" },
  { k: "مدت باتری", v: "۳۰ ساعت" },
];

export default function SpecsSection() {
  const [specs, setSpecs] = useState<ProductSpec[]>(initialSpecs);

  const updateSpec = (i: number, field: keyof ProductSpec, value: string) => {
    setSpecs(specs.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)));
  };

  const removeSpec = (i: number) => setSpecs(specs.filter((_, idx) => idx !== i));

  const addSpec = () => setSpecs([...specs, { k: "", v: "" }]);

  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">مشخصات فنی</h3>
          <div className="card-subtitle">ویژگی‌های فنی محصول به صورت کلید و مقدار</div>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={addSpec}>
          <Plus size={14} /> افزودن مشخصه
        </button>
      </div>
      <div className="card-body">
        {specs.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
            <input
              className="input"
              placeholder="عنوان (مثلاً رنگ)"
              value={s.k}
              onChange={(e) => updateSpec(i, "k", e.target.value)}
              style={{ flex: "0 0 200px" }}
            />
            <input
              className="input"
              placeholder="مقدار"
              value={s.v}
              onChange={(e) => updateSpec(i, "v", e.target.value)}
              style={{ flex: 1 }}
            />
            <button className="icon-btn" style={{ color: "var(--danger)" }} onClick={() => removeSpec(i)}>
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
