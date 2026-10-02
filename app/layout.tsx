import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "M-Security Suomi — Ravintola- ja tapahtumaturvallisuus",
    template: "%s | M-Security Suomi",
  },
  description:
    "Järjestyksenvalvonta, eteispalvelut ja turvallisuussuunnittelu ravintoloille ja tapahtumiin. Ota yhteyttä M-Security Suomeen.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
