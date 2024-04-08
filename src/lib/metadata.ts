import { JSCONF } from "./data";

interface GetMetaDataProps {
  title?: string;
  description?: string;
  image?: string;
}

export const getMetaData = ({
  title: _title,
  description: _description,
  image: _image,
}: GetMetaDataProps) => {
  const url = "https://jsconf.cl/";
  const title =
    _title ??
    `JSConf Chile: ${JSCONF.strDates} | Conferencia de Javascript en Santiago Chile`;
  const description =
    _description ??
    `JSConf Chile: ${JSCONF.strDates} | Ya estamos trabajando en la nueva JSConf Chile. Mantente informado`;
  const images = ["/assets/images/og-image.jpg"];

  return {
    metadataBase: new URL(url),
    title,
    description,
    icons: [
      {
        url: "/assets/favicon/favicon.ico",
        type: "image/x-ico",
      },
      {
        url: "/assets/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    // TODO: update keywords
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
