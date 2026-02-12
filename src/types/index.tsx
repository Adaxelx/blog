import type { JSX } from "react";

export type PostType = {
  title: string;
  summary: string;
  date: string;
  slug: string;
  default: () => JSX.Element;
  isDraft: boolean;
};

export type PostMetadata = Pick<
  PostType,
  "date" | "slug" | "summary" | "title" | "isDraft"
>;

export type PostsEagerMap = Record<string, PostType>;
export type PostsPromiseMap = Record<string, () => Promise<PostType>>;
export type PostMetadataMap = Record<string, PostMetadata>;
