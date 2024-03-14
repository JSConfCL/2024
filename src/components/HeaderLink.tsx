import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function HeaderLink(
  { link: { id, url } }:
  { link: { id: string, url: string } }
) {
  return (
    <a
      key={id}
      id={id}
      href={url}
      className="rounded-full p-2 hover:bg-[#EDE06033]"
      target="_blank"
      rel="noreferrer"
    >
      {id == "linkedin" && <Linkedin strokeWidth={1} />}
      {id == "instagram" && <Instagram strokeWidth={1} />}
      {id == "twitter" && <Twitter strokeWidth={1} />}
      {id == "facebook" && <Facebook strokeWidth={1} />}
    </a>
  );
}
