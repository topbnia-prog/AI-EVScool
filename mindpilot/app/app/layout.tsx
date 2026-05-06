import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindPilot | AI-грамотность для юных операторов",
  description:
    "Платформа миссий, которая учит детей управлять AI, проверять ответы и думать самостоятельно."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
