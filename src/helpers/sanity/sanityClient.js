import { SANITY_TOKEN, SANITY_ID } from "@env";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: SANITY_ID,
  dataset: "production",
  apiVersion: "2023-03-22",
  useCdn: true,
  token: SANITY_TOKEN,
});
