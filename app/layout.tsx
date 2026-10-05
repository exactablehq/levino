import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Levino Daman - 𝒶 𝒽𝑜𝓂𝑒 𝒶𝓌𝒶𝓎 𝒻𝓇𝑜𝓂 𝒽𝑜𝓂𝑒",
  description:
    "Elegant Homely Stay. 5 Minutes from Devka Beach. Multi-Cuisine Restaurant.",
  openGraph: {
    title: "Levino Daman - 𝒶 𝒽𝑜𝓂𝑒 𝒶𝓌𝒶𝓎 𝒻𝓇𝑜𝓂 𝒽𝑜𝓂𝑒",
    description:
      "Elegant Homely Stay. 5 Minutes from Devka Beach. Multi-Cuisine Restaurant.",
    type: "website",
    url: "https://levino.in",
    images: [
      {
        url: "https://framerusercontent.com/assets/bvnkNLwZ1CbPHEpibzvcdv1IrGc.png",
      },
    ],
  },
  icons: {
    icon: "https://framerusercontent.com/images/O9ZVt2QSVAco0pl0LLsT4Paugq8.png",
    apple: "https://framerusercontent.com/images/O9ZVt2QSVAco0pl0LLsT4Paugq8.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFBF7] text-[#281C13] font-sans selection:bg-[#9C6644]/20 selection:text-[#352318]">
        {children}
      </body>
    </html>
  );
}

