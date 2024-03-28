"use client";

import React from "react";

import { generateGoogleCalendarUrl } from "@/lib/calendar";
import { JSCONF } from "@/lib/data";

interface ButtonSaveInCalendarProps {
  children: string | React.ReactNode;
}

export const ButtonSaveInCalendar = ({ children, ...props }: ButtonSaveInCalendarProps) => {
  function handleSaveInCalendar() {
    window.open(generateGoogleCalendarUrl({
      dateStart: JSCONF.startDate,
      // se suma un día para que el evento dure 3 días
      // esto tengo que arreglarlo para que no queda tan hardcodeado
      dateEnd: new Date(JSCONF.endDate.getTime() + 24 * 60 * 60 * 1000),
      title: "JSConf Chile 2024",
      description: "JSConf Chile te invita a un mundo donde JavaScript da forma al futuro. Este evento es un crisol de ideas innovadoras, charlas de expertos y una comunidad apasionada por la tecnología. Experimenta la combinación de tecnologías avanzadas de JavaScript, conecta con líderes de la industria y sé parte de un movimiento que impulsa la tecnología hacia adelante.",
      location: JSCONF.place
    }), '_blank');
  }

  return (
    <button
      {...props}
      onClick={() => handleSaveInCalendar()}
      className={`
        relative
        mb-2
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-md

        border-2
        
        border-gray-400
        bg-transparent

        px-8
        py-4

        text-sm
        font-medium
        text-gray-400
        transition-all
        duration-300

        ease-in-out
        hover:border-jsconf-red
        hover:text-jsconf-red
    `}
    >
      {children}
    </button>
  );
};
