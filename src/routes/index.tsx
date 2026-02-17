import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading } from "@/components/heading";
import { Typography } from "@/components/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, sortByDateDescending } from "@/lib/date";
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
      <header className="space-y-1 flex flex-col">
        <Heading level="h1">adaxelx blog</Heading>
      </header>

      <section className="flex flex-col gap-6">
        <Heading level="h2" className="text-muted-foreground">
          Latest
        </Heading>
        <ul className="grid gap-4 sm:gap-5">
          {Object.values(postModules)
            .filter((value) => !value.isDraft)
            .slice(0, 10)
            .sort((a, b) => sortByDateDescending(a.date, b.date))
            .map((value) => (
              <li key={value.slug}>
                <Link
                  to="/posts/$postId"
                  params={{ postId: value.slug }}
                  className="block transition-opacity hover:opacity-90 focus-visible:opacity-90"
                >
                  <Card className="h-full transition-colors hover:bg-accent/50">
                    <CardHeader className="p-4 pb-2 sm:p-6 sm:pb-2 flex flex-col gap-1">
                      <Typography as="time" variant="secondary" size="12">
                        {formatDate(value.date)}
                      </Typography>
                      <CardTitle className="text-lg sm:text-xl">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                      <CardDescription className="text-sm leading-5 sm:text-[14px]">
                        {value.summary}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
