import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading } from "@/components/heading";
import { Typography } from "@/components/typography";
import { formatDate } from "@/lib/date";
import type { PostMetadataMap } from "@/types";

export const Route = createFileRoute("/")({
  component: Index,
});

const postModules = import.meta.glob("../posts/**/*.mdx", {
  eager: true,
  import: "metadata",
}) as PostMetadataMap;

function Index() {
  return (
    <>
      <header>
        <Heading level="h1">Welcome to Adx blog</Heading>
      </header>

      <section className="flex flex-col gap-4">
        <Heading level="h2">Latest:</Heading>
        {Object.entries(postModules).map(([, value]) => {
          return (
            <Link to="/$postId" params={{ postId: value.slug }}>
              <article className="p-2 border rounded-md flex flex-col gap-2">
                <Typography as="time" className="self-end" variant="secondary">
                  {formatDate(value.date)}
                </Typography>
                <Heading level="h4">{value.title}</Heading>
                <Typography size="14">{value.summary}</Typography>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}
