interface ProgressBarProps {
  /** درصد پر شدن نوار، بین ۰ تا ۱۰۰ */
  percent: number;
  color?: string;
  style?: React.CSSProperties;
}

export default function ProgressBar({ percent, color, style }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="progress" style={style}>
      <span
        style={{
          width: `${clamped}%`,
          ...(color ? { background: color } : {}),
        }}
      />
    </div>
  );
}
