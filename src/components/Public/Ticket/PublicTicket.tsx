/* eslint-disable tailwindcss/no-custom-classname */

import React from "react";
import { Atropos } from "atropos/react";

import { Logo, Mountain, Title } from "@/components/Icons";
import { Particles } from "@/components/Particles";

import "atropos/css";

import { theme } from "@/lib/theme";

export interface PublicTicketProps {
  legalName: string;
  userName: string;
}

// eslint-disable-next-line no-empty-pattern
export const PublicTicket = ({ legalName }: PublicTicketProps) => {
  return (
    <Atropos className="my-atropos">
      <div className="relative h-[640px] max-h-[90%] w-[420px] max-w-[90%] rounded-xl bg-[#121212]">
        <div className="relative flex size-full items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 z-[10]"
            data-atropos-offset="-5"
          >
            <div className="flex size-full items-center justify-center">
              <div className="absolute">
                <div className="relative z-30 mx-auto w-[320px] max-w-[90%] animate-gradient-svg from-mountain-primary to-mountain-secondary blur-[1px]">
                  <Mountain />
                </div>
                <div className="absolute top-0 -z-20 mx-auto size-full max-w-[100%] bg-gradient-radial to-black"></div>
                <div
                  className="absolute top-0 -z-10 mx-auto size-full max-w-[100%] md:w-[746px] lg:w-[900px] xl:w-[1200px]"
                  id="home"
                ></div>
                <Particles id="home" />
                <div className="absolute top-0 z-[-1] mx-auto size-full max-w-[100%] opacity-70 blur-xl"></div>
              </div>
            </div>
          </div>
          <div className="z-[40]">
            <div className="mx-auto flex h-[calc(100vh_-_80px)] flex-auto flex-col justify-center gap-40 text-left text-white">
              <h1
                className="mx-auto flex items-end gap-6"
                data-atropos-offset="0"
              >
                <Title width="165" />
                <Logo color={theme?.colors?.jsconfYellow} size="52" />
              </h1>
              <div className="flex flex-col gap-4 text-center">
                <h3 className="rounded-lg bg-[#090907B2] p-1 font-inconsolata font-bold text-jsconf-yellow">
                  Fecha (“DIC 5, 6 y 7 2024”)
                </h3>
                <h2
                  className="font-barlow text-4xl font-semibold text-white"
                  data-atropos-offset="5"
                >
                  {legalName}
                </h2>
                <h3
                  className="font-inconsolata text-2xl font-bold text-jsconf-yellow"
                  data-atropos-offset="5"
                >
                  &nbsp;
                </h3>
                <h3 className="rounded-lg bg-[#090907B2] p-2 font-inconsolata text-2xl font-bold text-white">
                  Entrada General
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  );
};
