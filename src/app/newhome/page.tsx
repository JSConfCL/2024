import Image from "next/image";

import { Hero } from "@/sections/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Moai } from "@/components/Icons/Moai";
import { Link } from "@/components/Link";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh]">
      <Header />
      <main className="text-white">
        <Hero
          title="JSConf Chile"
          description="Acompáñanos, en la primera edición Chilena, de la más prestigiosa conferencia de JavaScript. 2 días de Charlistas internacionales, comunidad, aprendizaje y conexiones, este 03 y 04 de Febrero, 2023"
          cta={{
            text: "Sponsor",
            url: "/sponsor",
          }}
          image={{
            src: "/images/siete_tazas.jpg",
          }}
        />
        <div className="container mx-auto flex max-w-[1136px] flex-col gap-16 p-4">
          <section className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <div className="relative bottom-[20px] z-[-1] mx-8 h-24 w-[2px] shrink-0 bg-gradient-to-t from-jsconf-yellow via-jsconf-black via-50% to-transparent to-80% md:to-jsconf-black md:to-80%" />
              <div className="mx-auto size-12 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(136,_113,_31,_0.79)_0%,_rgba(42,_36,_1,_0)_100%)]">
                <Moai />
              </div>
              <div className="relative top-[20px] z-[-1] mx-8 h-24 w-[2px] shrink-0 bg-gradient-to-b from-jsconf-yellow via-jsconf-black via-50% to-transparent to-80% md:to-jsconf-black md:to-80%" />
            </div>
            <div className="flex max-w-[710px] flex-col gap-9">
              <h2 className="font-barlow text-3xl font-semibold">
                La JSConf es una{" "}
                <span className="text-jsconf-yellow">
                  conferencia técnica única a nivel mundial
                </span>{" "}
                con una visión de mejorar la comunidad tecnológica, haciéndola
                más diversa y humana.
              </h2>
              <p className="font-barlow">
                Amplía conocimientos, conecta, mantente informado, participa en
                debates y actualízate con las tendencias de JavaScript en
                nuestra conferencia única. ¡Optimiza ingresos y sé parte de algo
                grande!
              </p>
            </div>
          </section>
          <section className="relative">
            <div className="absolute -z-10 size-full rounded-3xl bg-gradient-to-tr from-jsconf-black via-jsconf-black via-50% to-jsconf-yellow to-100%" />
            <div className="m-[2px] flex gap-20 rounded-3xl bg-[#090907] p-9">
              <div className="basis-3/5">
                <h1 className="mb-8 max-w-[419px] font-barlow text-5xl font-bold leading-snug">
                  ¿QUÉ ESPERAR DEL EVENTO?
                </h1>
                <p className="mb-8 font-barlow leading-loose">
                  Tendremos preparadas muchas actividades programadas y un
                  ambiente solo para tí, no necesitarás saber inglés, contaremos
                  con intérpretes para que no te pierdas ningún detalle de tu
                  expositor favorito
                </p>
                <div className="w-fit">
                  <Link href="/">Registrarme</Link>
                </div>
              </div>
              <div className="basis-2/5">
                <ul className="list-disc">
                  <li>Workshops dentro del mismo recinto</li>
                  <li>Áreas de descanso</li>
                  <li>Swag bag con temática de la JSConf Chile 2023</li>
                  <li className="w-fit">
                    <Link
                      href="https://github.com/JSConfCL/code_of_conduct/blob/main/README.md"
                      variant="link"
                    >
                      Código de la conducta
                    </Link>
                  </li>
                  <li>
                    Consideraciones alimenticias (Dependiendo de tus
                    preferencias al momento de comprar la entrada)
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex gap-7">
            <article className="basis-1/2 rounded-3xl border border-jsconf-black font-barlow">
              <Image
                src="/images/og-image.jpg"
                alt=""
                className="h-[224px] rounded-t-3xl object-cover"
                height={224}
                width={556}
              />
              <div className="px-16 py-6">
                <h2 className="mb-4 text-3xl font-bold">En línea</h2>
                <p className="leading-loose text-[#A8A8A8]">
                  Lorem ipsum dolor sit amet consectetur. Aliquam quis sagittis
                  felis enim et aliquam ultricies vestibulum. Magna in fusce
                  enim ac etiam.
                </p>
              </div>
            </article>
            <article className="basis-1/2 rounded-3xl border border-jsconf-black font-barlow">
              <Image
                src="/images/og-image.jpg"
                alt=""
                className="h-[224px] rounded-t-3xl object-cover"
                height={224}
                width={556}
              />
              <div className="px-16 py-6">
                <h2 className="mb-4 text-3xl font-bold">Presencial</h2>
                <p className="leading-loose text-[#A8A8A8]">
                  Conecta con exponentes y Devs estelares, obtén stickers,
                  poleras y Swag oficial de la JSConf y encuentra tu próxima
                  empresa
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
