import { ExternalLink } from "lucide-react";

import {
  Avocado,
  Doblado,
  Empanada,
  Hallulla,
  Lapageria,
  Logo,
  Marraqueta,
  Moai,
  Mote,
  Mountain,
  Volcano,
  Windmill,
  Wine,
} from "@/components/Icons";
import { Link } from "@/components/Link";

export interface CallToActionProps {
  url: string;
  text: string;
}

export interface ImageProps {
  src: string;
  name?: string;
  place?: string;
}

export interface HeroProps {
  title: string;
  description: string;
  cta: CallToActionProps;
  image: ImageProps;
  icon?: string;
  iconOffset?: string;
}

export const Hero = ({ title, description, cta, image, icon }: HeroProps) => {
  const icons = {
    avocado: Avocado,
    doblado: Doblado,
    empanada: Empanada,
    hallulla: Hallulla,
    lapageria: Lapageria,
    logo: Logo,
    marraqueta: Marraqueta,
    moai: Moai,
    mote: Mote,
    mountain: Mountain,
    volcano: Volcano,
    windmill: Windmill,
    wine: Wine,
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Icon = icon ? icons[icon as keyof typeof icons] : Avocado ?? Avocado;

  return (
    <>
      <div className="container mx-auto max-w-[1136px] p-4">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
          <div className="flex w-full flex-col font-barlow md:w-7/12">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <div className="mx-auto size-12 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(136,_113,_31,_0.79)_0%,_rgba(42,_36,_1,_0)_100%)]">
                  <Icon />
                </div>
                <div className="relative top-[-6px] z-[-1] mx-8 h-full w-[2px] shrink-0 bg-gradient-to-b from-jsconf-yellow via-jsconf-black via-50% to-transparent to-80% md:to-jsconf-black md:to-80%" />
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-semibold uppercase">{title}</h1>
                <div className="leading-7	">{description}</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-gradient-to-b from-jsconf-black to-transparent md:mx-8 md:w-[2px]" />
              <div className="mt-8 w-full md:w-fit">
                <Link href={cta.url} target="_blank" rel="noreferrer">
                  {cta.text} <ExternalLink />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto mb-2 w-10/12 md:w-full"
              src={image.src}
              alt={`${image.name} - ${image.place}`}
            />
            {image.name && image.place ? (
              <div className="text-center font-inconsolata md:text-right">
                <span className="text-jsconf-yellow">{image.name} - </span>
                <span>{image.place}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
