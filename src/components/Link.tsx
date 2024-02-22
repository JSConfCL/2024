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
        link

        relative
        mb-2
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-md
        border
        border-mountain-primary
        bg-black

        px-8
        py-4
        text-sm
        font-medium
        text-white

        before:pointer-events-none

        before:absolute
        before:inset-0
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
      {children}
    </a>
  );
};
