import { Link as LinkType } from "@/api/types";
import { Maybe } from "graphql/jsutils/Maybe";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Icons/Title";
import { Link } from "@/components/Link";
import { theme } from "@/lib/theme";

interface FooterProps {
  followLinks?: Maybe<Maybe<LinkType>[]>;
  sectionLinks?: Maybe<Maybe<LinkType>[]>;
}

const socialMediaIcons: { [key: string]: React.ReactNode } = {
  linkedin: <Linkedin strokeWidth={1} />,
  instagram: <Instagram strokeWidth={1} />,
  twitter: <Twitter strokeWidth={1} />,
  facebook: <Facebook strokeWidth={1} />,
  github: <Github strokeWidth={1} />,
};

export function Footer({ followLinks, sectionLinks }: FooterProps) {
  console.log("followlinks", followLinks);
  console.log("sectionLinks", sectionLinks);
  return (
    <footer className="relative z-10 font-barlow text-white">
      <div className="absolute inset-0 -z-10 w-[80%] bg-gradient-to-r from-jsconf-yellow via-jsconf-yellow to-transparent opacity-10 content-[''] md:w-[60%] md:from-transparent md:via-jsconf-yellow" />
      <div className="mx-6 flex flex-col before:top-0 before:h-0.5 before:w-full before:bg-gradient-to-r before:from-transparent before:from-10% before:via-jsconf-yellow before:via-50% before:to-transparent before:to-90% before:content-[''] lg:mx-auto lg:w-11/12 xl:w-8/12">
        <div className="flex w-full flex-col gap-8 py-14">
          <div className="grid grid-cols-1 gap-6 px-6 lg:grid-cols-8 lg:gap-8 lg:px-0">
            <div className="col-span-1 flex flex-col items-center gap-4 lg:col-span-2 lg:items-start">
              <div className="flex">
                <a href="/" className="flex items-center gap-3">
                  <Logo color={theme?.colors?.jsconfYellow} size="52" />
                  <Title width="82" />
                </a>
              </div>
              <div className="flex items-center text-jsconf-yellow">
                <span>Siguenos: </span>
                <div className="ml-2 flex items-center gap-1">
                  {followLinks &&
                    followLinks.map(
                      (link) =>
                        link && (
                          <Link
                            key={link._key}
                            href={link.url || ""}
                            target={link.target || "_blank"}
                            variant={"transparent"}
                          >
                            {link.icon &&
                              socialMediaIcons[link.icon?.toLowerCase()]}
                          </Link>
                        ),
                    )}
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-2 lg:col-span-2 lg:items-start">
              <p className="text-xl text-gray-400">Información</p>
              {sectionLinks &&
                sectionLinks.map(
                  (link) =>
                    link && (
                      <Link
                        key={link._key}
                        href={link.url || ""}
                        target={link.target || "_blank"}
                        variant={"link"}
                      >
                        {link.text && link.text}
                      </Link>
                    ),
                )}
            </div>
            <div className="col-span-1 flex flex-col items-center gap-2 lg:col-span-4 lg:items-end">
              <div className="flex flex-col justify-end gap-2">
                <div className="flex w-full flex-col items-center justify-end gap-2 lg:flex-row">
                  <Link
                    href="https://auth.jschile.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suscribirme <ExternalLink />
                  </Link>
                </div>
                <p className="text-balance text-center text-sm text-gray-500 lg:text-right">
                  Te haremos llegar información y <br />
                  actualizaciones de la conferencia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="w-full text-center text-gray-400">
              Con ❤️ - El equipo JSConf Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
