import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "size-full rounded-2xl bg-gradient-to-br from-slate-950 to-jsconf-black px-5 py-8 font-barlow",
  {
    variants: {
      size: {
        default: "md:p-12",
        sm: "md:p-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
export interface CardProps extends VariantProps<typeof cardVariants> {
  key: number;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({ children, size }: CardProps) => {
  return (
    <div className="rounded-2xl bg-gradient-to-tr from-jsconf-black via-jsconf-black to-jsconf-yellow p-[1px]">
      <div className={cn(cardVariants({ size }))}>{children}</div>
    </div>
  );
};
