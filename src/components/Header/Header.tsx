"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Link as LinkType } from "@/api/types";

import { Logo } from "@/components/Icons/Logo";
import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

import { HeaderLink } from "./HeaderLink";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  links?: LinkType[];
}

export function Header({ links }: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="container relative z-10 mx-auto flex h-20 max-w-[1136px] items-center justify-between p-4">
      <Link href="/">
        <Logo color={theme?.colors?.jsconfYellow} size="36" />
      </Link>
      <div
        className={cn("hidden items-center md:flex", links ? "gap-2" : "gap-4")}
      >
        {links &&
          links.map(
            (link) =>
              link && (
                <HeaderLink
                  key={link.url}
                  isActive={pathname == link.url}
                  {...link}
                />
              ),
          )}
      </div>
      {links?.length ? <MobileNav links={links} activePath={pathname} /> : null}
    </header>
  );
}
