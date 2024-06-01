import type { IGraphQLConfig } from "graphql-config";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const config: IGraphQLConfig = {
  schema: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
  documents: ["src/**/*.gql"],
};

export default config;
