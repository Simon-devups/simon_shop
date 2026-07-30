"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function BasicInfoSection() {
  const [tags, setTags] = useState<string[]>(["تخفیف‌دار", "پرفروش"]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  return (
    <>
      <div className="card fade-up">
        <div className="card-header">
          <div>
            <h3 className="card-title">اطلاعات اصلی محصول</h3>
            <div className="card-subtitle">نام، توضیحات و کد محصول</div>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="label">
              <span className="req">*</span> نام محصول
            </label>
            <input className="input" defaultValue="هدفون بی‌سیم سونی WH-1000XM5" />
            <div className="hint">نام محصول باید بین ۲۰ تا ۱۲۰ کاراکتر باشد.</div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label">کد محصول (SKU)</label>
              <input className="input num-fa" defaultValue="SKU-98234" />
            </div>
            <div className="form-group">
              <label className="label">شناسه محصول (EAN)</label>
              <input className="input num-fa" defaultValue="۰۲۷۲۴۲۹۲۳۴۸۲" />
            </div>
          </div>
          <div className="form-group">
            <label className="label">
              <span className="req">*</span> توضیحات کوتاه
            </label>
            <textarea
              className="textarea"
              defaultValue="هدفون بی‌سیم با قابلیت حذف نویز پیشرفته، باتری ۳۰ ساعته و کیفیت صدای استثنایی."
            />
          </div>
          <div className="form-group">
            <label className="label">توضیحات کامل</label>
            <textarea
              className="textarea"
              style={{ minHeight: 140 }}
              defaultValue="هدفون WH-1000XM5 از جدیدترین محصولات شرکت سونی است که با بهره‌گیری از تکنولوژی حذف نویز فعال، تجربه شنیداری بی‌نظیری را برای شما فراهم می‌کند..."
            />
          </div>
        </div>
      </div>

      <div className="card fade-up d1">
        <div className="card-header">
          <div>
            <h3 className="card-title">برچسب‌ها</h3>
            <div className="card-subtitle">برچسب‌های مرتبط با محصول</div>
          </div>
        </div>
        <div className="card-body">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            {tags.map((t) => (
              <span key={t} className="badge accent" style={{ padding: "6px 10px", fontSize: 12 }}>
                {t}
                <button
                  onClick={() => setTags(tags.filter((x) => x !== t))}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "inherit",
                    display: "flex",
                    marginRight: 4,
                  }}
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="input"
              placeholder="برچسب جدید..."
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTag();
              }}
            />
            <button className="btn btn-secondary" onClick={addTag}>
              <Plus size={14} /> افزودن
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
