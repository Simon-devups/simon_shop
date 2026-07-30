"use client";

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function ToggleSwitch({ defaultChecked = false, onChange }: ToggleSwitchProps) {
  return (
    <label style={{ position: "relative", width: 42, height: 24, cursor: "pointer", display: "inline-block" }}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="toggle-input"
      />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
    </label>
  );
}
