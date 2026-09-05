import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.SITE_URL ?? "https://abel-product-engineer.tabel0112.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abel — Product Engineer",
  description:
    "Product-minded software engineer building AI-powered applications, mobile experiences, and polished digital products.",
  openGraph: {
    title: "Abel — Product Engineer",
    description:
      "AI products, mobile experiences, and polished digital work built from idea to production.",
    type: "website",
    images: [{ url: "/og-cobalt-v5.png", width: 1200, height: 630, alt: "Abel — Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abel — Product Engineer",
    description:
      "AI products, mobile experiences, and polished digital work built from idea to production.",
    images: ["/og-cobalt-v5.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
