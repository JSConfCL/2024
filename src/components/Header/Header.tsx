import Link from "next/link";
import { Link as LinkType, Maybe } from "@/api/types";

import { HeaderLink } from "@/components/Header/HeaderLink";
import { Logo } from "@/components/Icons/Logo";
import { theme } from "@/lib/theme";

interface HeaderProps {
  links?: Maybe<Maybe<LinkType>[]>;
}

export function Header({ links }: HeaderProps) {
  return (
    <header className="container relative z-10 mx-auto flex h-20 max-w-[1136px] items-center justify-between p-4">
      <Link href="/">
        <Logo color={theme?.colors?.jsconfYellow} size="36" />
      </Link>
      <div className="flex items-center gap-6">
        {links &&
          links.map(
            (link) => link && <HeaderLink key={link._key} link={link} />,
          )}
      </div>
    </header>
  );
}
