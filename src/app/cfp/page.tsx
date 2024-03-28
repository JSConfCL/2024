import { CallToActionProps, Hero, ImageProps } from "@/sections/Hero/Hero";
import { Header } from "@/components/Header/Header";
import { cfp as data, footer } from "@/lib/data";
import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () =>
  getMetaData({
    title: "CFP - Call For Proposals | JSConf Chile",
    description:
      "Únete a JSConf Chile como ponente. Comparte tus innovaciones en JavaScript y conecta con líderes tecnológicos. Envía tu propuesta.",
  });

export const generateViewport = getViewports;

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <Header />
      <main className="text-white">
        <Hero
          title={data.sections[0].title as string}
          description={data.sections[0].description as string}
          cta={data.sections[0].cta as CallToActionProps}
          image={data.sections[0].image as ImageProps}
        />
        <div className="container mx-auto flex max-w-[1136px] flex-col gap-8 p-4 md:flex-row md:items-center">
          <div className="w-full md:w-7/12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto w-full rounded-2xl"
              src={data.sections[1].image.src}
              alt={data.sections[1].image.name}
            />
          </div>
          <div className="w-full rounded-2xl bg-gradient-to-tr from-jsconf-black via-jsconf-black to-jsconf-yellow p-[2px] md:w-5/12">
            <div className="size-full rounded-2xl bg-gradient-to-br from-slate-950 to-jsconf-black px-5 py-8 font-barlow md:p-12">
              <h2 className="pb-10 text-center text-4xl font-semibold uppercase md:text-left">
                {data.sections[1]?.benefits?.title}
              </h2>
              <div className="flex flex-row">
                <div>
                  <div className="relative top-[16px] mx-4 h-full w-[2px] shrink-0 bg-gradient-to-b from-jsconf-yellow via-jsconf-black via-70% to-transparent md:to-90%" />
                </div>
                <ul className="flex flex-col gap-4 leading-7">
                  {data.sections[1]?.benefits?.list.map((benefit) => (
                    <li
                      className="relative before:absolute before:left-[-23px] before:top-[10px] before:inline-block before:size-3 before:rounded-full before:bg-gradient-radial before:from-jsconf-yellow before:to-transparent before:to-70% before:content-['']"
                      key={benefit}
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative z-10 p-4 font-koulen text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 text-center lg:flex-row lg:gap-8">
            {footer.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-jsconf-yellow"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
