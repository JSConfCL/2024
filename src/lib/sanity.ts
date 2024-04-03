import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function sanityQuery (query: string) {
  return await client.fetch<SanityDocument[]>(query);
}
