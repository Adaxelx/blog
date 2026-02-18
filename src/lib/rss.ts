/// <reference types="node" />
import type { PostMetadata } from "@/types";
import fs from "fs";
import path from "path";
import RSS from "rss";

const postsDir = path.join(process.cwd(), "src", "posts");

function findMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractMetadataFromMdx(filePath: string): PostMetadata | null {
  const content = fs.readFileSync(filePath, "utf-8");
  const marker = "export const metadata = ";
  const idx = content.indexOf(marker);
  if (idx === -1) return null;

  const start = idx + marker.length;
  const firstBrace = content.indexOf("{", start);
  if (firstBrace === -1) return null;

  let depth = 0;
  let i = firstBrace;
  let inString: string | null = null;
  let escape = false;

  while (i < content.length) {
    const c = content[i];
    if (escape) {
      escape = false;
      i++;
      continue;
    }
    if (inString) {
      if (c === "\\") escape = true;
      else if (c === inString) inString = null;
      i++;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      i++;
      continue;
    }
    if (c === "{") {
      depth++;
      i++;
      continue;
    }
    if (c === "}") {
      depth--;
      if (depth === 0) {
        const objStr = content.slice(firstBrace, i + 1);
        try {
          return new Function("return " + objStr)() as PostMetadata;
        } catch {
          return null;
        }
      }
      i++;
      continue;
    }
    i++;
  }
  return null;
}

const mdxFiles = findMdxFiles(postsDir);
const allPosts = mdxFiles
  .map(extractMetadataFromMdx)
  .filter((post): post is PostMetadata => post !== null);

const feed = new RSS({
  title: "adaxelx blog",
  site_url: "https://adaxelx.github.io/blog/",
  feed_url: "https://adaxelx.github.io/blog/rss.xml",
});

allPosts
  .filter((post) => !post.isDraft)
  .forEach((post) => {
    feed.item({
      title: post.title,
      url: `https://adaxelx.github.io/blog/posts/${post.slug}`,
      description: post.summary,
      date: post.date,
    });
  });

const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, "rss.xml"), feed.xml({ indent: true }));
