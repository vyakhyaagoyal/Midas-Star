"use client";

import { useEffect } from "react";

function darkenHex(hex: string, amount = 30) {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);

  let r = Math.max(0, (num >> 16) - amount);
  let g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
  let b = Math.max(0, (num & 0x0000ff) - amount);

  return `#${(r << 16 | g << 8 | b)
    .toString(16)
    .padStart(6, "0")}`;
}

export default function BrandColorPicker() {
  const presets = ["#3DD897", "#6366F1", "#F97316", "#EC4899"];

  useEffect(() => {
    const saved = localStorage.getItem("brand-primary");
    if (saved) {
      document.documentElement.style.setProperty("--brand-primary", saved);
      document.documentElement.style.setProperty(
        "--brand-secondary",
        darkenHex(saved)
      );
    }
  }, []);

  const hexToRgb = (hex: string) => {
  const v = hex.replace("#", "");
  return `${parseInt(v.substring(0,2),16)}, ${parseInt(v.substring(2,4),16)}, ${parseInt(v.substring(4,6),16)}`;
};

const applyColor = (color: string) => {
  const secondary = darkenHex(color);

  document.documentElement.style.setProperty("--brand-primary", color);
  document.documentElement.style.setProperty("--brand-secondary", secondary);

  document.documentElement.style.setProperty(
    "--brand-primary-rgb",
    hexToRgb(color)
  );
  document.documentElement.style.setProperty(
    "--brand-secondary-rgb",
    hexToRgb(secondary)
  );

  localStorage.setItem("brand-primary", color);
};

  return (
    <div className="flex items-center gap-3">
      {/* Color picker */}
      <input
        type="color"
        aria-label="Pick brand color"
        onChange={(e) => applyColor(e.target.value)}
        className="h-8 w-8 cursor-pointer rounded-full border border-white/20 bg-transparent"
      />

      {/* Preset colors */}
      <div className="flex gap-2">
        {presets.map((c) => (
          <button
            key={c}
            onClick={() => applyColor(c)}
            style={{ background: c }}
            className="h-6 w-6 rounded-full border border-white/20"
          />
        ))}
      </div>
    </div>
  );
}
