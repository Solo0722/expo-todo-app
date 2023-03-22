import { SANITY_TOKEN } from "@env";
import { SanityClient } from "@sanity/client";

export const client = SanityClient({
  projectId: "oybefvus",
  dataset: "production",
  apiVersion: "2023-03-22",
  useCdn: true,
  token: SANITY_TOKEN,
});
