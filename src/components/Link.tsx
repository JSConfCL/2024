"use client";

import React from "react";

interface CustomLinkProps {
  href: string;
  children: string | React.ReactNode;
  target?: string;
  rel?: string;
}

export const Link = ({ children, ...props }: CustomLinkProps) => {
  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--x", x.toString());
    target.style.setProperty("--y", y.toString());
  }

  return (
    <a
      {...props}
      onMouseMove={handleMouseMove}
      className={`
        relative
        mb-2
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-md

        bg-jsconf-yellow
        px-8
        py-4
        text-sm
        font-medium
        text-black

        hover:bg-[#C8BC4F]
    `}
    >
      {children}
    </a>
  );
};
