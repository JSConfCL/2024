import Link from "next/link";

import { HeaderLink } from "@/components/Header/HeaderLink";
import { Logo } from "@/components/Icons/Logo";
import { links } from "@/lib/data";
import { theme } from "@/lib/theme";

export function Header() {
  return (
    <header className="container relative z-10 mx-auto flex h-20 max-w-[1136px] items-center justify-between p-4 text-jsconf-yellow">
      <Link href="/">
        <Logo color={theme?.colors?.jsconfYellow} size="36" />
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <HeaderLink key={link.id} link={link} />
        ))}
      </div>
    </header>
  );
}
