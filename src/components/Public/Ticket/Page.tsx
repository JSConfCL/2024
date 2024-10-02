import Head from "next/head";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/Link";
import { SocialLink } from "@/components/SocialLink/SocialLink";
import { JSCONF } from "@/lib/data";
import { cn } from "@/lib/utils";

import { PublicTicket } from "./PublicTicket";

export const config = {
  runtime: "experimental-edge",
};

const _ticketApiUrl = process.env.NEXT_PUBLIC_WORKER_IMAGE_API!;

interface UserInfo {
  legalName: string;
  userName: string;
}

interface TicketInfo {
  id: string;
  shareType: string;
  ticketType: string;
  userInfo: UserInfo;
}

const PublicTicketPage = ({
  id,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shareType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ticketType,
  userInfo,
}: TicketInfo) => {
  const ogImage = `${JSCONF.imagesApi}?ticketId=${id}`;
  const publicUrl = `${JSCONF.shareWebpage}/public/ticket/${id}`;
  const twitterUrl = `Lista mi entrada para la @JSConfCL 🎉. Obtén la tuya en ${publicUrl} . Nos vemos el 05, 06 y 07 de Diciembre!`;

  const links = [
    {
      id: "twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterUrl)}`,
    },
    {
      id: "linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(publicUrl)}`,
    },
    {
      id: "facebook",
      url: `http://www.facebook.com/sharer.php?u=${encodeURIComponent(publicUrl)}`,
    },
  ];

  return (
    <div>
      <Head>
        <title>{userInfo.legalName} 💛 JSConf Chile</title>
        <meta
          name="description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />

        <meta property="og:url" content={ogImage} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${userInfo.legalName} 💛 JSConf Chile`}
        />
        <meta
          property="og:description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:site" content="@jsconfcl" />
        <meta name="twitter:creator" content="@jsconfcl" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jsconf.cl" />
        <meta property="twitter:url" content={publicUrl} />
        <meta
          name="twitter:title"
          content={`${userInfo.legalName} 💛 JSConf Chile`}
        />
        <meta
          name="twitter:description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto flex w-full flex-col gap-4 pt-4 md:container md:flex-row md:gap-16 md:py-16">
          <div className="flex w-full items-center justify-end">
            <PublicTicket
              legalName={userInfo.legalName}
              userName={userInfo.userName}
            />
          </div>
          <div className="flex w-full grow items-center justify-start px-8 py-4">
            <div className="flex w-full flex-col gap-4 text-center md:text-left">
              <div className="font-barlow text-2xl font-semibold md:text-3xl">
                Únete a la JSConf Chile 2024
              </div>
              <div className="font-barlow text-2xl font-semibold text-jsconf-yellow md:text-3xl">
                Los días 5, 6 y 7 de diciembre
              </div>
              <div className="font-barlow text-base md:text-xl	">
                Conoce más detalles visita:{" "}
                <a
                  href={JSCONF.webpage}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "inline p-0 text-xl text-jsconf-yellow",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {JSCONF.webpage}
                </a>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <Link
                  href={JSCONF.ticketsCommunity}
                  className={cn("py-3 w-full md:w-auto")}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tickets
                </Link>
                <Link
                  href={JSCONF.webpage}
                  className="w-full bg-secondary py-3  text-secondary-foreground  hover:bg-secondary/80 md:w-auto"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  JSConf 2024
                </Link>
              </div>
              <div className="mt-4 flex flex-row items-center justify-center gap-4 md:justify-start">
                <div>Compartir:</div>
                <div className="flex flex-row text-jsconf-yellow">
                  {links.map((link) => (
                    <SocialLink key={link.id} link={link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicTicketPage;
