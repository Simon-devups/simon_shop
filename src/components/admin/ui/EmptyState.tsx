import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <div className="empty-icon">
        <Icon size={28} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      {actionLabel && (
        <button className="btn btn-primary" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
