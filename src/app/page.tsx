import { Card, Header, Link, Mountain, Particles, Title } from "@/components";
import { cn, data, getMetaData, getViewports } from "@/lib";
import { ChevronDown, ScrollText, Star } from "lucide-react";

import { EventInfo } from "./_sections";

export const generateMetadata = () => getMetaData({});

export const generateViewport = getViewports;

export default function Home() {
  return (
    <>
      <main className="text-white">
        <div className="relative h-screen">
          <div className="pointer-events-none absolute inset-0">
            <div className="flex h-screen w-full items-center justify-center">
              <div className="absolute">
                <div className="relative -z-30 mx-auto w-[400px] max-w-[90%] animate-gradient-svg from-mountain-primary to-mountain-secondary blur-[1px] md:w-[746px] md:blur-sm lg:w-[900px] xl:w-[1200px]">
                  <Mountain />
                </div>
                <div className="absolute top-0 -z-20 mx-auto size-full max-w-[100%] bg-gradient-radial to-black to-95% md:w-[746px] lg:w-[900px] xl:w-[1200px]"></div>
                <div
                  className="absolute top-0 -z-10 mx-auto size-full max-w-[100%] md:w-[746px] lg:w-[900px] xl:w-[1200px]"
                  id="home"
                ></div>
                <Particles id="home" />
                <div className="absolute top-0 z-[-1] mx-auto size-full max-w-[100%] bg-[#090907] opacity-70 blur-xl md:w-[746px] lg:w-[900px] lg:blur-2xl xl:w-[1200px]"></div>
              </div>
            </div>
          </div>
          <div className="z-[1]">
            <Header />
            <div className="mx-auto flex h-[calc(100vh_-_80px)] w-[400px] max-w-[90%] flex-auto flex-col justify-center gap-8 text-left text-white md:w-[746px] lg:shrink-0 lg:basis-1/3">
              <h1 className="mx-auto w-[180px] lg:w-[255px]">
                <Title />
              </h1>
              <EventInfo />
              <div className="mx-auto text-center md:w-4/6 lg:w-full lg:text-2xl">
                Buscamos sponsors para talento, exposición de marca o
                lanzamientos innovadores. ¿Listo para destacar? ¡Háznoslo saber!
              </div>
              <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-4">
                <div className="w-full md:w-auto">
                  <Link
                    href="https://tally.so/r/mO5j9A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ser Sponsor <Star size={16} />
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link href="/cfp" variant="outline">
                    Registro CFP <ScrollText size={16} />
                  </Link>
                </div>
              </div>
              <a
                href="#more-info"
                className="mx-auto flex flex-row items-center justify-center font-barlow text-xl text-jsconf-yellow hover:text-white lg:flex-col"
              >
                ¿Qué es JSConf Chile?
                <ChevronDown className="relative top-1 ml-2 size-4 animate-bounce text-base lg:top-0 lg:ml-0 lg:mt-4 lg:size-12" />
              </a>
            </div>
          </div>
        </div>
        <div
          id="more-info"
          className="mx-6 mb-16 flex flex-col pt-6 lg:mx-auto lg:w-11/12 xl:w-8/12"
        >
          {data.map((row) => (
            <div
              key={row.cols}
              className={cn(
                "mb-6 grid flex-auto grid-cols-1 justify-center gap-6 text-left text-white xl:mb-8 xl:gap-8",
                row.cols == "1" ? "lg:grid-cols-1" : "",
                row.cols == "2" ? "lg:grid-cols-2" : "",
                row.cols == "3" ? "lg:grid-cols-3" : "",
              )}
            >
              {row.cards.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  url={card?.url || ""}
                  actionTitle={card?.actionTitle || ""}
                />
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
