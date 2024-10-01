import { NextPage } from "next";
import type { AppProps } from "next/app";
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
  weight: ["300", "400", "600", "700"],
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
  weight: ["700"],
});

const AppWithQueryClient = ({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: AppProps["pageProps"];
}) => {
  return (
    <CSPostHogProvider>
      <main
        className={clsx(
          koulen.variable,
          barlow.variable,
          inconsolata.variable,
          "relative z-50 min-h-dvh bg-[#000]",
        )}
      >
        <Component {...pageProps} />
      </main>
    </CSPostHogProvider>
  );
};

export default AppWithQueryClient;
