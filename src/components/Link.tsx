"use client";

import React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "relative mb-2 flex w-full items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-semibold",
  {
    variants: {
      variant: {
        default: "bg-jsconf-yellow text-black hover:bg-[#C8BC4F]",
        outline:
          "border border-jsconf-yellow bg-stone-950 text-white hover:bg-stone-900",
        link: "mb-0 w-auto p-0 text-base font-normal hover:text-jsconf-yellow",
        transparent: "rounded-full p-2 hover:bg-[#EDE06033]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CustomLinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  children: string | React.ReactNode;
  target?: string;
  rel?: string;
}

export const Link = ({ variant, children, ...props }: CustomLinkProps) => {
  const Comp = props.href.startsWith("/") ? NextLink : "a";

  return (
    <Comp {...props} className={cn(linkVariants({ variant }))}>
      {children}
    </Comp>
  );
};
