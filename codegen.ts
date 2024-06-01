import type { CodegenConfig } from '@graphql-codegen/cli';
import defaultConfig from "./graphql.config";

const noTypeCheckingPlugin = {
  add: {
    content: [
      "/* eslint-disable */",
      "/* @ts-nocheck */",
      "/* prettier-ignore */",
      "/* This file is automatically generated. Please do not modify it manually. */",
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config: CodegenConfig = {
  ...defaultConfig,
  ignoreNoDocuments: true,
  generates: {
    "src/api/schema.gql": {
      plugins: ["schema-ast"],
    },    
    "src/api/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        noTypeCheckingPlugin,
      ],
      config: {
        avoidOptionals: true,
        useTypeImports: true,
        defaultScalarType: "unknown",
      },
    },
  },
} satisfies CodegenConfig;
export default config;
