import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SocialLink({
  link: { id, url },
}: {
  link: { id: string; url: string };
}) {
  return (
    <a
      href={url}
      className="rounded-full p-2 hover:bg-[#EDE06033]"
      target="_blank"
      rel="noreferrer"
    >
      {id == "linkedin" ? <Linkedin strokeWidth={1} /> : null}
      {id == "instagram" ? <Instagram strokeWidth={1} /> : null}
      {id == "twitter" ? <Twitter strokeWidth={1} /> : null}
      {id == "facebook" ? <Facebook strokeWidth={1} /> : null}
    </a>
  );
}
