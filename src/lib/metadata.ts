import { JSCONF } from "./data";

export const getMetaData = () => {
  const url = "https://jsconf.cl/";
  const title = `JSConf Chile: ${JSCONF.strDates} | Conferencia de Javascript en Santiago Chile`;
  const description = `JSConf Chile: ${JSCONF.strDates} | Ya estamos trabajando en la nueva JSConf Chile. Mantente informado`;
  const images = ["/images/og-image.jpg"];

  return {
    metadataBase: new URL(url),
    title,
    description,

    keywords: [
      "TechTon",
      "JSChile",
      "Comunidades",
      "Streaming",
      "Donación",
      "Bomberos de Chile",
    ],
    authors: [{ name: "JSChile", url }],

    // OpenGraph
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images,
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
};

export const getViewports = () => {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#F0E040" },
      { media: "(prefers-color-scheme: dark)", color: "#1E2019" },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
};
