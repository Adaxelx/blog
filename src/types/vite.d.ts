/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";

  // ---- Frontmatter / metadata exports ----
  export const title: string;
  export const description: string;
  export const date: string;

  // ---- Default MDX component ----
  const MDXComponent: ComponentType<unknown>;
  export default MDXComponent;
}
