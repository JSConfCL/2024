"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetAllcommunitiesQuery } from "@/api/types";
import { urlForImage } from "@/sanity/lib/image";
import { cva, VariantProps } from "class-variance-authority";
import Autoscroll from "embla-carousel-auto-scroll";
import type { Image as ImageType } from "sanity";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const communitiesVariants = cva("absolute top-0 z-10 h-full w-1/6", {
  variants: {
    theme: {
      default: "from-[#0d0d0b]",
      light: "from-white",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

interface CommunitiesProps extends VariantProps<typeof communitiesVariants> {
  communities: GetAllcommunitiesQuery;
}

function repeatArrayUntilMinLength<T>(arr: T[]): T[] {
  let result = [...arr];
  while (result.length < 7) {
    result = result.concat(arr);
  }
  return result;
}

export const Communities = ({ communities, theme }: CommunitiesProps) => {
  const communitiesItems = repeatArrayUntilMinLength(communities.allCommunity);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoscroll({
          speed: 0.5,
        }),
      ]}
      className="relative w-full"
    >
      <div
        className={cn(
          "left-0 bg-gradient-to-r",
          communitiesVariants({ theme }),
        )}
      />
      <div
        className={cn(
          "right-0 bg-gradient-to-l",
          communitiesVariants({ theme }),
        )}
      />
      <CarouselContent>
        {communitiesItems.map((item) => (
          <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/6">
            {item.logo && (
              <Image
                src={urlForImage(item.logo.asset as unknown as ImageType)}
                alt={item.name ?? ""}
                width={50}
                height={50}
              />
            )}
            {item.webpage && (
              <Link
                href={item.webpage}
                target="_blank"
                className={cn({ "text-black": theme === "light" })}
              >
                Ver más
              </Link>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
