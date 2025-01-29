"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { themeStyles } from "@/lib/theme-styles";

export function SocialLinks() {
  const { theme } = useTheme();
  const style = themeStyles[theme as keyof typeof themeStyles];
  const buttonClass = `btn btn-ghost text-base-content ${style.hoverClass} transition-colors`;

  return (
    <>
      <Link href="/about" className={buttonClass}>About</Link>
      <a
        href="https://x.com/gokmeneth"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        Twitter
      </a>
      <a
        href="https://t.me/Gokmenceliks"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        Telegram
      </a>
    </>
  );
}
