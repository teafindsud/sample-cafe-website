import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizza Galeria — Crafted with Fire & Soul",
  description:
    "Neapolitan artisan pizzas baked in a 900° wood-fired stone oven. Hand-stretched dough, premium Italian ingredients, three decades of passion.",
  keywords: ["pizza", "artisan pizza", "wood-fired", "Neapolitan pizza", "premium pizza"],

  // 👇 YE LINE ADD KI HAI (IMPORTANT)
  verification: {
    google: "dgcKoS91nGgVlQnMMV26KelmkBT1S_y0e-jT9mDrno0",
  },

  openGraph: {
    title: "Pizza Galeria — Crafted with Fire & Soul",
    description:
      "Neapolitan artisan pizzas baked in a 900° wood-fired stone oven.",
    type: "website",
    siteName: "Pizza Galeria",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0500",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased`}
        style={{ background: "#0D0500" }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
