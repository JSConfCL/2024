/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { ChevronLeft } from "lucide-react";

import { Header } from "@/components/Header/Header";
import { Mountain } from "@/components/Icons/Mountain";
import { Link } from "@/components/Link";
import { Particles } from "@/components/Particles";
import { footer } from "@/lib/data";
import { getMetaData, getViewports } from "@/lib/metadata";

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
            <div className="mx-auto flex h-[calc(100vh_-_120px)] w-[400px] max-w-[90%] flex-auto flex-col justify-center gap-8 text-left text-white md:w-[746px] lg:shrink-0 lg:basis-1/3">
              <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-[#090907] bg-opacity-10 px-12 py-32 text-center backdrop-blur">
                <h1 className="text-center font-inconsolata text-9xl font-bold text-gray-200">
                  404
                </h1>
                <p className="font-inconsolata text-2xl text-gray-400">
                  La página que estás buscando no existe.
                </p>
                <div className="w-full md:w-48">
                  <Link href="/" rel="noreferrer">
                    <ChevronLeft size={16} /> Volver al inicio
                  </Link>
                </div>
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
    </>
  );
}
