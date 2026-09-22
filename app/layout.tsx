import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu-Chi Hsu (許又騏 / 4rch1e) — Portfolio & Research",
  description:
    "Yu-Chi Hsu (archie0732) - Undergraduate researcher in RAG, AI Agents, Computer Vision and Software Engineer. First author of TCSE 2026 and TANET 2026 papers.",
  keywords: [
    "Yu-Chi Hsu",
    "許又騏",
    "4rch1e",
    "archie0732",
    "RAG",
    "AI Agents",
    "Computer Vision",
    "Providence University",
    "ICPC",
    "TCSE 2026",
    "TANET 2026",
  ],
  authors: [{ name: "Yu-Chi Hsu", url: "https://github.com/archie0732" }],
  openGraph: {
    title: "Yu-Chi Hsu (4rch1e) — Personal Portfolio & Research",
    description:
      "RAG, AI Agents, Multi-Agent Systems, Computer Vision & Open-Source Software.",
    url: "https://github.com/archie0732",
    siteName: "4rch1e Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/121162902?v=4",
        width: 400,
        height: 400,
        alt: "Yu-Chi Hsu (4rch1e)",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
