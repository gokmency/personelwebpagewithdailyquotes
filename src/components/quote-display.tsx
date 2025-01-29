"use client";

import { useTheme } from "./theme-provider";
import { Typewriter } from "./ui/typewriter";
import { themeStyles } from "@/lib/theme-styles";

const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Your time is limited, don't waste it living someone else's life.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Hayat bisikleti sürmek gibidir. Dengenizi korumak için hareket etmeye devam etmelisiniz.",
  "La vie est belle, profitez de chaque instant.",
  "Der Weg ist das Ziel.",
  "La vita è bella, vivila al massimo."
];

export function QuoteDisplay() {
  const { theme } = useTheme();
  const style = themeStyles[theme as keyof typeof themeStyles];

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <Typewriter
          text={quotes}
          className={`text-3xl md:text-4xl lg:text-5xl ${style.font} ${style.quoteClass} transition-colors duration-300`}
          speed={50}
          waitTime={4000}
          deleteSpeed={30}
          cursorClassName="text-primary animate-pulse"
        />
      </div>
    </div>
  );
}
