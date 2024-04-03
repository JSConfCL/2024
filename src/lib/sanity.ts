import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

export async function sanityQuery(query: string) {
  return await client.fetch<SanityDocument[]>(query);
}
