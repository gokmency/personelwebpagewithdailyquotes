"use client";

import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { themeStyles } from "@/lib/theme-styles";
import Link from "next/link";

export default function About() {
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
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className={`mockup-browser border-base-300 border ${style.browserBg} ${style.browserHover}`}>
            <div className="mockup-browser-toolbar">
              <div className={`input border-base-300 border ${style.browserText}`}>{style.browserUrl}</div>
            </div>
            <div className={`flex justify-center px-4 py-16 ${style.browserText}`}>
              <div className="max-w-2xl text-center">
                <p className={`text-xl leading-relaxed ${style.font} ${style.textClass}`}>
                  Welcome to my corner of inspiration! I created this space to share daily motivational quotes that can uplift spirits and inspire positive change. Each quote is carefully selected to provide a moment of reflection and encouragement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
