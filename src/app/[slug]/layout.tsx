import type { Metadata } from "next";
import { Barlow, Inconsolata, Koulen } from "next/font/google";
import { clsx } from "clsx";

import { CSPostHogProvider } from "@/app/providers";

import "@/app/globals.css";

const koulen = Koulen({
  subsets: ["latin"],
  variable: "--font-koulen",
  display: "swap",
  weight: ["400"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["300", "400", "700"],
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={clsx(
            koulen.variable,
            barlow.variable,
            inconsolata.variable,
            "relative z-50 bg-[#090907] after:pointer-events-none after:absolute after:inset-0 after:size-full after:select-none after:bg-noise after:bg-repeat after:content-['']",
          )}
        >
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}