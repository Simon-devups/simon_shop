import { Upload, Trash2 } from "lucide-react";

const placeholderImages = ["🎧", "📱", "💼", "📦"];

export default function ImagesSection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">تصاویر محصول</h3>
          <div className="card-subtitle">حداکثر ۱۰ تصویر با فرمت JPG یا PNG</div>
        </div>
        <button className="btn btn-secondary btn-sm">
          <Upload size={14} /> آپلود گروهی
        </button>
      </div>
      <div className="card-body">
        <div
          style={{
            border: "2px dashed var(--border)",
            borderRadius: 14,
            padding: "36px 20px",
            textAlign: "center",
            background: "var(--surface-2)",
            marginBottom: 18,
            cursor: "pointer",
            transition: "all .2s",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "var(--accent-soft)",
              color: "var(--accent)",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 12px",
            }}
          >
            <Upload size={24} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
            تصاویر خود را اینجا بکشید و رها کنید
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            یا برای انتخاب فایل کلیک کنید · حداکثر ۵MB برای هر تصویر
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
          {placeholderImages.map((e, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "1",
                borderRadius: 12,
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                display: "grid",
                placeItems: "center",
                fontSize: 48,
              }}
            >
              {e}
              {i === 0 && (
                <span className="badge accent" style={{ position: "absolute", top: 8, right: 8, fontSize: 10 }}>
                  اصلی
                </span>
              )}
              <button
                style={{
                  position: "absolute",
                  top: 6,
                  left: 6,
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Trash2 size={12} color="var(--danger)" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
