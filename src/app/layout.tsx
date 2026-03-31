import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BitcoinTicker from "@/components/BitcoinTicker";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "BoyertownBitcoin — Make Boyertown PA's First Bitcoin Town",
    template: "%s | BoyertownBitcoin",
  },
  description:
    "A grassroots campaign to make Boyertown Borough, Pennsylvania the first small town in the state to adopt a strategic Bitcoin reserve. Explore the data, run the simulator, and join the movement.",
  keywords: [
    "Boyertown",
    "Bitcoin",
    "Pennsylvania",
    "municipal Bitcoin reserve",
    "strategic Bitcoin reserve",
    "borough treasury",
    "Bitcoin town",
    "cryptocurrency adoption",
  ],
  openGraph: {
    title: "BoyertownBitcoin — PA's First Bitcoin Town",
    description:
      "Explore how a modest 1-5% Bitcoin allocation could transform Boyertown Borough's finances. Data-driven. Community-powered.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoyertownBitcoin — PA's First Bitcoin Town",
    description:
      "Explore how a modest 1-5% Bitcoin allocation could transform Boyertown Borough's finances.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} font-sans antialiased bg-navy text-gray-200`}>
        <Navigation />
        <main className="min-h-screen pb-10">{children}</main>
        <Footer />
        <BitcoinTicker />
      </body>
    </html>
  );
}
