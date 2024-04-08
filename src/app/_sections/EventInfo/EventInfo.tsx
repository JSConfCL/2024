"use client";

import React, { useEffect, useRef, useState } from "react";
import { JSCONF } from "@/lib";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface CountdownValueProps {
  title: string;
  value: number;
}

const CountdownValue = ({ title, value }: CountdownValueProps) => {
  return (
    <div className="w-fit rounded-xl bg-gradient-to-tr from-jsconf-black via-jsconf-black to-jsconf-yellow p-[2px]">
      <div className="flex w-fit min-w-[68px] flex-col gap-2 rounded-lg bg-[#090907] p-2 text-center font-inconsolata font-bold md:min-w-[116px] md:p-6">
        <span className="text-4xl md:text-6xl">
          {value.toString().padStart(2, "0")}
        </span>
        <span className="text-xs text-jsconf-yellow md:text-base">{title}</span>
      </div>
    </div>
  );
};

export const Countdown = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const now = new Date();
    const eventDate = new Date(JSCONF.startDate);
    const diff = +eventDate - +now;

    const days = Math.floor(diff / DAY);
    const hours = Math.floor((diff % DAY) / HOUR);
    const minutes = Math.floor((diff % HOUR) / MINUTE);
    const seconds = Math.floor((diff % MINUTE) / SECOND);

    setTime({ days, hours, minutes, seconds });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-center gap-4">
        <CountdownValue value={time.days} title={"Días"} />
        <CountdownValue value={time.hours} title={"Horas"} />
        <CountdownValue value={time.minutes} title={"Minutos"} />
        <CountdownValue value={time.seconds} title={"Segundos"} />
      </div>
    </div>
  );
};

interface InfoValueProps {
  title: string;
  value: string;
}

const InfoValue = ({ title, value }: InfoValueProps) => {
  return (
    <div className="w-fit  rounded-xl bg-gradient-to-tr from-jsconf-black via-jsconf-black to-jsconf-yellow p-[2px]">
      <div className="flex w-full justify-center gap-2 rounded-lg bg-[#090907] p-2 text-center font-inconsolata font-bold">
        <span className="text-jsconf-yellow ">{title}</span>
        <span className="text-white">({value})</span>
      </div>
    </div>
  );
};

export const EventInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row	">
        <InfoValue title="Fecha" value={`"${JSCONF.strDates}"`} />
        <InfoValue title="Lugar" value="Santiago, Chile" />
      </div>
      <Countdown />
    </div>
  );
};
