import { Link as LinkType, Maybe } from "@/api/types";

import { Link } from "../Link";

interface HeaderLinkProps {
  link: Maybe<Maybe<LinkType>>;
}

export function HeaderLink({ link }: HeaderLinkProps) {
  return (
    link && (
      <Link
        href={link.url || ""}
        target={link.target || "_blank"}
        rel="noreferrer"
        variant="link"
      >
        {link.text && link.text}
      </Link>
    )
  );
}
