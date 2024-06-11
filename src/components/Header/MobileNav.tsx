"use client";

import { useState } from "react";
import Link from "next/link";
import type { Link as LinkType, Maybe } from "@/api/types";
import { LogIn, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Icons/Logo";
import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function MobileNav({
  links,
  activePath,
}: {
  links?: Maybe<Maybe<LinkType>[]>;
  activePath?: string;
}) {
  const [open, setOpen] = useState(false);

  const closeNav = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-4 pb-0" icon="menu">
        <Link href="/" className="flex items-center" onClick={closeNav}>
          <Logo color={theme?.colors?.jsconfYellow} size="36" />
        </Link>
        <ScrollArea className="my-4 px-6 pb-10">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-3 pt-6">
              {links &&
                links.map((link) => {
                  const Comp =
                    link &&
                    link.url?.startsWith("/") &&
                    link?.target === "_self"
                      ? Link
                      : "a";
                  return (
                    link && (
                      <Comp
                        key={`mobile-${link.text}`}
                        href={link.url ?? ""}
                        target={link.target ?? ""}
                        className={cn(
                          "flex font-barlow justify-center	gap-2 p-4 py-2",
                          link.style === "button"
                            ? "border rounded-md	border-jsconf-yellow text-white hover:bg-[#F0E04060] hover:text-black"
                            : "",
                          activePath == link.url
                            ? "underline underline-offset-8 text-jsconf-yellow"
                            : "",
                        )}
                      >
                        {link.text}
                        {link.icon === "external" ? <LogIn /> : null}
                      </Comp>
                    )
                  );
                })}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
