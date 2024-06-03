import React, { ReactNode } from "react";
import type { Maybe, RichText as RichTextType } from "@/api/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "sanity";

import { cn } from "@/lib/utils";

const defaultStyles = {
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className={cn("flex flex-col leading-7 ml-4")}>{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: ReactNode }) => (
      <li className="list-disc	">{children}</li>
    ),
  },
};

const styles = {
  default: defaultStyles,
  cfp: {
    list: {
      bullet: ({ children }: { children: ReactNode }) => (
        <ul
          className={cn(
            "flex flex-col gap-4 leading-7",
            "relative before:absolute inset-x-inset-y-6 before:top-[16px] before:ml-[18px] before:h-full before:w-[2px] before:shrink-0 before:bg-gradient-to-b before:from-jsconf-yellow before:via-jsconf-black before:via-70% before:to-transparent before:md:to-90%",
          )}
        >
          {children}
        </ul>
      ),
    },
    listItem: {
      bullet: ({ children }: { children: ReactNode }) => (
        <li className="relative ml-9 before:absolute before:left-[-23px] before:top-[10px] before:z-10 before:inline-block before:size-3 before:rounded-full before:bg-gradient-radial before:from-jsconf-yellow before:to-transparent before:to-70% before:content-['']">
          {children}
        </li>
      ),
    },
  },
  volunteer: {
    ...defaultStyles,
    block: {
      normal: ({ children }: { children: ReactNode }) => (
        <p className={cn("mt-6")}>{children}</p>
      ),
    },
  },
};

export type RichTextStyle = keyof typeof styles;
interface RichTextProps {
  value: Maybe<RichTextType>;
  style?: RichTextStyle;
}

export const RichText = ({ value, style }: RichTextProps) => {
  if (!value) {
    return;
  }

  const components = style ? styles[style] ?? styles.default : styles.default;

  return (
    <PortableText
      value={value?.htmlTextRaw as TypedObject[]}
      components={components as Partial<PortableTextReactComponents>}
    />
  );
};
