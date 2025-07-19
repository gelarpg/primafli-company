"use client";

import { Noto_Sans } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";

const sansation = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansation.className}>{children}</body>
      <PrelineScriptWrapper />
    </html>
  );
}
