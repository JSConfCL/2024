import Link from "next/link";
import type { Link as LinkType } from "@/api/types";
import { LogIn } from "lucide-react";

import { cn } from "@/lib/utils";

type HeaderLinkProps = LinkType & { isActive: boolean };

export function HeaderLink({
  url,
  target,
  text,
  icon,
  style,
  isActive,
}: HeaderLinkProps) {
  const Comp = url?.startsWith("/") && target === "_self" ? Link : "a";
  console.log(
    url,
    url?.startsWith("/"),
    target === "_self",
    url?.startsWith("/") && target === "self" ? "Link" : "a",
  );
  return (
    <Comp
      href={url ?? ""}
      target={target ?? ""}
      className={cn(
        "flex gap-2 font-barlow font-medium text-white rounded-full p-4 py-2 hover:text-jsconf-yellow",
        style === "button"
          ? "border rounded-md	border-jsconf-yellow text-white hover:bg-[#F0E04060] hover:text-black"
          : "",
        isActive ? "underline underline-offset-4 text-jsconf-yellow" : "",
      )}
      rel={target == "_blank" ? "noreferrer" : ""}
    >
      {text}
      {icon === "external" ? <LogIn /> : null}
    </Comp>
  );
}
