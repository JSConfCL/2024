import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const imageCardVariants = cva(
  "max-w-[556px] basis-1/2 rounded-3xl border font-barlow",
  {
    variants: {
      theme: {
        default: "border-jsconf-black text-white",
        light: "border-[#ECECEC] bg-[#ECECEC] text-black",
      },
    },
    defaultVariants: {
      theme: "default",
    },
  },
);

interface ImageCardProps extends VariantProps<typeof imageCardVariants> {
  title: string;
  text: string;
  src: string;
}

export const ImageCard = ({ theme, title, text, src }: ImageCardProps) => {
  return (
    <section className={cn(imageCardVariants({ theme }))}>
      <Image
        src={src}
        alt=""
        className="h-[224px] rounded-t-3xl object-cover"
        height={224}
        width={556}
      />
      <div className="px-7 py-6">
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <p className="leading-relaxed">{text}</p>
      </div>
    </section>
  );
};
