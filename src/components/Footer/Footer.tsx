import { HeaderLink } from "@/components/Header/HeaderLink";
import { Logo } from "@/components/Icons/Logo";
import { Title } from "@/components/Icons/Title";
import { footer, links } from "@/lib/data";
import { theme } from "@/lib/theme";

export function Footer() {
  return (
    <footer className="relative z-10 text-white">
      <div className="pointer-events-none absolute z-10 h-[580px] w-[40%] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-[0.1] lg:h-[290px] lg:w-[60%]"></div>
      <div className="mx-6 flex flex-col py-14 lg:mx-auto lg:w-11/12 xl:w-8/12">
        <div className="flex w-full flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 px-20 lg:grid-cols-8 lg:gap-8 lg:px-0">
            <div className="col-span-1 flex flex-col items-center gap-4 lg:col-span-2 lg:items-start">
              <div className="flex">
                <a href="/" className="flex items-center gap-1">
                  <Logo color={theme?.colors?.jsconfYellow} size="38" />
                  <Title width="64" height="46" />
                </a>
              </div>
              <div className="flex items-center">
                <span>Siguenos: </span>
                <div className="ml-2 flex items-center gap-1 text-jsconf-yellow">
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
                <form className="flex w-full flex-col items-center justify-end gap-2 lg:flex-row">
                  <input
                    type="text"
                    placeholder="Ingresa tu correo y suscribete ..."
                    className="flex w-full flex-1 rounded-lg border border-gray-500 bg-transparent p-2 text-gray-500 lg:max-w-[300px]"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-jsconf-yellow p-2 text-gray-800 lg:w-36"
                  >
                    Suscribirme
                  </button>
                </form>
                <p className="text-balance text-right text-sm text-gray-500">
                  Te haremos llegar información y actualizaciones de la
                  conferencia
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="w-full text-center">
              Con ❤️ - El equipo JSConf Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
