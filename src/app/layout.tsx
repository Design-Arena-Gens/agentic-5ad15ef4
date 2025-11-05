import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova University",
  description:
    "Discover Nova University – where visionary minds, cutting-edge research, and immersive experiences shape the leaders of tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
