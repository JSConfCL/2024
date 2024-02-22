import { ChevronDown, Instagram, Linkedin, Star, Twitter } from "lucide-react";

import { Card } from "@/components/Card";
import { Logo } from "@/components/Icons/Logo";
import { Mountain } from "@/components/Icons/Mountain";
import { Title } from "@/components/Icons/Title";
import { Link } from "@/components/Link";
import { Particles } from "@/components/Particles";
import { data, footer, links } from "@/lib/data";
import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <main className="text-white">
        <div className="absolute">
          <div className="flex h-screen w-screen items-center justify-center">
            <div className="absolute">
              <div className="relative -z-30 mx-auto w-[400px] max-w-[90%] animate-gradient-svg from-mountain-primary to-mountain-secondary blur-sm md:w-[746px]">
                <Mountain />
              </div>
              <div className="absolute top-0 -z-20 mx-auto h-[300px] w-full max-w-[100%] bg-gradient-radial to-black to-95% md:h-[535px] md:w-[746px] lg:max-w-none"></div>
              <div
                className="absolute top-0 -z-10 mx-auto h-[300px] w-full max-w-[100%] md:h-[535px] md:w-[746px] lg:max-w-none"
                id="home"
              ></div>
              <Particles id="home" />
              <div className="absolute top-0 z-[-1] mx-auto h-[300px] w-full max-w-[100%] bg-[#090907] opacity-70 blur-2xl md:h-[535px] md:w-[746px] lg:max-w-none"></div>
            </div>
          </div>
        </div>
        <div className="relative z-[1] h-screen">
          <div>
            <header className="container relative z-10 mx-auto flex h-20 w-full items-center justify-between p-4 text-jsconf-yellow">
              <Logo color={theme?.colors?.jsconfYellow} size="36" />
              <div className="flex items-center gap-6">
                {links.map((link) => (
                  <a
                    key={link.id}
                    id={link.id}
                    className="rounded-full p-2 hover:bg-[#EDE06033]"
                    target="_blank"
                    rel="noreferrer"
                    href={link.url}
                  >
                    {link.id == "linkedin" ? (
                      <Linkedin strokeWidth={1} />
                    ) : null}
                    {link.id == "instagram" ? (
                      <Instagram strokeWidth={1} />
                    ) : null}
                    {link.id == "twitter" ? <Twitter strokeWidth={1} /> : null}
                  </a>
                ))}
              </div>
            </header>
            <div className="mx-auto flex h-[calc(100vh_-_80px)] w-[400px] max-w-[90%] flex-auto flex-col justify-center gap-8 text-left text-white md:w-[746px] lg:shrink-0 lg:basis-1/3">
              <h1 className="mx-auto">
                <Title />
              </h1>
              <div className="mx-auto text-center font-barlow text-3xl tracking-[.25em] md:w-4/6 lg:w-full lg:text-5xl">
                Muy Pronto
              </div>
              <div className="mx-auto text-center md:w-4/6 lg:w-full lg:text-2xl">
                Buscamos sponsors para talento, exposición de marca o
                lanzamientos innovadores. ¿Listo para destacar? ¡Háznoslo saber!
              </div>
              <div className="mx-auto inline-block">
                <Link href="mailto:sponsor@jsconf.cl">
                  Ser Sponsor <Star size={16} />
                </Link>
              </div>
              <a
                href="#more-info"
                className="mx-auto flex flex-row items-center justify-center font-barlow text-xl text-jsconf-yellow lg:flex-col"
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
      <footer className="relative z-10 p-4 font-koulen text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 text-center lg:flex-row lg:gap-8">
            {footer.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="hover:text-jsconf-yellow"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
