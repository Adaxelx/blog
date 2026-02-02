import { HashScroll } from "@/components/hash-scroll";
import { components } from "@/lib/mdx";
import type { PostMetadataMap, PostsPromiseMap } from "@/types";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

export const Route = createFileRoute("/$postId")({
  component: PostComponent,
});

const postModules = import.meta.glob("../posts/**/*.mdx", {
  eager: true,
  import: "metadata",
}) as PostMetadataMap;

const posts = import.meta.glob("../posts/**/*.mdx") as PostsPromiseMap;

export default function PostComponent() {
  const { postId } = useParams({ from: Route.id });

  const postPath = Object.entries(postModules).find(
    ([, value]) => postId === value.slug,
  )?.[0];

  if (!postPath) {
    return <p>Post not found</p>;
  }

  const Post = lazy(
    posts[postPath] as () => Promise<{ default: React.ComponentType }>,
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HashScroll />
      <article className="prose">
        <Post components={components} />
      </article>
    </Suspense>
  );
}
