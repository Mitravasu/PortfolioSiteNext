import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mitravasu Prakash",
  description: "Mitravasu Prakash Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display bg-secondary">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
