import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindPilot | Think clearly. Command AI.",
  description:
    "MindPilot trains AI operators: clear thinking, verification, precise prompts and independent decisions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
