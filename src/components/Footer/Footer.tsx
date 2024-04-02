import { HeaderLink } from "@/components/Header/HeaderLink";
import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Icons/Title";
import { footer, links } from "@/lib/data";
import { theme } from "@/lib/theme";

export function Footer() {
  return (
    <footer className="relative z-10 text-white">
      <div className="pointer-events-none absolute inset-0 z-10 hidden w-[60%] bg-gradient-to-r from-transparent via-jsconf-yellow to-transparent opacity-10 md:inline-block"></div>
      <div className="pointer-events-none absolute inset-0 z-10 w-[80%] bg-gradient-to-r from-jsconf-yellow via-jsconf-yellow to-transparent opacity-10 md:hidden"></div>
      <div className="mx-6 flex flex-col py-14 lg:mx-auto lg:w-11/12 xl:w-8/12">
        <div className="absolute top-0 ml-[25%] w-full rounded-full bg-gradient-to-r from-transparent via-jsconf-yellow to-transparent p-[0.4px] lg:w-[550px]"></div>
        <div className="flex w-full flex-col gap-8">
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
                    <HeaderLink key={link.id} link={link} />
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
                  <a
                    target="_blank"
                    href="https://auth.jschile.org"
                    className="w-full rounded-lg bg-jsconf-yellow p-2 py-3 text-center text-gray-800 transition-all duration-300 ease-in-out hover:bg-jsconf-red hover:text-white lg:w-36"
                  >
                    Suscribirme
                  </a>
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
