export const getMetaData = () => {
  const url = "https://jsconf.cl/";
  const title = "JSConf Chile | Conferencia de Javascript en Santiago Chile";
  const description =
    "JSConf Chile | Revive los momentos de JSConf 2023, revisa las fotos y la página. Mantente atento a la próxima edición. Conoce más del equipo organizador.";
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
      { media: "(prefers-color-scheme: light)", color: "#4ac9b4" },
      { media: "(prefers-color-scheme: dark)", color: "#4ac9b4" },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
};
