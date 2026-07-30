import type { CSSProperties, ReactNode } from "react";

interface SectionCardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  headerAction?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** بدون پدینگ داخلی بدنه (مثلاً برای جدول‌هایی که خودشان پدینگ دارند) */
  noBodyPadding?: boolean;
}

export default function SectionCard({
  title,
  subtitle,
  headerAction,
  children,
  className,
  style,
  noBodyPadding = false,
}: SectionCardProps) {
  return (
    <div className={`card fade-up ${className ?? ""}`.trim()} style={style}>
      {(title || headerAction) && (
        <div className="card-header">
          <div>
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
          </div>
          {headerAction}
        </div>
      )}
      <div className="card-body" style={noBodyPadding ? { padding: 0 } : undefined}>
        {children}
      </div>
    </div>
  );
}
