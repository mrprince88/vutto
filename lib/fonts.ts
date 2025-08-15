import { Inter, Poppins, Orbitron } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-orbitron",
});
