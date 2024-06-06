import type { Link, Page as PageType } from "@/api/types";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";

import { Hero } from "@/sections/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () => getMetaData({});

export const generateViewport = getViewports;

export default function Page({ page }: { page: PageType }) {
  const navbarLinks = (
    page?.navbar?.links ? page?.navbar?.links?.filter(Boolean) : []
  ) as Link[];
  const hasFooter = page?.footer;

  return (
    <>
      {navbarLinks.length ? <Header links={navbarLinks} /> : null}
      <div className="md:min-h-[calc(100vh_-_390px)]">
        {page.sections?.map((section, idx) => {
          if (section?.__typename == "Hero") {
            console.log("ATTRIBUTES", section.customAttributes);
            return (
              <div key={idx}>
                <Hero
                  title={section.heading ?? ""}
                  description={section.tagline ?? ""}
                  cta={{
                    url: section.actions?.[0]?.url ?? "",
                    text: section.actions?.[0]?.text ?? "",
                  }}
                  image={{
                    src: section?.image?.asset
                      ? urlForImage(section.image.asset as unknown as Image)
                      : "",
                    name:
                      section.customAttributes
                        ?.filter(Boolean)
                        .find((ca) => ca?.name === "name")?.value ?? "",
                    place:
                      section.customAttributes
                        ?.filter(Boolean)
                        .find((ca) => ca?.name === "location")?.value ?? "",
                  }}
                />
              </div>
            );
          }
        })}
      </div>
      {hasFooter ? <Footer /> : null}
    </>
  );
}
