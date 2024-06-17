import type { Link, Page as PageType } from "@/api/types";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";

import { Hero } from "@/sections/Hero/Hero";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { RichText, RichTextStyle } from "@/components/RichText/RichText";
import { Row, RowType } from "@/components/Row/Row";
import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () => getMetaData({});

export const generateViewport = getViewports;

export default function Page({ page }: { page: PageType }) {
  const navbarLinks = (
    page?.navbar?.links ? page?.navbar?.links?.filter(Boolean) : []
  ) as Link[];
  const footerData = page?.footer;

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
                  icon={section?.icon ?? ""}
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
          if (section?.__typename == "Row") {
            return (
              <Row key={idx} rowType={(section.rowType ?? "") as RowType}>
                {(section.children ?? [])
                  .filter((child) =>
                    ["Image", "Card", "RichText"].includes(
                      child?.__typename ?? "",
                    ),
                  )
                  .map((child, idx) => {
                    if (child?.__typename === "Image") {
                      return (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={idx}
                          className="mx-auto w-full rounded-2xl"
                          src={urlForImage(child.asset as unknown as Image)}
                          alt={child.asset?.altText ?? ""}
                        />
                      );
                    }
                    if (child?.__typename === "Card") {
                      return (
                        <Card key={idx}>
                          <h2 className="pb-10 text-center text-4xl font-semibold md:text-left">
                            {child.title}
                          </h2>
                          <RichText
                            value={child.description}
                            style={
                              page.slug?.current?.replace(
                                "new",
                                "",
                              ) as RichTextStyle
                            }
                          />
                        </Card>
                      );
                    }
                    return (
                      <div key={idx}>{JSON.stringify(child?.__typename)}</div>
                    );
                  })}
              </Row>
            );
          }
        })}
      </div>
      {footerData && (
        <Footer
          followLinks={footerData.followLinks}
          sectionLinks={footerData.sectionLinks}
        />
      )}
    </>
  );
}
