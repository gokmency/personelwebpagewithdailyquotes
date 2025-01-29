import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { 
  Playfair_Display, 
  Press_Start_2P, 
  Caveat, 
  Quicksand, 
  Dancing_Script, 
  Orbitron 
} from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const pressStart = Press_Start_2P({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-press-start",
  display: "swap",
});

const caveat = Caveat({ 
  subsets: ["latin"], 
  variable: "--font-caveat",
  display: "swap",
});

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-quicksand",
  display: "swap",
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  variable: "--font-dancing-script",
  display: "swap",
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gokmen Celik",
  description: "Hey! its me Gokmen Celik.",
  authors: [{ name: "Gokmen Celik" }],
  keywords: ["motivational quotes", "inspiration", "quotes", "multilingual quotes"],
  openGraph: {
    title: "Gokmen Celik",
    description: "Hey! its me Gokmen Celik.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gokmeneth",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${pressStart.variable} ${caveat.variable} ${quicksand.variable} ${dancingScript.variable} ${orbitron.variable}`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
