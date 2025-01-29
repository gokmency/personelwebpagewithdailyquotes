"use client";

import { useTheme } from "./theme-provider";
import { themeStyles } from "@/lib/theme-styles";

type Theme = "dark" | "retro" | "forest" | "aqua" | "valentine" | "cyberpunk";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const themes: Theme[] = ["dark", "retro", "forest", "aqua", "valentine", "cyberpunk"];
  const style = themeStyles[theme as keyof typeof themeStyles];

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className={`btn btn-ghost m-1 ${style.font} text-base-content hover:text-primary transition-colors`}
      >
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52 border border-base-content/10"
      >
        {themes.map((t) => {
          const itemStyle = themeStyles[t as keyof typeof themeStyles];
          return (
            <li key={t} className="mb-1">
              <input
                type="radio"
                name="theme-dropdown"
                className={`theme-controller btn btn-sm btn-ghost justify-start normal-case w-full text-base-content transition-colors ${itemStyle.font} ${itemStyle.hoverClass}`}
                aria-label={t.charAt(0).toUpperCase() + t.slice(1)}
                value={t}
                checked={t === theme}
                onChange={() => setTheme(t)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
