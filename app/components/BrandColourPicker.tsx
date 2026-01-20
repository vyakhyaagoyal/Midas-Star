"use client";

import { useEffect, useState } from "react";

function darkenHex(hex: string, amount = 30) {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);

  let r = Math.max(0, (num >> 16) - amount);
  let g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
  let b = Math.max(0, (num & 0x0000ff) - amount);

  return `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")}`;
}

export default function BrandColorPicker() {
  const presets = ["#3DD897", "#6366F1", "#F97316", "#EC4899"];
  const [open, setOpen] = useState(false);

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
    return `${parseInt(v.slice(0, 2), 16)}, ${parseInt(
      v.slice(2, 4),
      16
    )}, ${parseInt(v.slice(4, 6), 16)}`;
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
    setOpen(false); // 👈 auto hide after selection
  };

  return (
    <div className="relative flex items-center gap-2">
      {/* Theme Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1.5 text-sm rounded-md
                   border border-white/20 text-white/50
                   hover:bg-white/10 transition"
      >
        Theme
      </button>

      {/* Theme Options */}
      {open && (
        <div
          className="absolute left-full ml-2 flex items-center gap-2
                     bg-black/80 backdrop-blur-md
                     p-2 rounded-lg border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Color Picker */}
          <input
            type="color"
            aria-label="Pick brand color"
            onChange={(e) => applyColor(e.target.value)}
            className="h-8 w-8 cursor-pointer rounded-full
                       border border-white/20 bg-transparent"
          />

          {/* Preset Colors */}
          {presets.map((c) => (
            <button
              key={c}
              onClick={() => applyColor(c)}
              style={{ background: c }}
              className="h-6 w-6 rounded-full
                         border border-white/20
                         hover:scale-110 transition"
            />
          ))}
        </div>
      )}
    </div>
  );
}
