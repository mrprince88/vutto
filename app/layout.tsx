import type React from "react";
import type { Metadata } from "next";

import { inter, poppins, orbitron } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zutto - Buy & Sell Bikes Online",
  description:
    "India's most trusted platform to buy and sell used bikes. Get instant quotes, hassle-free inspection, and seamless ownership transfer.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${orbitron.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
