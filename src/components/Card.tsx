"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface CardProps {
  text: string[];
  title: string;
  url?: string;
  actionTitle?: string;
}

export const Card = ({ text, title, actionTitle, url }: CardProps) => {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--x", x.toString());
    target.style.setProperty("--y", y.toString());
  }

  return (
    <div
      className={`
        group
        relative
      `}
    >
      <div
        onMouseMove={handleMouseMove}
        className={`
          card

          relative
          flex
          size-full
          flex-col
          justify-between
          rounded-lg
          bg-[#161b22]
          p-8
          font-barlow
          text-sm
          font-medium
          text-white
          before:pointer-events-none
          before:absolute

          before:inset-0

          before:rounded-lg
          before:bg-fixed
          before:content-['']
          after:pointer-events-none
          after:absolute
          after:inset-0

          after:bg-fixed
          after:transition-opacity
          after:content-['']
          focus:outline-none
        `}
      >
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl xl:text-4xl">
            {title}
          </h2>
          {text.map((sentence) => (
            <p
              key={sentence}
              className="mb-6 text-lg text-[#ebf5ff80] last:mb-0"
            >
              {sentence}
            </p>
          ))}
        </div>
        {actionTitle && url ? (
          <a
            className="my-6 mb-0 flex items-center p-2 pl-0 text-lg text-[#E9DF74] group-hover:text-jsconf-yellow xl:text-2xl"
            href={url}
          >
            {actionTitle} <ChevronRight className="ml-2" />
          </a>
        ) : null}
      </div>
    </div>
  );
};
