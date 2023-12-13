import { Inter } from "next/font/google";
import aventaFont from "next/font/local";

export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter",
});

export const aventaBold = aventaFont({
    src: "../public/fonts/Aventa-Bold _.ttf",
    variable: "--font-aventa",
});

/*
import localFont from "next/font/local";
 
export const orbitron = localFont({
  src: [
    {
      path: "../public/fonts/static/Orbitron-Bold.ttf"
    },
    {
      path: "../public/fonts/static/Orbitron-SemiBold.ttf"
    }
  ],
  variable: "--font-orbitron",
});
*/