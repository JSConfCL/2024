import { ExternalLink } from "lucide-react";

import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Icons/Title";
import { Link } from "@/components/Link";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { footer, links } from "@/lib/data";
import { theme } from "@/lib/theme";

export function Footer() {
  return (
    <footer className="relative z-10 font-barlow text-white before:absolute before:inset-0 before:z-10 before:w-[80%] before:bg-gradient-to-r before:from-jsconf-yellow before:via-jsconf-yellow before:to-transparent before:opacity-10 before:content-[''] before:md:w-[60%] before:md:from-transparent before:md:via-jsconf-yellow">
      <div className="flex max-w-[1136px] flex-col p-4 pt-0 before:top-0 before:h-0.5 before:w-full before:bg-gradient-to-r before:from-transparent before:from-10% before:via-jsconf-yellow before:via-50% before:to-transparent before:to-90% before:content-[''] lg:mx-auto">
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
                  {links.map((link) => (
                    <SocialLink key={link.id} link={link} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-2 lg:col-span-2 lg:items-start">
              <p className="text-xl text-gray-400">Información</p>
              {footer.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-jsconf-yellow"
                >
                  {link.name}
                </a>
              ))}
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
