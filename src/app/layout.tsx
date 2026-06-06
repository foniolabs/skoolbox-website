import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skoolbox.xyz"),
  title: "SkoolBox — Offline-first AI tutor for Nigerian secondary schools",
  description:
    "SkoolBox brings an AI teaching assistant, structured curriculum, lesson planning, presentation mode, and adaptive quizzes to every classroom — even without the internet.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "SkoolBox — Learn anywhere. Even offline.",
    description:
      "An AI-powered learning platform built for Nigerian secondary schools. Works fully offline.",
    url: "https://skoolbox.xyz",
    siteName: "SkoolBox",
    type: "website",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkoolBox",
    description: "Offline-first AI tutor for Nigerian secondary schools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
