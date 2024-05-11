import { API } from "@/api";
import type { Page as PageType } from "@/api/types";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";

import { getMetaData } from "@/lib/metadata";

import ClientPage from "./client-page";

export async function generateStaticParams() {
  const pages = await API.getAllPages();
  const paths = pages.allPage.map((page) => ({
    slug: page.slug?.current || "",
  }));

  console.log("PATHS");
  console.log(paths);
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const response = await API.getPageDetails({ input: params.slug });
  if (!response.allPage[0]) {
    return;
  }

  const page = response.allPage[0];
  const metaDataOptions: {
    title?: string;
    image?: string;
    description?: string;
  } = {};
  if (page.seoTitle) {
    metaDataOptions.title = page.seoTitle;
  }
  if (page.seoDescription) {
    metaDataOptions.description = page.seoDescription;
  }
  if (page.seoImage) {
    metaDataOptions.image = page.seoImage?.asset
      ? urlForImage(page.seoImage.asset as unknown as Image)
      : "";
  }

  return getMetaData(metaDataOptions);
}

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await API.getPageDetails({ input: params.slug });

  if (!response?.allPage?.length) {
    return;
  }

  console.log("Page", response.allPage[0]);
  console.log("Nav", response.allPage[0].navbar);
  console.log("Footer", response.allPage[0].footer);
  response.allPage[0].sections?.map((section, idx) => {
    console.log(`Section ${idx}`, section);
  });

  return <ClientPage page={response.allPage[0] as PageType} />;
}

export const dynamicParams = false;
