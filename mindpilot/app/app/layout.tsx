import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindPilot | AI literacy for young operators",
  description:
    "A mission-based AI literacy platform that teaches children to command, verify, and think independently with AI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
