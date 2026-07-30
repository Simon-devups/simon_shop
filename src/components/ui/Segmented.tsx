"use client";

import { useState } from "react";

interface SegmentedProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function Segmented({ options, defaultValue, onChange }: SegmentedProps) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  const handleClick = (opt: string) => {
    setActive(opt);
    onChange?.(opt);
  };

  return (
    <div className="segmented">
      {options.map((opt) => (
        <button key={opt} className={opt === active ? "active" : ""} onClick={() => handleClick(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
