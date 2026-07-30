import type { CSSProperties, ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  gradient?: string;
  showStatus?: boolean;
  style?: CSSProperties;
}

const sizeClass: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "sm",
  md: "",
  lg: "lg",
};

export default function Avatar({
  children,
  size = "md",
  gradient = "linear-gradient(135deg, #3742fa, #ff6b9d)",
  showStatus = false,
  style,
}: AvatarProps) {
  return (
    <div className={`avatar ${sizeClass[size]}`.trim()} style={{ background: gradient, ...style }}>
      {children}
      {showStatus && <span className="avatar-status" />}
    </div>
  );
}
