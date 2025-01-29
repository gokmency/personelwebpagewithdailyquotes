"use client";

import { QuoteDisplay } from "@/components/quote-display";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { useTheme } from "@/components/theme-provider";
import { themeStyles } from "@/lib/theme-styles";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  const style = themeStyles[theme as keyof typeof themeStyles];

  return (
    <div className="min-h-screen w-full bg-base-200 relative flex flex-col">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <h1 className={`text-2xl font-bold ${style.font} ${style.titleClass} ${style.hoverClass} transition-colors cursor-pointer`}>
            GOKMEN CELIK
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
      <QuoteDisplay />
      <a
        href="https://grainz.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 ${style.font} ${style.textClass} opacity-70 hover:opacity-100 transition-opacity`}
      >
        GRAINZ
      </a>
    </div>
  );
}
